import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ChatApiService } from 'src/app/services/chat.service';

interface Chat {
  id: number;
  name: string;
  initials: string;
  avatarColor: string;
  lastMessage: string;
  time: string;
  unread: boolean;
  unreadCount: number;
  online: boolean;
}

@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.scss'],
  standalone: false
})
export class ChatInboxComponent implements OnInit {

  chats: Chat[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      initials: 'SJ',
      avatarColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      lastMessage: 'See you tomorrow! 😊',
      time: '2m ago',
      unread: true,
      unreadCount: 3,
      online: true
    },
    {
      id: 2,
      name: 'Mike Chen',
      initials: 'MC',
      avatarColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      lastMessage: 'Thanks for your help!',
      time: '15m ago',
      unread: true,
      unreadCount: 1,
      online: true
    },
    {
      id: 3,
      name: 'Emily Davis',
      initials: 'ED',
      avatarColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      lastMessage: 'The project is looking great',
      time: '1h ago',
      unread: false,
      unreadCount: 0,
      online: false
    },
    {
      id: 4,
      name: 'James Wilson',
      initials: 'JW',
      avatarColor: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      lastMessage: 'Can we schedule a meeting?',
      time: '3h ago',
      unread: false,
      unreadCount: 0,
      online: true
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      initials: 'LA',
      avatarColor: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      lastMessage: 'Perfect! I\'ll send you the details',
      time: '5h ago',
      unread: false,
      unreadCount: 0,
      online: false
    },
    {
      id: 6,
      name: 'Robert Taylor',
      initials: 'RT',
      avatarColor: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      lastMessage: 'Got it, thanks!',
      time: 'Yesterday',
      unread: false,
      unreadCount: 0,
      online: false
    },
    {
      id: 7,
      name: 'Jennifer Lee',
      initials: 'JL',
      avatarColor: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      lastMessage: 'Have a great weekend!',
      time: 'Yesterday',
      unread: false,
      unreadCount: 0,
      online: true
    },
    {
      id: 8,
      name: 'David Brown',
      initials: 'DB',
      avatarColor: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      lastMessage: 'Let me know what you think',
      time: '2d ago',
      unread: false,
      unreadCount: 0,
      online: false
    },
    {
      id: 9,
      name: 'Alex Carry',
      initials: 'AC',
      avatarColor: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      lastMessage: 'Let see',
      time: '2d ago',
      unread: false,
      unreadCount: 0,
      online: false
    }
  ];

  constructor(
    private navCtrl: NavController,
    private chatApiService: ChatApiService
  ) { }

  ngOnInit() {
    // Use setTimeout to ensure Angular is fully initialized
    setTimeout(() => {
      this.loadUsers();
    }, 1000);
  }

  async loadUsers() {
    try {
      this.chatApiService.getUsers().subscribe(users => {
        console.log('All users:', users);
      });

    } catch (error) {
      console.error('Error in loadUsers:', error);
    }
  }

  openChat(chat: Chat) {
    console.log('Opening chat with:', chat.name);

    if (chat.unread) {
      chat.unread = false;
      chat.unreadCount = 0;
    }
    this.navCtrl.navigateForward('/chat');
  }

  getTotalUnreadCount(): number {
    return this.chats.reduce((total, chat) => total + chat.unreadCount, 0);
  }

  filterChats(searchTerm: string) {
    if (!searchTerm.trim()) {
      return this.chats;
    }

    return this.chats.filter(chat =>
      chat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
