import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, from, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { StorageService } from './storage.service';

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

  constructor(private http: HttpClient, private storageService: StorageService) {}

  getUsers(): Observable<UserData[]> {
    const userData = this.storageService.getItem('userData');
    const idToken = userData?.idToken;

    if (!idToken) {
      console.error('No ID token found');
      return of([]); // return empty array if not logged in
    }

    return this.http.get<{ [key: string]: any }>(`${this.baseUrl}/users.json?auth=${idToken}`).pipe(
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

}
