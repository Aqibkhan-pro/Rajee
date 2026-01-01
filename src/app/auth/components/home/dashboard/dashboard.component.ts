import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';

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

  constructor(
    private toastController: ToastController) { }

  ngOnInit() {

    this.loadItems();
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) {
      this.selectedLanguage = savedLang;
    }
  }


  items: any[] = [];

  loadItems() {
    // Sample data - replace with your API call
    // this.items = [
    //   {
    //     id: 1,
    //     name: 'Wireless Headphones',
    //     description: 'High-quality noise-canceling headphones with 30-hour battery life.',
    //     price: 99.99,
    //     image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     isFavorite: false
    //   },
    //   {
    //     id: 2,
    //     name: 'Smart Watch',
    //     description: 'Fitness tracker with heart rate monitor and GPS capabilities.',
    //     price: 199.99,
    //     image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     isFavorite: false
    //   },
    //   {
    //     id: 3,
    //     name: 'Bluetooth Speaker',
    //     description: 'Portable waterproof speaker with amazing sound quality.',
    //     price: 49.99,
    //     image: 'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     isFavorite: true
    //   },
    //   {
    //     id: 4,
    //     name: 'Laptop Stand',
    //     description: 'Ergonomic adjustable stand for better posture and comfort.',
    //     price: 39.99,
    //     image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     isFavorite: false
    //   }
    // ];
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

    // Save to favorites list or API
    console.log('Favorite toggled:', item);
  }

  onAddClick() {
    console.log('FAB clicked - Navigate to add new item');
    // Navigate to add item page or open modal
  }
}
