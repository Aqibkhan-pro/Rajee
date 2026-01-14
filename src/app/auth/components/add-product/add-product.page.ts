import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  AlertController,
  LoadingController,
  ModalController,
  NavController,
  ToastController
} from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { storage } from 'src/environments/firebase-config';
import { ref as storageRef, uploadString, getDownloadURL } from 'firebase/storage';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { UserService } from 'src/app/services/user.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { MapComponentComponent } from './map-component/map-component.component';

interface User {
  uid: string;
  [key: string]: any;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
  providers: [Geolocation],
  standalone: false
})
export class AddProductPage implements OnInit {

  form: FormGroup;
  category: any[] = [];
  conditions: string[] = [];
  pickedImage: Photo | null = null;
  selectedLanguage: string = 'en';
  productLocation: { lat: number, lng: number } | null = null;

  FIREBASE_DB_URL = 'https://rajee-198a5-default-rtdb.firebaseio.com';

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
    this.form = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      section: ['', Validators.required],
      condition: ['', Validators.required],
      description: ['', Validators.required],
      address:[''],
      images: [[]]
    });

    this.category = [
      { key: 'cars', ar: 'حراج السيارات', en: 'Cars & Vehicles' },
      { key: 'real_estate', ar: 'حراج العقار', en: 'Real Estate' },
      { key: 'electronics', ar: 'حراج الأجهزة', en: 'Electronics & Devices' },
      { key: 'animals', ar: 'مواشي وحيوانات وطيور', en: 'Livestock, Animals & Birds' },
      { key: 'furniture', ar: 'حراج الأثاث', en: 'Furniture' },
      { key: 'personal_items', ar: 'مستلزمات شخصية', en: 'Personal Items & Accessories' },
      { key: 'services', ar: 'خدمات', en: 'Services' },
      { key: 'jobs', ar: 'وظائف', en: 'Jobs' },
      { key: 'games', ar: 'ألعاب وترفيه', en: 'Games & Entertainment' },
      { key: 'food', ar: 'أطعمة ومشروبات', en: 'Food & Beverages' },
      { key: 'books_art', ar: 'مكتبة وفنون', en: 'Books & Arts' },
      { key: 'hunting_trips', ar: 'صيد ورحلات', en: 'Hunting & Trips' },
      { key: 'events', ar: 'حفلات ومناسبات', en: 'Events & Parties' },
      { key: 'agriculture', ar: 'زراعة وحدائق', en: 'Agriculture & Gardening' },
      { key: 'travel', ar: 'سفر وسياحة', en: 'Travel & Tourism' },
      { key: 'programming_design', ar: 'برمجة وتصاميم', en: 'Programming & Designs' },
      { key: 'lost_found', ar: 'مفقودات', en: 'Lost & Found' },
      { key: 'others', ar: 'قسم غير مصنف', en: 'Uncategorized / Other' }
    ];

    this.conditions = [
      this.translate.instant('new'),
      this.translate.instant('used'),
      this.translate.instant('good')
    ];
  }

  async ngOnInit() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const pUser:any = await this.userService.getUserById(userData.uid);
    console.log("User:--", pUser);

    const savedLang = localStorage.getItem('lang');
    if (savedLang) this.selectedLanguage = savedLang;

    // Get user location at page load
    this.getCurrentLocation();
  }

  async getCurrentLocation() {
    try {
      const resp = await this.geolocation.getCurrentPosition();
      this.productLocation = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };
      this.getCityFromCoordinatesOSM(this.productLocation.lat, this.productLocation.lng);
      console.log('Location:', this.productLocation);
    } catch (err) {
      console.error('Error getting location:', err);
      this.showToast(this.translate.instant('location_permission_required'), 'danger');
    }
  }

  async pickSingleImage() {
    try {
      const image = await Camera.getPhoto({
        quality: 50,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Prompt
      });
      this.pickedImage = image;
      console.log('Picked image (not uploaded yet)');
    } catch (err) {
      console.error('Image pick failed', err);
    }
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


}
