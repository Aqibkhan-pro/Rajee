// database.service.ts
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

export interface User {
  uid: string;
  name: string;
  email: string;
  phone: string;
  photoURL: string | null;
  createdAt: number;
  updatedAt?: number;
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFireDatabase) {}

  /**
   * User ko Real-time Database mein save karo
   * Save user to Real-time Database
   */
  async saveUser(user: User): Promise<void> {
    try {
      await this.db.object(`users/${user.uid}`).set({
        ...user,
        updatedAt: Date.now()
      });
      console.log('✅ User successfully saved to Real-time Database');
    } catch (error) {
      console.error('❌ Error saving user:', error);
      throw error;
    }
  }

  /**
   * User ki profile update karo
   * Update user profile
   */
  async updateUser(uid: string, updates: Partial<User>): Promise<void> {
    try {
      await this.db.object(`users/${uid}`).update({
        ...updates,
        updatedAt: Date.now()
      });
      console.log('✅ User profile updated');
    } catch (error) {
      console.error('❌ Error updating user:', error);
      throw error;
    }
  }

  /**
   * User ka data Real-time mein get karo (Observable)
   * Get user data in real-time (Observable)
   */
  getUserRealtime(uid: string): Observable<User | null> {
    return this.db.object<User>(`users/${uid}`).valueChanges();
  }

  /**
   * User ka data ek baar get karo (Promise)
   * Get user data once (Promise)
   */
  async getUserOnce(uid: string): Promise<User | null> {
    try {
      const snapshot = await this.db.object<User>(`users/${uid}`).query.get();
      return snapshot.val();
    } catch (error) {
      console.error('❌ Error getting user:', error);
      return null;
    }
  }

  /**
   * User ko delete karo
   * Delete user
   */
  async deleteUser(uid: string): Promise<void> {
    try {
      await this.db.object(`users/${uid}`).remove();
      console.log('✅ User deleted from database');
    } catch (error) {
      console.error('❌ Error deleting user:', error);
      throw error;
    }
  }

  /**
   * Sabhi users ki list get karo
   * Get list of all users
   */
  getAllUsers(): Observable<User[]> {
    return this.db.list<User>('users').valueChanges();
  }

  /**
   * Phone number se user search karo
   * Search user by phone number
   */
  async getUserByPhone(phone: string): Promise<User | null> {
    try {
      const snapshot = await this.db.list<User>('users', ref =>
        ref.orderByChild('phone').equalTo(phone).limitToFirst(1)
      ).query.get();

      const users = snapshot.val();
      if (users) {
        const userId = Object.keys(users)[0];
        return users[userId];
      }
      return null;
    } catch (error) {
      console.error('❌ Error searching user by phone:', error);
      return null;
    }
  }

  /**
   * Email se user search karo
   * Search user by email
   */
  async getUserByEmail(email: string): Promise<User | null> {
    try {
      const snapshot = await this.db.list<User>('users', ref =>
        ref.orderByChild('email').equalTo(email).limitToFirst(1)
      ).query.get();

      const users = snapshot.val();
      if (users) {
        const userId = Object.keys(users)[0];
        return users[userId];
      }
      return null;
    } catch (error) {
      console.error('❌ Error searching user by email:', error);
      return null;
    }
  }
}
