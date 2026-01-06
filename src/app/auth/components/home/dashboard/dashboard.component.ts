import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Product } from 'src/app/shared/common.interface';



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

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController) { }

  ngOnInit() {

    this.loadItems();
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) {
      this.selectedLanguage = savedLang;
    }
  }


  items: Product[] = [];

  async loadItems() {

    const products = await this.fetchProducts();
    console.log("Products:--",products);


      // Assign to items array and map 'title' -> 'name' for template
      this.items = products.map(p => ({
        ...p,
        isFavorite: false,
        time: p.createdAt || Date.now()
      }));

  }

  async fetchProducts(): Promise<any[]> {
    try {
      // Get your user token from localStorage
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      const idToken = userData?.idToken;
      if (!idToken) throw new Error('User token not found');

      const url = `${this.FIREBASE_DB_URL}/products.json?auth=${idToken}`;

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

    } catch (err : any) {
      console.error('Fetch products error:', err);
      this.showToast(err.message || 'Error fetching products', 'danger');
      return [];
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



  async addToCart(item: any) {
    const toast = await this.toastController.create({
      message: `${item.name} added to cart!`,
      duration: 2000,
      position: 'bottom',
      color: 'success',
      icon: 'checkmark-circle-outline'
    });
    toast.present();

    // Add your cart logic here
    console.log('Added to cart:', item);
  }

  async toggleFavorite(item: any) {
    item.isFavorite = !item.isFavorite;

    const toast = await this.toastController.create({
      message: item.isFavorite
        ? `${item.name} added to favorites!`
        : `${item.name} removed from favorites`,
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

  onCardClick(product : Product){
    const navigationExtras: NavigationExtras = {
      state: {
        product: product
      }
    };

    this.navCtrl.navigateForward(['/product-details'], navigationExtras);
  }
}
