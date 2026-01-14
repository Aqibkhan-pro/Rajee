import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { IonSearchbar, NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Product } from 'src/app/shared/common.interface';

interface Category {
  key: string;
  en: string;
  ar: string;
  icon: string;
  selected: boolean;
}

interface Story {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  image: string;
  caption?: string;
  createdAt: number; // timestamp
  seen?: boolean;    // local only
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: false
})
export class DashboardComponent implements OnInit, OnDestroy {
  selectedLanguage: string = 'en';
  FIREBASE_DB_URL = 'https://rajee-198a5-default-rtdb.firebaseio.com';

  // ✅ Current user (from localStorage)
  currentUserId: string = '';
  currentUserName: string = '';
  currentUserAvatar: string = '';

  // ✅ Categories
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

  // ✅ Products
  items: Product[] = [];
  filteredItems: Product[] = [];
  searchText: string = '';
  selectedCategoryKey: string = 'all';

  // ✅ Stories
  stories: Story[] = [];
  isAddStoryOpen = false;
  isStoryViewerOpen = false;
  activeStory: Story | null = null;

  newStoryImage: string = '';
  newStoryCaption: string = '';

  private storyRefreshTimer: any;

  constructor(
    private navCtrl: NavController,
    private translate: TranslateService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    // ✅ Language
    this.translate.onLangChange.subscribe(() => {
      this.selectedLanguage = this.translate.currentLang;
    });

    const savedLang = localStorage.getItem('lang');
    if (savedLang) this.selectedLanguage = savedLang;

    // ✅ Current user
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.currentUserId = userData?.uid || userData?.userId || 'guest';
    this.currentUserName = userData?.name || userData?.full_name || 'You';
    this.currentUserAvatar = userData?.avatar || userData?.profile || '';

    // ✅ Load
    this.loadItems();
    this.loadStoriesFromFirebase();

    // ✅ Optional auto refresh (every 15 sec)
    this.storyRefreshTimer = setInterval(() => {
      this.loadStoriesFromFirebase();
    }, 15000);
  }

  ngOnDestroy() {
    if (this.storyRefreshTimer) clearInterval(this.storyRefreshTimer);
  }

  // ------------------ ✅ PRODUCTS ------------------

  async fetchProducts(): Promise<any[]> {
    try {
      const url = `${this.FIREBASE_DB_URL}/approvedProducts.json`;
      const res = await fetch(url);

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to fetch products: ${errorText}`);
      }

      const data = await res.json();
      if (!data) return [];

      const products: any[] = [];
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          products.push({ id: key, ...data[key] });
        }
      }

      return products;
    } catch (err: any) {
      console.error('Fetch products error:', err);
      this.showToast(err.message || 'Error fetching products', 'danger');
      return [];
    }
  }

  async loadItems() {
    const products = await this.fetchProducts();

    this.items = products.map(p => ({
      ...p,
      isFavorite: false,
      time: p.createdAt || Date.now()
    }));

    this.applyFilters();
  }

  onCategorySelect(category: Category) {
    this.categories.forEach(cat => (cat.selected = false));
    category.selected = true;

    this.selectedCategoryKey = category.key;
    this.applyFilters();
  }

  onSearch(event: any) {
    this.searchText = event.target.value?.toLowerCase() || '';
    this.applyFilters();
  }

  applyFilters() {
    this.filteredItems = this.items.filter((item: any) => {
      const matchesCategory =
        this.selectedCategoryKey === 'all' ||
        item.section?.toLowerCase() === this.selectedCategoryKey.toLowerCase();

      const matchesSearch =
        !this.searchText ||
        item.title?.toLowerCase().includes(this.searchText) ||
        item.description?.toLowerCase().includes(this.searchText) ||
        item.user?.name?.toLowerCase().includes(this.searchText);

      return matchesCategory && matchesSearch;
    });
  }

  onCardClick(product: Product) {
    const navigationExtras: NavigationExtras = { state: { product } };
    this.navCtrl.navigateForward(['/product-details'], navigationExtras);
  }

  // ------------------ ✅ STORIES (Firebase) ------------------

  openAddStoryModal() {
    this.isAddStoryOpen = true;
  }

  closeAddStoryModal() {
    this.isAddStoryOpen = false;
    this.newStoryImage = '';
    this.newStoryCaption = '';
  }

  openStoryViewer(story: Story) {
    this.activeStory = story;
    this.isStoryViewerOpen = true;

    // ✅ mark as seen locally
    this.stories = this.stories.map(s =>
      s.id === story.id ? { ...s, seen: true } : s
    );
  }

  closeStoryViewer() {
    this.isStoryViewerOpen = false;
    this.activeStory = null;
  }

  async addStory() {
    if (!this.newStoryImage?.trim()) {
      this.showToast('Please add story image URL', 'danger');
      return;
    }

    const payload = {
      userId: this.currentUserId,
      userName: this.currentUserName,
      userAvatar: this.currentUserAvatar,
      image: this.newStoryImage.trim(),
      caption: this.newStoryCaption?.trim() || '',
      createdAt: Date.now(),
    };

    const ok = await this.saveStoryToFirebase(payload);
    if (!ok) return;

    this.showToast('Story posted!', 'success');
    this.closeAddStoryModal();
    await this.loadStoriesFromFirebase();
  }

  async saveStoryToFirebase(payload: any): Promise<boolean> {
    try {
      const url = `${this.FIREBASE_DB_URL}/stories.json`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to save story: ${errorText}`);
      }
      return true;
    } catch (err: any) {
      console.error('Save story error:', err);
      this.showToast(err.message || 'Error saving story', 'danger');
      return false;
    }
  }

  async loadStoriesFromFirebase() {
    this.stories = await this.fetchStoriesFromFirebase();
  }

  async fetchStoriesFromFirebase(): Promise<Story[]> {
    try {
      const url = `${this.FIREBASE_DB_URL}/stories.json`;
      const res = await fetch(url);

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to fetch stories: ${errorText}`);
      }

      const data = await res.json();
      if (!data) return [];

      const arr: Story[] = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
        seen: false
      }));

      // ✅ show only last 24 hours
      const last24h = Date.now() - 24 * 60 * 60 * 1000;
      const filtered = arr.filter(s => (s.createdAt || 0) >= last24h);

      // ✅ newest first
      filtered.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

      return filtered;
    } catch (err: any) {
      console.error('Fetch stories error:', err);
      this.showToast(err.message || 'Error fetching stories', 'danger');
      return [];
    }
  }

  // ------------------ ✅ UI helpers ------------------

  async showToast(message: string, color: string = 'danger') {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      position: 'bottom',
    });
    toast.present();
  }

  getInitial(name?: string): string {
    if (!name) return '?';

    const cleaned = name.trim();
    if (!cleaned) return '?';

    // Take first word, then first character
    const firstWord = cleaned.split(' ')[0];
    return (firstWord.charAt(0) || '?').toUpperCase();
  }


  @ViewChild('searchbar', { static: false }) searchbar!: IonSearchbar;

  showSearch = false;
  toggleSearch() {
    this.showSearch = !this.showSearch;

    // when opening -> focus input
    if (this.showSearch) {
      setTimeout(() => this.searchbar?.setFocus(), 200);
      return;
    }

    this.searchText = '';
    this.applyFilters(); // your existing function
  }

  isGrid: boolean = false;

toggleLayout() {
  this.isGrid = !this.isGrid;
}

}
