import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ChatRoom } from 'src/app/shared/common.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InboxService {

  private chatRooms$ = new BehaviorSubject<ChatRoom[]>([]);
  public chatRoomsObservable = this.chatRooms$.asObservable();

  private listeners: { [key: string]: any } = {};

  constructor(private db: AngularFireDatabase) {}

  async getOrCreateChatRoom(currentUserId: string, otherUser: any): Promise<ChatRoom> {
    const chatRoomId = this.generateChatRoomId(currentUserId, otherUser.uid);
    const ref = this.db.database.ref(`/chatRooms/${chatRoomId}`);
    const snapshot = await ref.once('value');

    let chatRoom: ChatRoom | any = null;
    let userName: string = 'Guest User';
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (userData) {
      userName = userData?.name;
    }

    if (snapshot.exists()) {
      chatRoom = snapshot.val();
    } else {
      chatRoom = {
        id: chatRoomId,
        participants: {
          [currentUserId]: {
            uid: currentUserId,
            name: userName,
            unreadCount: 0
          },
          [otherUser.uid]: {
            uid: otherUser.uid,
            name: otherUser.name ,
            unreadCount: 0
          }
        },
        lastMessage: '',
        lastMessageTime: Date.now()
      };

      await ref.set(chatRoom);
    }

    return chatRoom;
  }


  ListenToUserChatRooms(currentUserId: string) {
    const ref = this.db.database.ref('/chatRooms');

    if (this.listeners[currentUserId]) {
      ref.off();
    }

    ref.on('value', snapshot => {
      const rooms: ChatRoom[] = [];

      snapshot.forEach(child => {
        const room = child.val();

        // ❗ Only include rooms where current user exists
        if (!room.participants?.[currentUserId]) return false;

        // Get OTHER participant
        const otherUserId = Object.keys(room.participants)
          .find(uid => uid !== currentUserId)!;

        const otherUser = room.participants[otherUserId];
        const currentUser = room.participants[currentUserId];

        rooms.push({
          id: child.key!,
          uid: otherUserId,
          name: otherUser.name,
          avatarColor: null,
          lastMessage: room.lastMessage || '',
          unreadCount: currentUser.unreadCount || 0,
          unread: (currentUser.unreadCount || 0) > 0,
          online: true,
          time: room.lastMessageTime,
          initials: '',
          participants: undefined,
          lastMessageTime: undefined
        });
        return false;
      });

      // 🔥 sort latest on top
      rooms.sort((a, b) => (b.time || 0) - (a.time || 0));

      this.chatRooms$.next(rooms);
    });

    this.listeners[currentUserId] = ref;
  }



  stopListeningUserChatRooms(currentUserId: string) {
    const ref = this.db.database.ref(`/chatRooms/${currentUserId}`);
    if (this.listeners[currentUserId]) {
      ref.off('child_added', this.listeners[currentUserId].childAdded);
      ref.off('child_changed', this.listeners[currentUserId].childChanged);
      delete this.listeners[currentUserId];
    }
  }


  private generateChatRoomId(user1: string, user2: string): string {
    return [user1, user2].sort().join('_');
  }
}
