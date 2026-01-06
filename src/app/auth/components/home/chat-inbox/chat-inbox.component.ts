import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { User } from 'src/app/services/database.service';
import { UserService } from 'src/app/services/user.service';
import { ChatRoom } from 'src/app/shared/common.interface';

@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.scss'],
  standalone: false
})
export class ChatInboxComponent implements OnInit, OnDestroy {
  users: User[] = [];
  FIREBASE_DB_URL = 'https://rajee-198a5-default-rtdb.firebaseio.com';

  private followersListener: EventSource | null = null;
  private followingListener: EventSource | null = null;
  private usersListener: EventSource | null = null;

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController,
    private userService: UserService
  ) {}

  async ngOnInit() {
    await this.setupRealtimeListeners();
  }

  ngOnDestroy() {
    // Clean up listeners when component is destroyed
    this.closeListeners();
  }

  private async setupRealtimeListeners() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const uid = userData?.uid;
    const token = userData?.idToken;

    if (!uid || !token) {
      console.error('No auth data available');
      return;
    }

    // Listen to users changes
    this.usersListener = new EventSource(
      `${this.FIREBASE_DB_URL}/users.json?auth=${token}`
    );

    this.usersListener.addEventListener('put', (event: any) => {
      const data = JSON.parse(event.data);
      if (data.data) {
        this.userService.updateUsersCache(data.data);
        this.updateUsersList();
      }
    });

    this.usersListener.addEventListener('patch', (event: any) => {
      const data = JSON.parse(event.data);
      if (data.data) {
        this.userService.updateUsersCache(data.data);
        this.updateUsersList();
      }
    });

    // Listen to followers changes
    this.followersListener = new EventSource(
      `${this.FIREBASE_DB_URL}/followers/${uid}.json?auth=${token}`
    );

    this.followersListener.addEventListener('put', (event: any) => {
      const data = JSON.parse(event.data);
      const followerIds = data.data ? Object.keys(data.data) : [];
      this.userService.updateFollowersCache(followerIds);
      this.updateUsersList();
    });

    this.followersListener.addEventListener('patch', (event: any) => {
      const data = JSON.parse(event.data);
      if (data.data) {
        this.userService.updateFollowersCache(Object.keys(data.data));
        this.updateUsersList();
      }
    });

    // Listen to following changes
    this.followingListener = new EventSource(
      `${this.FIREBASE_DB_URL}/following/${uid}.json?auth=${token}`
    );

    this.followingListener.addEventListener('put', (event: any) => {
      const data = JSON.parse(event.data);
      const followingIds = data.data ? Object.keys(data.data) : [];
      this.userService.updateFollowingCache(followingIds);
      this.updateUsersList();
    });

    this.followingListener.addEventListener('patch', (event: any) => {
      const data = JSON.parse(event.data);
      if (data.data) {
        this.userService.updateFollowingCache(Object.keys(data.data));
        this.updateUsersList();
      }
    });

    // Error handlers
    this.usersListener.onerror = (err) => {
      console.error('Users listener error:', err);
    };

    this.followersListener.onerror = (err) => {
      console.error('Followers listener error:', err);
    };

    this.followingListener.onerror = (err) => {
      console.error('Following listener error:', err);
    };

    // Initial load
    await this.userService.loadAllUsers();
    await this.userService.loadFollowers();
    await this.userService.loadFollowing();
    this.updateUsersList();
  }

  private updateUsersList() {
    const followers = this.userService.filterUsers({ onlyFollowers: true });
    const following = this.userService.filterUsers({ onlyFollowing: true });

    console.log('Following:', following);
    console.log('Followers:', followers);

    // Merge and remove duplicates by UID
    this.users = [
      ...followers,
      ...following.filter(f => !followers.some(u => u.uid === f.uid))
    ] as User[];
  }

  private closeListeners() {
    if (this.usersListener) {
      this.usersListener.close();
      this.usersListener = null;
    }
    if (this.followersListener) {
      this.followersListener.close();
      this.followersListener = null;
    }
    if (this.followingListener) {
      this.followingListener.close();
      this.followingListener = null;
    }
  }

  openChat(user: User) {
    console.log('Opening chat with:', user.name);
    const chatRoom: ChatRoom = {
      id: user.uid,
      uid: user.uid,
      name: user.name,
      avatarColor: null,
      unread: false,
      unreadCount: 0,
      online: true,
      initials: '',
      lastMessage: '',
      time: ''
    };
    this.navCtrl.navigateForward(['/chat'], { state: { chatRoom } });
  }

  getTotalUnreadCount(): number {
    return 3;
  }

  filterChats(searchTerm: string) {
    if (!searchTerm.trim()) {
      return this.users;
    }
    return this.users.filter((chat: User) =>
      chat.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  async showToast(message: string, color: string = 'danger') {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      position: 'bottom',
    });
    toast.present();
  }

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
}
