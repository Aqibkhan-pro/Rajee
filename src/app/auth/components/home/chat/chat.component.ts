import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { IonContent, NavController } from '@ionic/angular';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { ChatRoom } from 'src/app/shared/common.interface';

import { Keyboard } from '@capacitor/keyboard';

interface Message {
  senderId: string;
  message: string;
  timestamp: number;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: false
})
export class ChatComponent implements OnInit, OnDestroy {

  @ViewChild(IonContent, { static: false }) content!: IonContent;

  chatRoom!: ChatRoom;
  currentUserId: string = '';
  otherUserName: string = '';
  messages: Message[] = [];
  newMessage: string = '';

  isKeyboardOpen = false;

  private messagesListener: any;
  private kbShow: any;
  private kbHide: any;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private db: AngularFireDatabase
  ) {}

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    if (!nav?.extras?.state?.['chatRoom']) {
      console.error('ChatRoom not found');
      this.navCtrl.back();
      return;
    }

    this.chatRoom = nav.extras.state['chatRoom'];

    const currentUser = JSON.parse(localStorage.getItem('userData') || '{}');
    if (!currentUser?.uid) {
      console.error('Current user not found');
      this.navCtrl.back();
      return;
    }

    this.currentUserId = currentUser.uid;
    this.otherUserName = this.getOtherParticipantName();

    // ✅ keyboard listeners: adjust padding + scroll
    this.kbShow = Keyboard.addListener('keyboardWillShow', () => {
      this.isKeyboardOpen = true;
      setTimeout(() => this.scrollToBottom(), 160);
    });

    this.kbHide = Keyboard.addListener('keyboardWillHide', () => {
      this.isKeyboardOpen = false;
      setTimeout(() => this.scrollToBottom(), 160);
    });

    this.resetUnreadCount();
    this.listenMessages();
  }

  ngOnDestroy() {
    if (this.messagesListener) this.messagesListener.off();
    this.kbShow?.remove?.();
    this.kbHide?.remove?.();
  }

  getOtherParticipantName(): string {
    const participants = this.chatRoom.participants;
    for (const uid in participants) {
      if (uid !== this.currentUserId) {
        return participants[uid].name || 'Unknown User';
      }
    }
    return 'Unknown User';
  }

  async resetUnreadCount() {
    try {
      await this.db.database
        .ref(`/chatRooms/${this.chatRoom.id}/participants/${this.currentUserId}/unreadCount`)
        .set(0);
    } catch (error) {
      console.error('Error resetting unread count:', error);
    }
  }

  listenMessages() {
    const messagesRef = this.db.database
      .ref(`/messages/${this.chatRoom.id}`)
      .orderByChild('timestamp');

    this.messagesListener = messagesRef;

    messagesRef.on('value', (snapshot: firebase.database.DataSnapshot) => {
      const msgs: Message[] = [];

      snapshot.forEach((child) => {
        msgs.push(child.val() as Message);
      });

      this.messages = msgs.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
      setTimeout(() => this.scrollToBottom(), 160);
    });
  }

  async sendMessage() {
    const text = (this.newMessage || '').trim();
    if (!text) return;

    this.newMessage = '';

    const msg: Message = {
      senderId: this.currentUserId,
      message: text,
      timestamp: Date.now()
    };

    try {
      await this.db.database.ref(`/messages/${this.chatRoom.id}`).push(msg);

      const updates: any = {
        lastMessage: text,
        lastMessageTime: msg.timestamp
      };

      for (const uid of Object.keys(this.chatRoom.participants)) {
        if (uid !== this.currentUserId) {
          updates[`participants/${uid}/unreadCount`] =
            firebase.database.ServerValue.increment(1);
        }
      }

      await this.db.database.ref(`/chatRooms/${this.chatRoom.id}`).update(updates);

      setTimeout(() => this.scrollToBottom(), 120);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }

  private scrollToBottom() {
    if (this.content) {
      this.content.scrollToBottom(250);
    }
  }

  isSent(message: Message): boolean {
    return message.senderId === this.currentUserId;
  }

  formatTime(timestamp: number): string {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${displayHours}:${displayMinutes} ${ampm}`;
  }
}
