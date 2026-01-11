import { UserData } from './../../../services/chat.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Product, ProductUser, Rating, Comment } from 'src/app/shared/common.interface';
import { InboxService } from '../home/chat-inbox/service/inbox.service';

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
  isFavorite = false;
  FIREBASE_DB_URL = 'https://rajee-198a5-default-rtdb.firebaseio.com';
  productUser: ProductUser | null = null;

  // Rating and comment
  newComment = '';
  averageRating = 0;
  userData: any;

  // Modal states
  isActionSheetOpen = false;
  isRatingModalOpen = false;
  isCommentsModalOpen = false;
  selectedRating = 0;

  // Action buttons for action sheet
  actionButtons = [
    {
      text: 'Add Rating',
      icon: 'star',
      handler: () => {
        this.openRatingModal();
      }
    },
    {
      text: 'Add Comment',
      icon: 'chatbubble',
      handler: () => {
        this.openCommentsModal();
      }
    },
    {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel'
    }
  ];

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private db: AngularFireDatabase,
    private inboxService: InboxService,
    private toastController: ToastController
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.product = navigation?.extras?.state?.['product'];
  }

  async ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (this.userData) {
      this.currentUserId = this.userData.uid;
      this.checkIfFollowing();
      this.checkIfFavorite();
      this.productUser = await this.getSingleUser(this.product.user.uid) as ProductUser;
      console.log('Product user:', this.productUser);

      this.calculateAverageRating();
      this.loadUserRating();
    }
  }

  async getSingleUser(userId: string): Promise<ProductUser | null> {
    try {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      const idToken = userData?.idToken;
      if (!idToken) throw new Error('User token not found');

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

  // ------------------- FAVORITE FUNCTIONS -------------------

  async checkIfFavorite(): Promise<void> {
    try {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      const idToken = userData?.idToken;
      if (!idToken) throw new Error('User token not found');

      const productId = this.product?.createdAt;
      if (!productId || !this.currentUserId) return;

      const url = `${this.FIREBASE_DB_URL}/favorites/${this.currentUserId}/${productId}.json?auth=${idToken}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to check favorite status');

      const data = await res.json();
      this.isFavorite = data !== null;
      console.log('Favorite status:', this.isFavorite);
    } catch (error) {
      console.error('Error checking if favorite:', error);
    }
  }

  async toggleFavorite() {
    if (this.isFavorite) {
      await this.removeFavorite();
    } else {
      await this.addFavorite();
    }
  }

  async addFavorite() {
    try {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      const idToken = userData?.idToken;
      if (!idToken) throw new Error('User token not found');

      const productId = this.product.createdAt;
      const time = Date.now();

      const favoriteData = {
        productId: productId,
        userId: this.currentUserId,
        addedAt: time,
        product: {
          title: this.product.title,
          description: this.product.description,
          price: this.product.price,
          image: this.product.image,
          createdAt: this.product.createdAt,
          user: this.product.user
        }
      };

      const url = `${this.FIREBASE_DB_URL}/favorites/${this.currentUserId}/${productId}.json?auth=${idToken}`;
      const res = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(favoriteData)
      });

      if (!res.ok) throw new Error('Failed to add favorite');

      this.isFavorite = true;
      await this.presentToast('Added to favorites', 'success');
    } catch (error) {
      console.error('Error adding favorite:', error);
      await this.presentToast('Failed to add favorite', 'danger');
    }
  }

  async removeFavorite() {
    try {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      const idToken = userData?.idToken;
      if (!idToken) throw new Error('User token not found');

      const productId = this.product.createdAt;
      const url = `${this.FIREBASE_DB_URL}/favorites/${this.currentUserId}/${productId}.json?auth=${idToken}`;

      const res = await fetch(url, {
        method: 'DELETE'
      });

      if (!res.ok) throw new Error('Failed to remove favorite');

      this.isFavorite = false;
      await this.presentToast('Removed from favorites', 'success');
    } catch (error) {
      console.error('Error removing favorite:', error);
      await this.presentToast('Failed to remove favorite', 'danger');
    }
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: color
    });
    toast.present();
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

  getRoomId(user1: string, user2: string, productId: string) {
    return [user1, user2].sort().join('_') + '_' + productId;
  }

  async openChat(product: Product) {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (!userData?.uid) return;

    this.checkIfFollowing();
    const owner =  await this.getSingleUser(this.product.user.uid) as ProductUser;
    const currentUser = await this.getSingleUser(userData.uid) as ProductUser;

    const currentUserName = currentUser.name || 'User';
    const ownerName = owner.name || 'User';

    const roomId = this.getRoomId(currentUser.uid, owner.uid, String(this.product.createdAt));
    const roomRef = this.db.database.ref(`/chatRooms/${roomId}`);
    const snapshot = await roomRef.get();

    let chatRoom: any;
    if (!snapshot.exists()) {
      chatRoom = {
        id: roomId,
        type: 'product',
        productId: product.createdAt,
        lastMessage: '',
        lastMessageTime: 0,
        participants: {
          [currentUser.uid]: { uid: currentUser.uid, name: currentUserName, unreadCount: 0 },
          [owner.uid]: { uid: owner.uid, name: ownerName, unreadCount: 0 }
        }
      };
      await roomRef.set(chatRoom);
    } else {
      chatRoom = snapshot.val();
    }

    await roomRef.child(`participants/${currentUser.uid}`).update({ unreadCount: 0 });
    this.navCtrl.navigateForward(['/chat'], { state: { chatRoom } });
  }

  // ------------------- MODAL CONTROLS -------------------

  openActionsMenu() {
    this.isActionSheetOpen = true;
  }

  openRatingModal() {
    this.isRatingModalOpen = true;
  }

  closeRatingModal() {
    this.isRatingModalOpen = false;
    this.selectedRating = 0;
  }

  openCommentsModal() {
    this.isCommentsModalOpen = true;
  }

  closeCommentsModal() {
    this.isCommentsModalOpen = false;
  }

  // ------------------- RATING FUNCTIONS -------------------

  calculateAverageRating() {
    if (!this.product.ratings || this.product.ratings.length === 0) {
      this.averageRating = 0;
      return;
    }
    const total = this.product.ratings.reduce((sum: any, r: any) => sum + r.value, 0);
    this.averageRating = total / this.product.ratings.length;
  }

  loadUserRating() {
    if (!this.product.ratings) return;
    const userRating = this.product.ratings.find((r: any) => r.userId === this.currentUserId);
    if (userRating) {
      this.selectedRating = userRating.value;
    }
  }

  selectRating(value: number) {
    this.selectedRating = value;
  }

  getRatingText(rating: number): string {
    const texts = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];
    return texts[rating] || '';
  }

  async submitRating() {
    if (this.selectedRating === 0) return;

    try {
      const userId = this.currentUserId;
      const userName = this.userData?.name;
      const time = Date.now();

      const existingRatingIndex = this.product.ratings?.findIndex((r: any) => r.userId === userId) ?? -1;

      if (existingRatingIndex >= 0) {
        this.product.ratings[existingRatingIndex].value = this.selectedRating;
        this.product.ratings[existingRatingIndex].createdAt = time;
      } else {
        this.product.ratings = this.product.ratings || [];
        this.product.ratings.push({
          userId,
          userName,
          value: this.selectedRating,
          createdAt: time
        });
      }

      this.calculateAverageRating();

      const updates: any = {};
      updates[`products/${this.product.createdAt}/ratings`] = this.product.ratings;
      await this.db.database.ref().update(updates);

      this.closeRatingModal();
    } catch (error) {
      console.error('Error rating product:', error);
    }
  }

  getRatingCount(stars: number): number {
    if (!this.product.ratings) return 0;
    return this.product.ratings.filter((r: any) => r.value === stars).length;
  }

  getRatingPercentage(stars: number): number {
    if (!this.product.ratings || this.product.ratings.length === 0) return 0;
    const count = this.getRatingCount(stars);
    return (count / this.product.ratings.length) * 100;
  }

  // ------------------- COMMENT FUNCTIONS -------------------

  async addComment() {
    if (!this.newComment.trim()) return;

    try {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      const comment: Comment = {
        userId: userData.uid,
        userName: userData.name || 'User',
        text: this.newComment,
        createdAt: Date.now()
      };

      this.product.comments = this.product.comments || [];
      this.product.comments.unshift(comment); // Add to beginning

      const updates: any = {};
      updates[`products/${this.product.createdAt}/comments`] = this.product.comments;
      await this.db.database.ref().update(updates);

      this.newComment = '';
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  }

  formatTime(timestamp: number): string {
    const now = Date.now();
    const diff = now - timestamp;

    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;

    const date = new Date(timestamp);
    return date.toLocaleDateString();
  }

  async callUserData(phone: any) {
    if (!phone) {
      console.error('No phone number available');
      return;
    }

    // Remove any spaces, dashes, or special characters except +
    const cleanedPhone = phone.replace(/[^\d+]/g, '');

    // Create tel: URL for making phone calls
    window.location.href = `tel:${cleanedPhone}`;
  }

}
