import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  LoadingController,
  ModalController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

import { storage } from 'src/environments/firebase-config';
import { ref as storageRef, uploadString, getDownloadURL } from 'firebase/storage';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

import { Geolocation } from '@ionic-native/geolocation/ngx';

import { UserService } from 'src/app/services/user.service';
import { MapComponentComponent } from './map-component/map-component.component';

interface PickedImage {
  dataUrl: string;  // data:image/...;base64,...
  mimeType: string; // image/jpeg etc
  fileName?: string;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
  providers: [Geolocation],
  standalone: false,
})
export class AddProductPage implements OnInit {
  form: FormGroup;

  selectedLanguage: string = 'en';

  // ✅ One picker + max 3 images
  pickedImages: PickedImage[] = [];
  readonly MAX_IMAGES = 3;

  productLocation: { lat: number; lng: number } | any = null;

  FIREBASE_DB_URL = 'https://rajee-198a5-default-rtdb.firebaseio.com';

  category: any[] = [];
  subCategoryOptions: Array<{ key: string; ar: string; en: string }> = [];

  // ✅ Conditions shown in UI (translated)
  conditions: string[] = [];

  // ✅ Sub Categories Map (FULL LIST you asked)
  subCategoriesMap: Record<string, Array<{ key: string; ar: string; en: string }>> = {
    // ===================== CARS =====================
    cars: [
      { key: 'parts', ar: 'قطع غيار وملحقات', en: 'Parts & Accessories' },
      { key: 'trucks', ar: 'شاحنات ومعدات ثقيلة', en: 'Trucks & Heavy Equipment' },
      { key: 'motorbikes', ar: 'دبابات', en: 'Motorbikes' },
      { key: 'classic', ar: 'سيارات تراثية', en: 'Classic/Heritage Cars' },
      { key: 'damaged', ar: 'سيارات مصدومه', en: 'Damaged Cars' },
      { key: 'transfer', ar: 'سيارات للتنازل', en: 'Transfer Cars' },
    ],


    // ===================== ELECTRONICS =====================
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



    // ===================== FURNITURE =====================
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

    // ===================== PERSONAL ITEMS =====================
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

    // ===================== SERVICES =====================
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

    // ===================== JOBS =====================
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

    // ===================== OTHER CATEGORIES (you can keep empty or add later) =====================
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
    private fb: FormBuilder,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private translate: TranslateService,
    private userService: UserService,
    private geolocation: Geolocation,
    private modalCtrl: ModalController
  ) {
<<<<<<< HEAD
    this.form = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      section: ['', Validators.required],
      condition: ['', Validators.required],
      description: ['', Validators.required],
      address:[''],
      images: [[]]
    });

=======
    // ✅ Your categories
