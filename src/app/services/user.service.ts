import { Injectable } from '@angular/core';

export interface User {
  uid: string;
  name?: string;
  email?: string;
  phone?: string;
  createdAt?: number;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {

  FIREBASE_DB_URL = 'https://rajee-198a5-default-rtdb.firebaseio.com';

  private allUsers: Record<string, User> = {}; // key = uid
  private followersCache: string[] = [];
  private followingCache: string[] = [];

  constructor() {}

  /** Get current logged-in user info from localStorage */
  private getAuthData() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    return {
      uid: userData?.uid,
      token: userData?.idToken
    };
  }

  /** Update users cache (for realtime updates) */
  updateUsersCache(data: any) {
    if (data) {
      Object.keys(data).forEach(key => {
        this.allUsers[key] = { uid: key, ...data[key] } as User;
      });
    }
  }

  /** Update followers cache (for realtime updates) */
  updateFollowersCache(followerIds: string[]) {
    this.followersCache = followerIds;
  }

  /** Update following cache (for realtime updates) */
  updateFollowingCache(followingIds: string[]) {
    this.followingCache = followingIds;
  }

  /** Load all users from Firebase (cache in memory) */
  async loadAllUsers(forceReload = false): Promise<User[]> {
    if (!forceReload && Object.keys(this.allUsers).length > 0) {
      return Object.values(this.allUsers);
    }

    const { token } = this.getAuthData();
    if (!token) return [];

    try {
      const res = await fetch(`${this.FIREBASE_DB_URL}/users.json?auth=${token}`);
      if (!res.ok) throw new Error('Failed to fetch users');

      const data = await res.json();
      this.allUsers = {};
      if (data) {
        Object.keys(data).forEach(key => {
          this.allUsers[key] = { uid: key, ...data[key] } as User;
        });
      }
      return Object.values(this.allUsers);
    } catch (err) {
      console.error('Error loading all users:', err);
      return [];
    }
  }

  /** Get single user by UID (from cache if available) */
  async getUserById(uid: string): Promise<User | null> {
    if (this.allUsers[uid]) return this.allUsers[uid];
    await this.loadAllUsers();
    return this.allUsers[uid] || null;
  }

  /** Load following UIDs (users I follow) */
  async loadFollowing(forceReload = false): Promise<User[]> {
    if (!forceReload && this.followingCache.length > 0) {
      return this.followingCache.map(uid => this.allUsers[uid]).filter(Boolean) as User[];
    }

    const { uid, token } = this.getAuthData();
    if (!uid || !token) return [];

    try {
      const res = await fetch(`${this.FIREBASE_DB_URL}/following/${uid}.json?auth=${token}`);
      const data = await res.json();
      this.followingCache = data ? Object.keys(data) : [];
      await this.loadAllUsers();
      return this.followingCache.map(uid => this.allUsers[uid]).filter(Boolean) as User[];
    } catch (err) {
      console.error('Error loading following:', err);
      return [];
    }
  }

  /** Load followers UIDs (users who follow me) */
  async loadFollowers(forceReload = false): Promise<User[]> {
    if (!forceReload && this.followersCache.length > 0) {
      return this.followersCache.map(uid => this.allUsers[uid]).filter(Boolean) as User[];
    }

    const { uid, token } = this.getAuthData();
    if (!uid || !token) return [];

    try {
      const res = await fetch(`${this.FIREBASE_DB_URL}/followers/${uid}.json?auth=${token}`);
      const data = await res.json();
      this.followersCache = data ? Object.keys(data) : [];
      await this.loadAllUsers();
      return this.followersCache.map(uid => this.allUsers[uid]).filter(Boolean) as User[];
    } catch (err) {
      console.error('Error loading followers:', err);
      return [];
    }
  }

  /** Check if a user is followed by current user */
  isFollowing(userUid: string): boolean {
    return this.followingCache.includes(userUid);
  }

  /** Follow a user (update Firebase & cache) */
  async followUser(targetUid: string): Promise<void> {
    const { uid, token } = this.getAuthData();
    if (!uid || !token || uid === targetUid) return;

    const time = Date.now();
    const updates: any = {
      [`following/${uid}/${targetUid}`]: { followedAt: time },
      [`followers/${targetUid}/${uid}`]: { followedAt: time },
    };

    try {
      await fetch(`${this.FIREBASE_DB_URL}/.json?auth=${token}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });

      // Update cache
      if (!this.followingCache.includes(targetUid)) {
        this.followingCache.push(targetUid);
      }
      if (!this.followersCache.includes(uid) && uid === targetUid) {
        this.followersCache.push(uid);
      }
    } catch (err) {
      console.error('Error following user:', err);
    }
  }

  /** Unfollow a user (update Firebase & cache) */
  async unfollowUser(targetUid: string): Promise<void> {
    const { uid, token } = this.getAuthData();
    if (!uid || !token || uid === targetUid) return;

    const updates: any = {
      [`following/${uid}/${targetUid}`]: null,
      [`followers/${targetUid}/${uid}`]: null,
    };

    try {
      await fetch(`${this.FIREBASE_DB_URL}/.json?auth=${token}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });

      // Update cache
      this.followingCache = this.followingCache.filter(id => id !== targetUid);
      this.followersCache = this.followersCache.filter(id => id !== uid);
    } catch (err) {
      console.error('Error unfollowing user:', err);
    }
  }

  /** Filter users (exclude current user, followers, following, or search) */
  filterUsers(options?: {
    excludeCurrent?: boolean;
    onlyFollowers?: boolean;
    onlyFollowing?: boolean;
    search?: string;
  }): User[] {
    const { uid } = this.getAuthData();
    let users = Object.values(this.allUsers);

    if (options?.excludeCurrent && uid) {
      users = users.filter(u => u.uid !== uid);
    }

    if (options?.onlyFollowers) {
      users = users.filter(u => this.followersCache.includes(u.uid));
    }

    if (options?.onlyFollowing) {
      users = users.filter(u => this.followingCache.includes(u.uid));
    }

    if (options?.search) {
      const term = options.search.toLowerCase();
      users = users.filter(u => u.name?.toLowerCase().includes(term));
    }

    return users;
  }

  /** Clear all caches */
  clearCache() {
    this.allUsers = {};
    this.followersCache = [];
    this.followingCache = [];
  }
}
