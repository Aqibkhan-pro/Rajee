import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

interface Participant {
  uid: string;
  name: string;
  unreadCount: number;
}

export interface ChatRoom {
  id: string;
  type: string;
  productId?: string;
  lastMessage: string;
  lastMessageTime: number;
  participants: { [uid: string]: Participant };
}

@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.scss'],
  standalone: false
})
export class ChatInboxComponent implements OnInit, OnDestroy {

  users: ChatRoom[] = [];
  currentUserId: string = '';
  chatRoomsListener: any;

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController,
    private db: AngularFireDatabase
  ) {}

  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem('userData') || '{}');
    if (!currentUser?.uid) return;
    this.currentUserId = currentUser.uid;

    this.listenToChatRooms(this.currentUserId);
  }

  ngOnDestroy() {
    // Firebase listener remove kar do
    if (this.chatRoomsListener) {
      this.chatRoomsListener.off();
    }
  }

  // 🔹 Listen to rooms where current user is participant
  listenToChatRooms(userId: string) {
    this.chatRoomsListener = this.db.database
      .ref('/chatRooms')
      .orderByChild(`participants/${userId}/uid`)
      .equalTo(userId);

    this.chatRoomsListener.on('value', (snapshot:any) => {
      const rooms: ChatRoom[] = [];
      snapshot.forEach((child:any) => {
        const room = child.val();
        room.id = child.key;
        rooms.push(room);
      });
      // Sort by lastMessageTime descending
      this.users = rooms.sort((a, b) => b.lastMessageTime - a.lastMessageTime);
    });
  }

  // 🔹 Get other participant in room
  getOtherUser(chat: ChatRoom) {
    return Object.values(chat.participants || {}).find(p => p.uid !== this.currentUserId);
  }

  // 🔹 Open chat page with full room
  async openChat(chatRoom: ChatRoom) {
    // Reset unread count
    await this.db.database
      .ref(`/chatRooms/${chatRoom.id}/participants/${this.currentUserId}`)
      .update({ unreadCount: 0 });

    this.navCtrl.navigateForward(['/chat'], {
      state: { chatRoom }
    });
  }

  // 🔹 Dummy avatar color
  getDummyColor(name?: string): string {
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#3f51b5', '#03a9f4', '#4caf50', '#ff9800', '#795548'];
    if (!name) return colors[Math.floor(Math.random() * colors.length)];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  }

  // 🔹 Optional toast
  async showToast(message: string, color: string = 'danger') {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      position: 'bottom',
    });
    toast.present();
  }

}
