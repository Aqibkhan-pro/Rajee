import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { ChatApiService } from 'src/app/services/chat.service';
import { Product, ProductUser } from 'src/app/shared/common.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
  standalone: false
})
export class ProductDetailsPage implements OnInit {

  product!: Product;
  currentUserId!: string;
  isFollowing = false;
  FIREBASE_DB_URL = 'https://rajee-198a5-default-rtdb.firebaseio.com';
  productUser: ProductUser | null = null;

  constructor(
    private router: Router,
    private db: AngularFireDatabase,
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.product = navigation?.extras?.state?.['product'];
  }


  async callUserData(phone: string) {
}

  async ngOnInit() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (userData) {
      this.currentUserId = userData.uid;
      this.checkIfFollowing();
      this.productUser = await this.getSingleUser(this.product.user.uid) as ProductUser;
      console.log('Product user:', this.productUser);
    }
  }

  async getSingleUser(userId: string): Promise<ProductUser | null> {
    try {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      const idToken = userData?.idToken;

      if (!idToken) {
        throw new Error('User token not found');
      }

      const url = `${this.FIREBASE_DB_URL}/users/${userId}.json?auth=${idToken}`;

      const res = await fetch(url);

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to fetch user: ${errorText}`);
      }

      const user = await res.json();

      console.log('Single user:', user);
      return user;

    } catch (error) {
      console.error('Get single user error:', error);
      return null;
    }
  }

  async checkIfFollowing(): Promise<void> {
    try {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      const idToken = userData?.idToken;

      if (!idToken) throw new Error('User token not found');

      const targetUserId = this.product?.user?.uid;
      if (!targetUserId || !this.currentUserId) return;

      const url = `${this.FIREBASE_DB_URL}/following/${this.currentUserId}/${targetUserId}.json?auth=${idToken}`;

      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to check follow status');

      const data = await res.json();

      this.isFollowing = data !== null;

      console.log('Follow status:', this.isFollowing);

    } catch (error) {
      console.error('Error checking if following:', error);
    }
  }


  followUser() {
    try {
      const targetUserId = this.product.user.uid;
      if (this.currentUserId === targetUserId) return;
      const time = Date.now();
      const updates: any = {};
      updates[`following/${this.currentUserId}/${targetUserId}`] = { followedAt: time };
      updates[`followers/${targetUserId}/${this.currentUserId}`] = { followedAt: time };

      this.db.database.ref().update(updates);

      this.isFollowing = true;
    } catch (error) {
      console.error('Error following user:', error);
    }
  }

  unfollowUser() {
    try {
      const targetUserId = this.product.user.uid;
      const updates: any = {};
      updates[`following/${this.currentUserId}/${targetUserId}`] = null;
      updates[`followers/${targetUserId}/${this.currentUserId}`] = null;

      this.db.database.ref().update(updates);

      this.isFollowing = false;
    } catch (error) {
      console.error('Error unfollowing user:', error);
    }
  }

}
