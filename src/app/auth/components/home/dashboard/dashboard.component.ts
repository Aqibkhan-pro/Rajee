import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { IonSearchbar, NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Product } from 'src/app/shared/common.interface';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Subscription } from 'rxjs';

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
  createdAt: number;
  seen?: boolean;
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

  currentUserId: string = '';
  currentUserName: string = '';
  currentUserAvatar: string = '';

  items: Product[] = [];
  filteredItems: Product[] = [];
  searchText: string = '';
  selectedCategoryKey: string = 'all';
  selectedSubCategoryKey: string = 'all';
  subCategoryOptions: Array<{ key: string; ar: string; en: string }> = [];
  isGrid: boolean = false;
  showSearch: boolean = false;

  stories: Story[] = [];
  isAddStoryOpen = false;
  isStoryViewerOpen = false;
  activeStory: Story | null = null;
  storiesCollapsed = false;

  newStoryCaption: string = '';
  uploadingStory: boolean = false;
  pickedStoryPreview: string = '';
  pickedStoryBlob: Blob | null = null;

  private storyRefreshTimer: any;
  private langSub?: Subscription;

  @ViewChild('searchbar', { static: false }) searchbar!: IonSearchbar;

  categories: Category[] = [
    { key: 'all', ar: 'الكل', en: 'All', icon: 'grid-outline', selected: true },
    { key: 'cars', ar: 'السيارات', en: 'Cars & Vehicles', icon: 'car-outline', selected: false },
    { key: 'electronics', ar: 'الأجهزة الإلكترونية', en: 'Electronics & Devices', icon: 'phone-portrait-outline', selected: false },
    { key: 'furniture', ar: 'الأثاث', en: 'Furniture', icon: 'bed-outline', selected: false },
    { key: 'personal_items', ar: 'مستلزمات شخصية', en: 'Personal Items & Accessories', icon: 'bag-handle-outline', selected: false },
    { key: 'services', ar: 'خدمات', en: 'Services', icon: 'construct-outline', selected: false },
    { key: 'jobs', ar: 'وظائف', en: 'Jobs', icon: 'briefcase-outline', selected: false },
    { key: 'games', ar: 'ألعاب وترفيه', en: 'Games & Entertainment', icon: 'game-controller-outline', selected: false },
    { key: 'others', ar: 'قسم غير مصنف', en: 'Uncategorized / Other', icon: 'ellipsis-horizontal-outline', selected: false }
  ];

  subCategoriesMap: Record<string, Array<{ key: string; ar: string; en: string }>> = {
    cars: [
      { key: 'parts', ar: 'قطع غيار وملحقات', en: 'Parts & Accessories' },
      { key: 'trucks', ar: 'شاحنات ومعدات ثقيلة', en: 'Trucks & Heavy Equipment' },
      { key: 'motorbikes', ar: 'دبابات', en: 'Motorbikes' },
      { key: 'classic', ar: 'سيارات تراثية', en: 'Classic/Heritage Cars' },
      { key: 'damaged', ar: 'سيارات مصدومه', en: 'Damaged Cars' },
      { key: 'transfer', ar: 'سيارات للتنازل', en: 'Transfer Cars' },
    ],
    electronics: [
      { key: 'mobiles', ar: 'جوالات', en: 'Mobiles' },
      { key: 'tablets', ar: 'تابلت', en: 'Tablets' },
      { key: 'computers', ar: 'كمبيوتر', en: 'Computers' },
      { key: 'egames', ar: 'العاب إلكترونية', en: 'Electronic Games' },
      { key: 'tv_audio', ar: 'تلفزيونات وصوتيات', en: 'TV & Audio' },
      { key: 'cameras', ar: 'كاميرات', en: 'Cameras' },
      { key: 'accounts', ar: 'حسابات واشتراكات', en: 'Accounts & Subscriptions' },
      { key: 'numbers', ar: 'أرقام مميزة', en: 'Special Numbers' },
      { key: 'appliances', ar: 'أجهزة منزلية ومطبخ', en: 'Home & Kitchen Appliances' },
      { key: 'generators', ar: 'مولدات ومحركات', en: 'Generators & Motors' },
      { key: 'networking', ar: 'شبكات وراوترات', en: 'Networking & Routers' },
      { key: 'printers', ar: 'طابعات وملحقاتها', en: 'Printers & Accessories' },
    ],
    furniture: [
      { key: 'majlis', ar: 'مجالس ومفروشات', en: 'Majlis & Upholstery' },
      { key: 'tables', ar: 'طاولات وكراسي', en: 'Tables & Chairs' },
      { key: 'beds', ar: 'أسرة ومراتب', en: 'Beds & Mattresses' },
      { key: 'wardrobes', ar: 'خزائن ودواليب', en: 'Wardrobes & Cabinets' },
      { key: 'office', ar: 'أثاث مكتبي', en: 'Office Furniture' },
      { key: 'outdoor', ar: 'أثاث خارجي', en: 'Outdoor Furniture' },
      { key: 'home_tools', ar: 'أدوات منزلية', en: 'Home Tools & Items' },
      { key: 'decor', ar: 'تحف وديكور', en: 'Decor & Antiques' },
      { key: 'kitchen', ar: 'مطابخ', en: 'Kitchens' },
      { key: 'carpets', ar: 'سجاد وستائر', en: 'Carpets & Curtains' },
    ],
    personal_items: [
      { key: 'watches', ar: 'ساعات', en: 'Watches' },
      { key: 'perfumes', ar: 'عطور', en: 'Perfumes' },
      { key: 'sports', ar: 'مستلزمات رياضية', en: 'Sports Items' },
      { key: 'glasses', ar: 'نظارات', en: 'Glasses' },
      { key: 'men', ar: 'ملابس رجالية', en: 'Men Clothing' },
      { key: 'women', ar: 'ملابس نسائية', en: 'Women Clothing' },
      { key: 'kids', ar: 'ملابس واحتياجات اطفال', en: 'Kids Items' },
      { key: 'gifts', ar: 'هدايا', en: 'Gifts' },
      { key: 'bags', ar: 'شنط سفر', en: 'Travel Bags' },
      { key: 'beauty', ar: 'صحة وجمال', en: 'Health & Beauty' },
      { key: 'jewelry', ar: 'ذهب ومجوهرات', en: 'Gold & Jewelry' },
    ],
    services: [
      { key: 'construction', ar: 'بناء ومقاولات', en: 'Construction & Contracting' },
      { key: 'ac', ar: 'تكييف وتبريد', en: 'AC & Cooling' },
      { key: 'car_services', ar: 'خدمات سيارات', en: 'Car Services' },
      { key: 'moving', ar: 'نقل عفش', en: 'Moving Furniture' },
      { key: 'water_pumps', ar: 'مضخات ومياه', en: 'Water & Pumps' },
      { key: 'shipping', ar: 'شحن وتوصيل', en: 'Delivery & Shipping' },
      { key: 'cleaning', ar: 'نظافة', en: 'Cleaning' },
      { key: 'rentals', ar: 'تاجير', en: 'Rentals' },
      { key: 'other_services', ar: 'خدمات أخرى', en: 'Other Services' },
    ],
    jobs: [
      { key: 'admin', ar: 'إدارية وسكرتارية', en: 'Admin & Secretary' },
      { key: 'sales', ar: 'تسويق ومبيعات', en: 'Sales & Marketing' },
      { key: 'media', ar: 'إعلام', en: 'Media' },
      { key: 'tech', ar: 'تقنية واتصالات', en: 'Tech & Telecom' },
      { key: 'accounting', ar: 'محاسبة ومالية', en: 'Accounting & Finance' },
      { key: 'engineering', ar: 'هندسة', en: 'Engineering' },
      { key: 'customer_service', ar: 'خدمة عملاء', en: 'Customer Service' },
      { key: 'security', ar: 'حراسة وأمن', en: 'Security & Guard' },
      { key: 'teaching', ar: 'تعليم وتدريس', en: 'Education & Teaching' },
      { key: 'hospitality', ar: 'سياحة وفندقة', en: 'Tourism & Hospitality' },
      { key: 'drivers', ar: 'سائقين وتوصيل', en: 'Drivers & Delivery' },
      { key: 'design', ar: 'تصميم', en: 'Design' },
      { key: 'industry', ar: 'صناعة وحرف', en: 'Industry & Crafts' },
      { key: 'medical', ar: 'طب وتمريض', en: 'Medical & Nursing' },
      { key: 'hr_training', ar: 'تدريب وموارد بشرية', en: 'Training & HR' },
      { key: 'trades', ar: 'مهن وحرف', en: 'Trades' },
      { key: 'remote', ar: 'عمل من المنزل', en: 'Work From Home' },
    ],
    games: [
      { key: 'console_games', ar: 'ألعاب بلايستيشن/إكس بوكس', en: 'Console Games' },
      { key: 'consoles', ar: 'أجهزة ألعاب', en: 'Gaming Consoles' },
      { key: 'controllers', ar: 'يد تحكم وملحقات', en: 'Controllers & Accessories' },
      { key: 'toys', ar: 'ألعاب أطفال', en: 'Kids Toys' },
      { key: 'tickets', ar: 'تذاكر', en: 'Tickets' },
      { key: 'other_ent', ar: 'ترفيه أخرى', en: 'Other Entertainment' },
    ],
    others: [{ key: 'misc', ar: 'متنوع', en: 'Miscellaneous' }],
  };

  constructor(
    private navCtrl: NavController,
    private translate: TranslateService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    // Language change subscription
    this.langSub = this.translate.onLangChange.subscribe(() => {
      this.selectedLanguage = this.translate.currentLang;
    });

    const savedLang = localStorage.getItem('lang');
    if (savedLang) this.selectedLanguage = savedLang;

    // Current user from localStorage
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.currentUserId = userData?.uid || userData?.userId || 'guest';
    this.currentUserName = userData?.name || userData?.full_name || 'You';
    this.currentUserAvatar = userData?.avatar || userData?.profile || '';

    // Load initial data
    this.loadItems();
    this.loadStoriesFromFirebase();

    // Auto refresh stories every 15 seconds
    this.storyRefreshTimer = setInterval(() => {
      this.loadStoriesFromFirebase();
    }, 15000);
  }

  ngOnDestroy() {
    if (this.storyRefreshTimer) clearInterval(this.storyRefreshTimer);
    if (this.langSub) this.langSub.unsubscribe();
  }

  // ------------------ PRODUCTS ------------------

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

  toggleLayout() {
    this.isGrid = !this.isGrid;
  }

  toggleStories() {
    this.storiesCollapsed = !this.storiesCollapsed;
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;

    if (this.showSearch) {
      setTimeout(() => this.searchbar?.setFocus(), 200);
      return;
    }

    this.searchText = '';
    this.applyFilters();
  }

  onCategorySelect(category: Category) {
    this.categories.forEach(c => (c.selected = false));
    category.selected = true;
    this.selectedCategoryKey = category.key;

    if (this.selectedCategoryKey === 'all') {
      this.subCategoryOptions = [];
      this.selectedSubCategoryKey = 'all';
    } else {
      this.subCategoryOptions = this.subCategoriesMap[this.selectedCategoryKey] || [];
      this.selectedSubCategoryKey = 'all';
    }

    this.applyFilters();
  }

  onSubCategorySelect(key: string) {
    this.selectedSubCategoryKey = key || 'all';
    this.applyFilters();
  }

  onSearch(event: any) {
    const value = event?.detail?.value ?? event?.target?.value ?? '';
    this.searchText = (value || '').toLowerCase();
    this.applyFilters();
  }

  applyFilters() {
    this.filteredItems = this.items.filter((item: any) => {
      const itemSection = (item.section || '').toLowerCase();
      const itemSub = (item.subCategory || item.sub_category || '').toLowerCase();

      const matchesCategory =
        this.selectedCategoryKey === 'all' ||
        itemSection === this.selectedCategoryKey.toLowerCase();

      const matchesSubCategory =
        this.selectedCategoryKey === 'all' ||
        this.selectedSubCategoryKey === 'all' ||
        itemSub === this.selectedSubCategoryKey.toLowerCase();

      const matchesSearch =
        !this.searchText ||
        (item.title || '').toLowerCase().includes(this.searchText) ||
        (item.description || '').toLowerCase().includes(this.searchText) ||
        (item.user?.name || '').toLowerCase().includes(this.searchText);

      return matchesCategory && matchesSubCategory && matchesSearch;
    });
  }

  onCardClick(product: Product) {
    const navigationExtras: NavigationExtras = { state: { product } };
    this.navCtrl.navigateForward(['/product-details'], navigationExtras);
  }

  private getIdTokenFromStorage(): string | null {
    try {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      return userData?.idToken || null;
    } catch {
      return null;
    }
  }

  private buildDbUrl(path: string): string {
    const token = this.getIdTokenFromStorage();
    const base = `${this.FIREBASE_DB_URL}/${path}.json`;
    return token ? `${base}?auth=${encodeURIComponent(token)}` : base;
  }

  // ------------------ STORIES ------------------

  openAddStoryModal() {
    this.isAddStoryOpen = true;
  }

  closeAddStoryModal() {
    this.isAddStoryOpen = false;
    this.newStoryCaption = '';
    this.pickedStoryPreview = '';
    this.pickedStoryBlob = null;
  }

  openStoryViewer(story: Story) {
    this.activeStory = story;
    this.isStoryViewerOpen = true;

    // Mark as seen locally
    this.stories = this.stories.map(s =>
      s.id === story.id ? { ...s, seen: true } : s
    );
  }

  closeStoryViewer() {
    this.isStoryViewerOpen = false;
    this.activeStory = null;
  }

  async pickStoryImage() {
    try {
      const photo = await Camera.getPhoto({
        quality: 80,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Photos,
      });

      if (!photo?.base64String) return;

      this.pickedStoryPreview = `data:image/jpeg;base64,${photo.base64String}`;
      this.pickedStoryBlob = this.base64ToBlob(photo.base64String, 'image/jpeg');
    } catch (e) {
      console.log('pickStoryImage cancelled', e);
    }
  }

  async addStory() {
    try {
      if (this.currentUserId === 'guest') {
        this.showToast('Please login to post story', 'danger');
        return;
      }

      if (!this.pickedStoryBlob) {
        this.showToast(
          this.selectedLanguage === 'en'
            ? 'Please pick an image from gallery'
            : 'رجاءً اختر صورة من المعرض',
          'danger'
        );
        return;
      }

      this.uploadingStory = true;

      // 1) Upload to Firebase Storage
      const downloadURL = await this.uploadStoryImageToStorage(this.pickedStoryBlob);

      // 2) Save to RTDB
      const payload = {
        userId: this.currentUserId,
        userName: this.currentUserName,
        userAvatar: this.currentUserAvatar,
        image: downloadURL,
        caption: (this.newStoryCaption || '').trim(),
        createdAt: Date.now(),
      };

      const ok = await this.saveStoryToFirebase(payload);
      if (!ok) return;

      this.showToast(this.selectedLanguage === 'en' ? 'Story posted!' : 'تم نشر القصة!', 'success');
      this.closeAddStoryModal();
      await this.loadStoriesFromFirebase();
    } catch (err: any) {
      console.error(err);
      this.showToast(err?.message || 'Upload failed', 'danger');
    } finally {
      this.uploadingStory = false;
    }
  }

  private async uploadStoryImageToStorage(blob: Blob): Promise<string> {
    const storage = getStorage();
    const filePath = `stories/${this.currentUserId}/${Date.now()}.jpg`;
    const storageRef = ref(storage, filePath);

    await uploadBytes(storageRef, blob, { contentType: 'image/jpeg' });
    return await getDownloadURL(storageRef);
  }

  async saveStoryToFirebase(payload: any): Promise<boolean> {
    try {
      const url = this.buildDbUrl('stories');
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
      this.showToast(err?.message || 'Error saving story', 'danger');
      return false;
    }
  }

  async loadStoriesFromFirebase() {
    this.stories = await this.fetchStoriesFromFirebase();
  }

  async fetchStoriesFromFirebase(): Promise<Story[]> {
    try {
      const url = this.buildDbUrl('stories');
      const res = await fetch(url);

      if (!res.ok) throw new Error(await res.text());

      const data = await res.json();
      if (!data) return [];

      const arr: Story[] = Object.keys(data).map(key => ({
        id: key,
        ...data[key],
        seen: false
      }));

      // Only last 24 hours
      const last24h = Date.now() - 24 * 60 * 60 * 1000;
      const filtered = arr.filter(s => (s.createdAt || 0) >= last24h);

      // Newest first
      filtered.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

      return filtered;
    } catch (err: any) {
      console.error('Fetch stories error:', err);
      this.showToast(err?.message || 'Error fetching stories', 'danger');
      return [];
    }
  }

  // ------------------ UI Helpers ------------------

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

    const firstWord = cleaned.split(' ')[0];
    return (firstWord.charAt(0) || '?').toUpperCase();
  }

  private base64ToBlob(base64Data: string, contentType = 'image/jpeg'): Blob {
    const byteCharacters = atob(base64Data);
    const byteArrays: Uint8Array[] = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) byteNumbers[i] = slice.charCodeAt(i);
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays as BlobPart[], { type: contentType });
  }

  // ------------------ Performance: trackBy functions ------------------
  trackByCategory(index: number, category: Category): string {
    return category.key;
  }

  trackByStory(index: number, story: Story): string {
    return story.id;
  }

  trackByItem(index: number, item: Product): string | number {
    return (item as any).id || item.title || index;
  }

  trackBySubCategory(index: number, subCat: { key: string }): string {
    return subCat.key;
  }
}

