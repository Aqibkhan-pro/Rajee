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
  time: string;
  unread: boolean;
  unreadCount: number;
  online: boolean;
}
