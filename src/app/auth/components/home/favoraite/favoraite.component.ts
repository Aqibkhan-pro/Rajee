import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
interface FavoriteItem {
  productId: number;
  userId: string;
  addedAt: number;
  product: {
    title: string;
    description: string;
    price: string;
    image: string;
    createdAt: number;
    user: {
      uid: string;
      name: string;
    };
  };
}

@Component({
  selector: 'app-favoraite',
  templateUrl: './favoraite.component.html',
  styleUrls: ['./favoraite.component.scss'],
  standalone: false
})
export class FavoraiteComponent implements OnInit {





  selectedLanguage: string = 'en';
  FIREBASE_DB_URL = 'https://rajee-198a5-default-rtdb.firebaseio.com';
  currentUserId!: string;

  items: FavoriteItem[] = [];
  filteredItems: FavoriteItem[] = [];
  searchTerm: string = '';
  isLoading: boolean = false;

  constructor(
    private navCtrl: NavController,
    private translate: TranslateService,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }

  async ngOnInit() {
    this.translate.onLangChange.subscribe(() => {
      this.selectedLanguage = this.translate.currentLang;
    });

    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      this.selectedLanguage = savedLang;
    }

    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (userData?.uid) {
      this.currentUserId = userData.uid;
      await this.loadFavorites();
    }
  }

  ionViewWillEnter() {
    // Refresh favorites when page is entered
    this.loadFavorites();
  }

  async loadFavorites() {
    this.isLoading = true;
    try {
      const favorites = await this.fetchFavorites();
      console.log("Favorites:", favorites);

      this.items = favorites;
      this.filteredItems = favorites;
    } catch (error) {
      console.error('Error loading favorites:', error);
      this.showToast('Failed to load favorites', 'danger');
    } finally {
      this.isLoading = false;
    }
  }

  async fetchFavorites(): Promise<FavoriteItem[]> {
    try {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      const idToken = userData?.idToken;
      if (!idToken) throw new Error('User token not found');

      const url = `${this.FIREBASE_DB_URL}/favorites/${this.currentUserId}.json?auth=${idToken}`;

      const res = await fetch(url);
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to fetch favorites: ${errorText}`);
      }

      const data = await res.json();

      // Convert object to array
      const favorites: FavoriteItem[] = [];
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          favorites.push(data[key]);
        }
      }

      // Sort by addedAt (most recent first)
      favorites.sort((a, b) => b.addedAt - a.addedAt);

      return favorites;

    } catch (err: any) {
      console.error('Fetch favorites error:', err);
      throw err;
    }
  }

  filterFavorites() {
    if (!this.searchTerm || this.searchTerm.trim() === '') {
      this.filteredItems = this.items;
      return;
    }

    const term = this.searchTerm.toLowerCase().trim();
    this.filteredItems = this.items.filter(item =>
      item.product?.title?.toLowerCase().includes(term) ||
      item.product?.description?.toLowerCase().includes(term) ||
      item.product?.user?.name?.toLowerCase().includes(term)
    );
  }

  async removeFavorite(item: FavoriteItem, event: Event) {
    event.stopPropagation(); // Prevent card click

    const alert = await this.alertController.create({
      header: 'Remove Favorite',
      message: `Are you sure you want to remove "${item.product?.title}" from favorites?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Remove',
          role: 'destructive',
          handler: async () => {
            await this.confirmRemoveFavorite(item);
          }
        }
      ]
    });

    await alert.present();
  }

  async confirmRemoveFavorite(item: FavoriteItem) {
    try {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      const idToken = userData?.idToken;
      if (!idToken) throw new Error('User token not found');

      const productId = item.productId;
      const url = `${this.FIREBASE_DB_URL}/favorites/${this.currentUserId}/${productId}.json?auth=${idToken}`;

      const res = await fetch(url, {
        method: 'DELETE'
      });

      if (!res.ok) throw new Error('Failed to remove favorite');

      // Remove from local arrays
      this.items = this.items.filter(i => i.productId !== productId);
      this.filteredItems = this.filteredItems.filter(i => i.productId !== productId);

      await this.showToast('Removed from favorites', 'success');
    } catch (error) {
      console.error('Error removing favorite:', error);
      await this.showToast('Failed to remove favorite', 'danger');
    }
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

  onCardClick(item: FavoriteItem) {
    // Navigate to product details with the product data
    const navigationExtras: NavigationExtras = {
      state: {
        product: item.product
      }
    };

    this.navCtrl.navigateForward(['/product-details'], navigationExtras);
  }

  goToHome() {
    this.navCtrl.navigateBack(['/home']);
  }
}
