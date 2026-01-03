
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController, LoadingController, NavController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ref, set } from 'firebase/database';
import { TranslateService } from '@ngx-translate/core';
import { db } from 'src/environments/firebase-config';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
  standalone:false
})
export class AddProductPage implements OnInit {

    form: FormGroup;
    modalVisibleIndex: number | null = null;
    loadingLocations: { [key: number]: boolean } = {};
    sections: string[] = [];
    conditions: string[] = [];
    maxProducts = 3;

    constructor(
      private fb: FormBuilder,
      private alertCtrl: AlertController,
      private navCtrl: NavController,
      private loadingCtrl: LoadingController,
      private translate: TranslateService
    ) {
      this.form = this.fb.group({
        products: this.fb.array([this.createProductGroup()])
      });

      this.sections = [
        this.translate.instant('iron-tools'),
        this.translate.instant('plastic-tools'),
        this.translate.instant('electrical-tools'),
        this.translate.instant('construction-equipment'),
        this.translate.instant('old-electronics'),
      ];

      this.conditions = [
        this.translate.instant('new'),
        this.translate.instant('used'),
        this.translate.instant('good'),
      ];
    }

    ngOnInit() {}

    get products(): FormArray {
      return this.form.get('products') as FormArray;
    }

    createProductGroup(): FormGroup {
      return this.fb.group({
        title: ['', Validators.required],
        description: [''],
        price: ['', Validators.required],
        section: [this.translate.instant('auction'), Validators.required],
        condition: [''],
        location: [''],
        images: [[]]
      });
    }

    addProduct() {
      if (this.products.length >= this.maxProducts) return;
      this.products.push(this.createProductGroup());
    }

    removeProduct(index: number) {
      if (this.products.length <= 1) return;
      this.products.removeAt(index);
    }

    async pickMedia(index: number, type: 'image' | 'video') {
      try {
        const result = await Camera.pickImages({ quality: 1, limit: 5 });
        if (result.photos && result.photos.length) {
          const currentImages = this.products.at(index).value.images || [];
          const newImages = result.photos.map(p => ({ uri: p.webPath, type: type }));
          this.products.at(index).patchValue({ images: [...currentImages, ...newImages] });
        }
      } catch (err) {
        const alert = await this.alertCtrl.create({
          header: this.translate.instant('error'),
          message: this.translate.instant('error_while_picking_media'),
          buttons: ['OK']
        });
        await alert.present();
      }
    }

    async getLocation(index: number) {
      this.loadingLocations[index] = true;
      try {
        const locText = `Lat: 36.72}, Lng: 34.54}`;
        this.products.at(index).patchValue({ location: locText });
      } catch (err) {
        const alert = await this.alertCtrl.create({
          header: this.translate.instant('error'),
          message: this.translate.instant('location_error'),
          buttons: ['OK']
        });
        await alert.present();
      } finally {
        this.loadingLocations[index] = false;
      }
    }

    selectSection(index: number, section: string) {
      this.products.at(index).patchValue({ section });
      this.modalVisibleIndex = null;
    }

    selectCondition(index: number, condition: string) {
      this.products.at(index).patchValue({ condition });
      this.modalVisibleIndex = null;
    }

    async saveToRealtimeDB(product: any) {
      try {
        const productId = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
        const productData = {
          ...product,
          id: productId,
          images: product.images.map((i: any) => i.uri || i), // store only strings
          createdAt: Date.now()
        };
        await set(ref(db, `products/${productId}`), productData);
        console.log('✅ Saved product:', productId);
      } catch (err) {
        console.warn('Firebase DB error:', err);
      }
    }

    async handleSubmit() {
      const loading = await this.loadingCtrl.create({ message: this.translate.instant('posting') });
      await loading.present();

      try {
        for (let i = 0; i < this.products.length; i++) {
          const prod = this.products.at(i).value;
          await this.saveToRealtimeDB(prod);
        }
        const alert = await this.alertCtrl.create({
          header: this.translate.instant('success'),
          message: this.translate.instant('product_posted_success'),
          buttons: ['OK']
        });
        await alert.present();
        this.navCtrl.navigateRoot('/home');
      } catch (err:any) {
        const alert = await this.alertCtrl.create({
          header: this.translate.instant('error'),
          message: err.message || this.translate.instant('server_error'),
          buttons: ['OK']
        });
        await alert.present();
      } finally {
        await loading.dismiss();
      }
    }

    goBack(){
      this.navCtrl.navigateRoot('/main');
    }
  }

