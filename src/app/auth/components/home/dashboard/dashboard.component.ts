import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Product } from 'src/app/shared/common.interface';

interface Category {
  key: string;
  en: string;
  ar: string;
  icon: string;
  selected: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: false
})
export class DashboardComponent implements OnInit {
  selectedLanguage: string = 'en';
  userName: string = 'John Doe';
  userRole: string = 'Administrator';
  FIREBASE_DB_URL = 'https://rajee-198a5-default-rtdb.firebaseio.com';

  categories: Category[] = [
    { key: 'all', ar: 'الكل', en: 'All', icon: 'grid-outline', selected: true },
    { key: 'cars', ar: 'حراج السيارات', en: 'Cars & Vehicles', icon: 'car-outline', selected: false },
   { key: 'electronics', ar: 'حراج الأجهزة', en: 'Electronics & Devices', icon: 'phone-portrait-outline', selected: false },
    { key: 'animals', ar: 'مواشي وحيوانات وطيور', en: 'Livestock, Animals & Birds', icon: 'paw-outline', selected: false },
    { key: 'furniture', ar: 'حراج الأثاث', en: 'Furniture', icon: 'bed-outline', selected: false },
    { key: 'personal_items', ar: 'مستلزمات شخصية', en: 'Personal Items & Accessories', icon: 'bag-handle-outline', selected: false },
    { key: 'services', ar: 'خدمات', en: 'Services', icon: 'construct-outline', selected: false },
    { key: 'jobs', ar: 'وظائف', en: 'Jobs', icon: 'briefcase-outline', selected: false },
    { key: 'games', ar: 'ألعاب وترفيه', en: 'Games & Entertainment', icon: 'game-controller-outline', selected: false },
    { key: 'food', ar: 'أطعمة ومشروبات', en: 'Food & Beverages', icon: 'restaurant-outline', selected: false },
    { key: 'books_art', ar: 'مكتبة وفنون', en: 'Books & Arts', icon: 'book-outline', selected: false },
    { key: 'hunting_trips', ar: 'صيد ورحلات', en: 'Hunting & Trips', icon: 'compass-outline', selected: false },
    { key: 'events', ar: 'حفلات ومناسبات', en: 'Events & Parties', icon: 'calendar-outline', selected: false },
    { key: 'agriculture', ar: 'زراعة وحدائق', en: 'Agriculture & Gardening', icon: 'leaf-outline', selected: false },
    { key: 'travel', ar: 'سفر وسياحة', en: 'Travel & Tourism', icon: 'airplane-outline', selected: false },
    { key: 'programming_design', ar: 'برمجة وتصاميم', en: 'Programming & Designs', icon: 'code-slash-outline', selected: false },
    { key: 'lost_found', ar: 'مفقودات', en: 'Lost & Found', icon: 'search-outline', selected: false },
    { key: 'others', ar: 'قسم غير مصنف', en: 'Uncategorized / Other', icon: 'ellipsis-horizontal-outline', selected: false }
  ];

  items: Product[] = [];
  filteredItems: any[] = [];

  constructor(
    private navCtrl: NavController,
    private translate: TranslateService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.loadItems();
    this.translate.onLangChange.subscribe(() => {
      this.selectedLanguage = this.translate.currentLang;
      console.log("Selected Language:", this.selectedLanguage);
    });

    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      this.selectedLanguage = savedLang;
    }
  }

  async fetchProducts(): Promise<any[]> {
    try {
      // Get your user token from localStorage
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      const idToken = userData?.idToken;

      const url = `${this.FIREBASE_DB_URL}/products.json`;
      const res = await fetch(url);

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to fetch products: ${errorText}`);
      }

      const data = await res.json();

      // Convert object to array
      const products: any[] = [];
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          products.push(data[key]);
        }
      }

      return products;
    } catch (err: any) {
      console.error('Fetch products error:', err);
      this.showToast(err.message || 'Error fetching products', 'danger');
      return [];
    }
  }

  onCategorySelect(category: Category) {
    // Update chip selection
    this.categories.forEach(cat => cat.selected = false);
    category.selected = true;

    this.selectedCategoryKey = category.key;
    this.applyFilters();
  }

  onSearch(event: any) {
    this.searchText = event.target.value?.toLowerCase() || '';
    this.applyFilters();
  }

  applyFilters() {
    this.filteredItems = this.items.filter(item => {

      /* CATEGORY FILTER */
      const matchesCategory =
        this.selectedCategoryKey === 'all' ||
        item.section?.toLowerCase() === this.selectedCategoryKey.toLowerCase();

      /* SEARCH FILTER */
      const matchesSearch =
        !this.searchText ||
        item.title?.toLowerCase().includes(this.searchText) ||
        item.description?.toLowerCase().includes(this.searchText) ||
        item.user?.name?.toLowerCase().includes(this.searchText);

      return matchesCategory && matchesSearch;
    });
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

  async addToCart(item: any) {
    const toast = await this.toastController.create({
      message: `${item.name} added to cart!`,
      duration: 2000,
      position: 'bottom',
      color: 'success',
      icon: 'checkmark-circle-outline'
    });
    toast.present();
    console.log('Added to cart:', item);
  }

  async toggleFavorite(item: any) {
    item.isFavorite = !item.isFavorite;
    const toast = await this.toastController.create({
      message: item.isFavorite ? `${item.name} added to favorites!` : `${item.name} removed from favorites`,
      duration: 1500,
      position: 'bottom',
      color: item.isFavorite ? 'danger' : 'medium',
      icon: item.isFavorite ? 'heart' : 'heart-outline'
    });
    toast.present();
    console.log('Favorite toggled:', item);
  }

  onAddClick() {
    this.navCtrl.navigateForward(['/add-product']);
  }

  onCardClick(product: Product) {
    const navigationExtras: NavigationExtras = {
      state: { product: product }
    };
    this.navCtrl.navigateForward(['/product-details'], navigationExtras);
  }

  searchText: string = '';
selectedCategoryKey: string = 'all';

  async loadItems() {
    const products = await this.fetchProducts();

    this.items = products.map(p => ({
      ...p,
      isFavorite: false,
      time: p.createdAt || Date.now()
    }));

    this.applyFilters(); // 🔥 IMPORTANT
  }


}
