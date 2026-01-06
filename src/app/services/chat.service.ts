import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';

export interface Message {
  senderId: string;
  receiverId: string;
  message: string;
  timestamp: number;
}

export interface UserData {
  uid: string;
  name?: string;
  email?: string;
  phone?: string;
  photoURL?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatApiService {
  private baseUrl = 'https://rajee-198a5-default-rtdb.firebaseio.com';
  idToken: string | null = null;
  constructor(
    private http: HttpClient,
    private storageService: StorageService
    ) {
    const userData = this.storageService.getItem('userData');
    this.idToken = userData?.idToken;
  }

  getUsers(): Observable<UserData[]> {

    if (!this.idToken) {
      console.error('No ID token found');
      return of([]); // return empty array if not logged in
    }

    return this.http.get<{ [key: string]: any }>(`${this.baseUrl}/users.json?auth=${this.idToken}`).pipe(
      map(res => {
        if (!res) return [];
        return Object.keys(res).map(key => ({
          uid: key,
          ...res[key]
        }));
      }),
      catchError(err => {
        console.error('Error fetching users:', err);
        return of([]);
      })
    );
  }

   getChatId(user1: string, user2: string) {
    return [user1, user2].sort().join('_'); // consistent chat room ID
  }

  // Send message
  sendMessage(senderId: string, receiverId: string, message: string): Promise<void> {
    if (!this.idToken) {
      console.error('No ID token found');
      return Promise.resolve();
    }

    const chatId = this.getChatId(senderId, receiverId);
    const msg: Message = {
      senderId,
      receiverId,
      message,
      timestamp: Date.now()
    };

    return this.http.post<void>(
      `${this.baseUrl}/chats/${chatId}/messages.json?auth=${this.idToken}`,
      msg
    ).toPromise();
  }

  // // Get all messages
  // getMessages(user1: string, user2: string): Observable<Message[]> {
  //   if (!this.idToken) {
  //     console.error('No ID token found');
  //     return of([]);
  //   }

  //   const chatId = this.getChatId(user1, user2);

  //   return this.http.get<{ [key: string]: Message }>(
  //     `${this.baseUrl}/chats/${chatId}/messages.json?auth=${this.idToken}&orderBy="timestamp"`
  //   ).pipe(
  //     map(res => res ? Object.values(res) : [])
  //   );
  // }



}