>>>>>>> ad899d4189d07c552b0b4a8a8d20bafe4fdd5a34
    this.category = [
      { key: 'cars', ar: 'حراج السيارات', en: 'Cars & Vehicles' },
      { key: 'electronics', ar: 'حراج الأجهزة', en: 'Electronics & Devices' },
      { key: 'furniture', ar: 'حراج الأثاث', en: 'Furniture' },
      { key: 'personal_items', ar: 'مستلزمات شخصية', en: 'Personal Items & Accessories' },
      { key: 'services', ar: 'خدمات', en: 'Services' },
      { key: 'jobs', ar: 'وظائف', en: 'Jobs' },
      { key: 'games', ar: 'ألعاب وترفيه', en: 'Games & Entertainment' },
      { key: 'others', ar: 'قسم غير مصنف', en: 'Uncategorized / Other' },
    ];

    // ✅ translated conditions
    this.refreshConditions();

    // ✅ DEFAULT: first option selected
    const defaultSectionKey = this.category?.[0]?.key || '';
    const defaultCondition = this.conditions?.[0] || '';

    this.form = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],

      section: [defaultSectionKey, Validators.required], // ✅ default category option 1
      subCategory: ['', Validators.required],            // ✅ auto-set to option 1

      condition: [defaultCondition, Validators.required], // ✅ default condition option 1
      description: ['', Validators.required],

      address: [''],
      images: [[]],
    });
  }

  async ngOnInit() {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) this.selectedLanguage = savedLang;

    // refresh translated strings
    this.refreshConditions();

    // ✅ ensure condition default exists
    this.setDefaultConditionIfEmpty();

    // ✅ section change -> load subcats and auto-select first
    this.form.get('section')?.valueChanges.subscribe((sectionKey: string) => {
      this.applySubCategories(sectionKey, true);
    });

    // ✅ init default subcats
    const defaultSection = this.form.get('section')?.value;
    this.applySubCategories(defaultSection, true);

    // ✅ location on load
    await this.getCurrentLocation();
  }

  refreshConditions() {
    this.conditions = [
      this.translate.instant('new'),
      this.translate.instant('used'),
      this.translate.instant('good'),
    ];
  }

  private setDefaultConditionIfEmpty() {
    const condCtrl = this.form.get('condition');
    if (!condCtrl?.value) condCtrl?.setValue(this.conditions?.[0] || '');
  }

  private applySubCategories(sectionKey: string, autoSelectFirst: boolean) {
    this.subCategoryOptions = this.subCategoriesMap[sectionKey] || [];
    const sc = this.form.get('subCategory');

    if (this.subCategoryOptions.length) {
      sc?.setValidators([Validators.required]);
      if (autoSelectFirst) sc?.setValue(this.subCategoryOptions[0].key);
      else if (!sc?.value) sc?.setValue(this.subCategoryOptions[0].key);
    } else {
      sc?.setValue('');
      sc?.clearValidators();
    }

    sc?.updateValueAndValidity();
  }

  async pickMultipleImages() {
    try {
      const remainingSlots = this.MAX_IMAGES - this.pickedImages.length;
      if (remainingSlots <= 0) {
        this.showToast(`Maximum ${this.MAX_IMAGES} images allowed`, 'warning');
        return;
      }

      const result = await Camera.pickImages({
        quality: 70,
        limit: remainingSlots, // ✅ Android 13+ / iOS (else ignored)
      });

      const photos = (result?.photos || []).slice(0, remainingSlots); // ✅ enforce max on all devices
      if (!photos.length) return;

      const dataUrls = await Promise.all(
        photos.map(p => this.webPathToDataUrl(p.webPath))
      );

      this.pickedImages = [
        ...this.pickedImages,
        ...dataUrls.map((du) => ({ dataUrl: du, mimeType: 'image/jpeg' })),
      ];
    } catch (err) {
      console.error('Image pick failed', err);
    }
  }

  // ✅ Convert webPath -> dataUrl
  private async webPathToDataUrl(webPath?: string): Promise<string> {
    if (!webPath) return '';
    const res = await fetch(webPath);
    const blob = await res.blob();
    return await this.blobToDataUrl(blob);
  }

  private blobToDataUrl(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob); // ✅ returns "data:image/...;base64,..."
    });
  }


  removePickedImage(index: number) {
    this.pickedImages = this.pickedImages.filter((_, i) => i !== index);
  }

  async handleSubmit() {
    if (this.form.invalid) {
      this.showToast(this.translate.instant('please_fill_required_fields'), 'danger');
      return;
    }

    if (!this.pickedImages.length) {
      this.showToast(this.translate.instant('please_pick_product_image'), 'danger');
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: this.translate.instant('posting'),
    });
    await loading.present();

    try {
      // 1) upload images
      const imageUrls: string[] = [];

      for (const img of this.pickedImages) {
        const fileName = `products/${Date.now()}_${Math.random().toString(16).slice(2)}.jpeg`;
        const imgRef = storageRef(storage, fileName);

        await uploadString(imgRef, img.dataUrl, 'data_url');
        const url = await getDownloadURL(imgRef);
        imageUrls.push(url);
      }

      this.form.patchValue({ images: imageUrls });

      // 2) auth
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      const idToken = userData?.idToken;
      if (!idToken) throw new Error('User not authenticated');

      const pUser: any = await this.userService.getUserById(userData.uid);

      // 3) final product
      const productData = {
        ...this.form.value, // includes section + subCategory + condition
        user: {
          uid: userData.uid,
          name: userData.name,
          email: userData.email,
          phone: pUser?.phone || '',
          photoURL: userData.photoURL,
        },
        location: this.productLocation || {},
        createdAt: Date.now(),
      };

      // 4) save
      const productId = Date.now().toString();
      await this.saveProductToDatabase(productData, productId, idToken);

      this.showToast(this.translate.instant('product_posted_success'), 'success');

      // reset
      this.form.reset();
      this.pickedImages = [];
      this.subCategoryOptions = [];

      // set defaults again after reset
      const defaultSectionKey = this.category?.[0]?.key || '';
      this.form.patchValue({
        section: defaultSectionKey,
        condition: this.conditions?.[0] || '',
      });
      this.applySubCategories(defaultSectionKey, true);

      this.navCtrl.navigateRoot('/home');
    } catch (err: any) {
      console.error(err);
      this.showToast(err?.message || this.translate.instant('server_error'), 'danger');
    } finally {
      loading.dismiss();
    }
  }

  async saveProductToDatabase(productData: any, productId: string, idToken: string): Promise<void> {
    const url = `${this.FIREBASE_DB_URL}/products/${productId}.json?auth=${idToken}`;
    const res = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Failed to save product: ${errorText}`);
    }
  }

  async getCurrentLocation() {
    try {
      const resp = await this.geolocation.getCurrentPosition();
      this.productLocation = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude,
      };

      await this.getAddressFromCoordinatesOSM(this.productLocation.lat, this.productLocation.lng);
    } catch (err) {
      console.error('Error getting location:', err);
      this.showToast(this.translate.instant('location_permission_required'), 'danger');
    }
  }

  async openMapPicker() {
    return ;
    const modal = await this.modalCtrl.create({
      component: MapComponentComponent,
      componentProps: { location: this.productLocation },
    });

    modal.onDidDismiss().then(async (result) => {
      if (result?.data) {
        this.productLocation = result.data;
        await this.getAddressFromCoordinatesOSM(this.productLocation.lat, this.productLocation.lng);
      }
    });

    await modal.present();
  }

<<<<<<< HEAD
  async handleSubmit() {
    if (this.form.invalid) {
      this.showToast(this.translate.instant('please_fill_required_fields'), 'danger');
      return;
    }

    if (!this.pickedImages.length) {
      this.showToast(this.translate.instant('please_pick_product_image'), 'danger');
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: this.translate.instant('posting')
    });
    await loading.present();

    try {
      // 1️⃣ Upload ALL images
      const imageUrls: string[] = [];

      for (const img of this.pickedImages) {
        const fileName = `products/${Date.now()}_${Math.random()}.jpeg`;
        const imgRef = storageRef(storage, fileName);

        await uploadString(imgRef, img.dataUrl!, 'data_url');
        const url = await getDownloadURL(imgRef);
        imageUrls.push(url);
      }

      this.form.patchValue({ images: imageUrls });

      // 2️⃣ User data
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      const idToken = userData?.idToken;
      if (!idToken) throw new Error('User not authenticated');

      const pUser: any = await this.userService.getUserById(userData.uid);

      // 3️⃣ Final Product Object
      const productData = {
        ...this.form.value,
        user: {
          uid: userData.uid,
          name: userData.name,
          email: userData.email,
          phone: pUser?.phone || '',
          photoURL: userData.photoURL
        },
        location: this.productLocation || {},
        createdAt: Date.now()
      };

      // 4️⃣ Save to Firebase
      const productId = Date.now().toString();
      await this.saveProductToDatabase(productData, productId, idToken);

      this.showToast(this.translate.instant('product_posted_success'), 'success');

      // Reset
      this.form.reset();
      this.pickedImages = [];
      this.navCtrl.navigateRoot('/home');

    } catch (err: any) {
      console.error(err);
      this.showToast(err.message || this.translate.instant('server_error'), 'danger');
    } finally {
      loading.dismiss();
    }
  }


  async saveProductToDatabase(productData: any, productId: string, idToken: string): Promise<void> {
    try {
      const url = `${this.FIREBASE_DB_URL}/products/${productId}.json?auth=${idToken}`;
      const res = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData)
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to save product: ${errorText}`);
      }

      console.log('✅ Product saved successfully to Realtime Database');
    } catch (err: any) {
      this.showToast(err?.message, 'danger');
      throw err;
=======
  async getAddressFromCoordinatesOSM(lat: number, lng: number) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`;

    try {
      const res: any = await fetch(url).then((r) => r.json());
      const address = res?.display_name || '';
      this.form.patchValue({ address });
      return address;
    } catch (error) {
      console.error('OSM Geocode error', error);
      return '';
>>>>>>> ad899d4189d07c552b0b4a8a8d20bafe4fdd5a34
    }
  }

  async showToast(message: string, color: string = 'danger') {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color,
      position: 'bottom',
    });
    toast.present();
  }

  goBack() {
    this.navCtrl.navigateRoot('/main');
  }
<<<<<<< HEAD

  async openMapPicker() {
    const modal = await this.modalCtrl.create({
      component: MapComponentComponent,
      componentProps: { location: this.productLocation }
    });

    modal.onDidDismiss().then((result) => {
      if (result?.data) {
        this.productLocation = result.data; // { lat: number, lng: number }
        console.log('Picked Location:', this.productLocation);
      }
    });

    await modal.present();
  }


  async getCityFromCoordinatesOSM(lat: number, lng: number) {

    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`;

    try {
      const res: any = await fetch(url).then(r => r.json());
      const city = res?.display_name;
      console.log(res,'City:', city);
      this.form.patchValue({ city });
      return res?.display_name;
    } catch (error) {
      console.error('OSM Geocode error', error);
      return '';
    }
  }

  pickedImages: Photo[] = [];

  async pickMultipleImages() {
    try {
      if (this.pickedImages.length >= 3) {
        this.showToast('Maximum 3 images allowed', 'warning');
        return;
      }

      const image = await Camera.getPhoto({
        quality: 60,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Prompt
      });

      this.pickedImages.push(image);
    } catch (error) {
      console.error('Image pick error', error);
    }
  }


=======
>>>>>>> ad899d4189d07c552b0b4a8a8d20bafe4fdd5a34
}
