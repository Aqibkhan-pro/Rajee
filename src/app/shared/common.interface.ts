export interface User {
  uid: string;
  name: string;
  email: string;
  phone: string;
  createdAt: number;
}


export interface Product {
  title: string;
  price: number;
  section: string;
  condition: string;
  description: string;
  image?: string;
  user: User;
  createdAt?: number;
  images?: string[];
  ratings?: Rating[] | any;
  comments?: Comment[] | any;
}

export interface Rating {
  userId: string;
  value: number; // 1 to 5
  createdAt: number;
}

export interface Comment {
  userId: string;
  userName: string;
  text: string;
  createdAt: number;
}

export interface ProductUser {
  uid: string;
  name: string;
  email: string;
  phone: string;
  createdAt: number;
}

export interface ChatRoom {
  id: number | string;
  uid: string;
  name: string|any;
  initials: string;
  avatarColor: string | null;
  lastMessage: string;
  time: any;
  unread: boolean;
  unreadCount: number;
  online: boolean;
  participants: any;
  lastMessageTime: any;
}
