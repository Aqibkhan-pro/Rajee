import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { IonContent, NavController } from '@ionic/angular';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { ChatRoom } from 'src/app/shared/common.interface';

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
  private messagesListener: any;

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
    console.log("ChatRoom:", this.chatRoom);

    const currentUser = JSON.parse(localStorage.getItem('userData') || '{}');
    if (!currentUser?.uid) {
      console.error('Current user not found');
      this.navCtrl.back();
      return;
    }

    this.currentUserId = currentUser.uid;

    // Get other participant's name
    this.otherUserName = this.getOtherParticipantName();

    // Reset unread count for current user
    this.resetUnreadCount();

    // Listen for messages
    this.listenMessages();
  }

  ngOnDestroy() {
    if (this.messagesListener) {
      this.messagesListener.off();
    }
  }

  // Get the other participant's name
  getOtherParticipantName(): string {
    const participants = this.chatRoom.participants;
    for (const uid in participants) {
      if (uid !== this.currentUserId) {
        return participants[uid].name || 'Unknown User';
      }
    }
    return 'Unknown User';
  }

  // Reset unread count when user opens chat
  async resetUnreadCount() {
    try {
      await this.db.database
        .ref(`/chatRooms/${this.chatRoom.id}/participants/${this.currentUserId}/unreadCount`)
        .set(0);
    } catch (error) {
      console.error('Error resetting unread count:', error);
    }
  }

  // Listen for messages in this room
  listenMessages() {
    const messagesRef = this.db.database
      .ref(`/messages/${this.chatRoom.id}`)
      .orderByChild('timestamp');

    this.messagesListener = messagesRef;

    messagesRef.on('value', snapshot => {
      const msgs: Message[] = [];
      snapshot.forEach(child => {
        msgs.push(child.val());
      });

      // Sort by timestamp
      this.messages = msgs.sort((a, b) => a.timestamp - b.timestamp);

      // Scroll to bottom after messages load
      setTimeout(() => this.scrollToBottom(), 100);
    });
  }

  // Send message
  async sendMessage() {
    const text = this.newMessage.trim();
    if (!text) return;

    this.newMessage = '';

    const msg: Message = {
      senderId: this.currentUserId,
      message: text,
      timestamp: Date.now()
    };

    try {
      // Save message
      await this.db.database.ref(`/messages/${this.chatRoom.id}`).push(msg);

      // Update last message & unread count for other participants
      const updates: any = {
        lastMessage: text,
        lastMessageTime: msg.timestamp
      };

      // Increment unread count for other participants
      for (const uid of Object.keys(this.chatRoom.participants)) {
        if (uid !== this.currentUserId) {
          updates[`participants/${uid}/unreadCount`] = firebase.database.ServerValue.increment(1);
        }
      }

      await this.db.database.ref(`/chatRooms/${this.chatRoom.id}`).update(updates);

      // Scroll to bottom after sending
      setTimeout(() => this.scrollToBottom(), 50);
    } catch (error) {
      console.error('Error sending message:', error);
      // Optionally show error toast to user
    }
  }

  private scrollToBottom() {
    if (this.content) {
      this.content.scrollToBottom(300);
    }
  }

  goBack() {
    this.navCtrl.back();
  }

  // Check if message sent by current user
  isSent(message: Message): boolean {
    return message.senderId === this.currentUserId;
  }

  // Format timestamp
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
