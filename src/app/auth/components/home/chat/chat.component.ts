import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { IonContent, NavController } from '@ionic/angular';
import { ChatApiService, Message } from 'src/app/services/chat.service';
import { User } from 'src/app/services/user.service';
import { ChatRoom } from 'src/app/shared/common.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: false
})
export class ChatComponent implements OnInit, OnDestroy {
  @ViewChild(IonContent, { static: false }) content!: IonContent;

  chatRoom!: ChatRoom;
  sender!: User;
  messages: Message[] = [];
  newMessage: string = '';
  private messageSubscription?: any;
  private isInitialLoad = true;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private chatService: ChatApiService,
    private db: AngularFireDatabase
  ) {}

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state) {
      this.chatRoom = nav.extras.state['chatRoom'];
      console.log('ChatRoom:', this.chatRoom);
      this.sender = JSON.parse(localStorage.getItem('userData') || '{}');
      console.log('Sender:', this.sender);

      const chatId = this.chatService.getChatId(this.sender.uid, this.chatRoom.uid);

      // Listen for new messages only (more efficient)
      this.db.database
        .ref(`chats/${chatId}/messages`)
        .orderByChild('timestamp')
        .once('value')
        .then((snapshot) => {
          // Load initial messages
          const msgs: Message[] = [];
          snapshot.forEach((child) => {
            msgs.push(child.val());
          });
          this.messages = msgs;

          // Scroll to bottom on initial load
          setTimeout(() => {
            this.scrollToBottom(0);
            this.isInitialLoad = false;
          }, 100);

          // Now listen for new messages only
          this.messageSubscription = this.db.database
            .ref(`chats/${chatId}/messages`)
            .orderByChild('timestamp')
            .startAt(Date.now())
            .on('child_added', (snapshot) => {
              if (!this.isInitialLoad) {
                const newMsg = snapshot.val();
                this.messages.push(newMsg);

                setTimeout(() => {
                  this.scrollToBottom(300);
                }, 50);
              }
            });
        });
    }
  }

  ngOnDestroy() {
    if (this.messageSubscription) {
      const chatId = this.chatService.getChatId(this.sender.uid, this.chatRoom.uid);
      this.db.database.ref(`chats/${chatId}/messages`).off('child_added');
    }
  }

  sendMessage() {
    const text = this.newMessage.trim();
    if (!text) return;

    this.newMessage = '';

    // Send to Firebase - no optimistic UI update
    // Firebase listener will add the message when saved
    this.chatService.sendMessage(
      this.sender.uid,
      this.chatRoom.uid,
      text
    ).catch(err => {
      console.error('Error sending message:', err);
      // Optionally show error message to user
    });
  }

  private scrollToBottom(duration: number = 300) {
    if (this.content) {
      this.content.scrollToBottom(duration);
    }
  }

  goBack() {
    this.navCtrl.pop();
  }
}
