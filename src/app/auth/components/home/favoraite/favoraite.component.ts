import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-favoraite',
  templateUrl: './favoraite.component.html',
  styleUrls: ['./favoraite.component.scss'],
  standalone: false
})
export class FavoraiteComponent implements OnInit {


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
    this.items = [
      {
        id: 1,
        name: 'Wireless Headphones',
        description: 'High-quality noise-canceling headphones with 30-hour battery life.',
        price: 99.99,
        image: 'https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg',
        isFavorite: true
      },
      {
        id: 2,
        name: 'Smart Watch',
        description: 'Fitness tracker with heart rate monitor and GPS capabilities.',
        price: 199.99,
        image: 'https://images.pexels.com/photos/3155725/pexels-photo-3155725.jpeg',
        isFavorite: true
      },
      {
        id: 3,
        name: 'Bluetooth Speaker',
        description: 'Portable waterproof speaker with amazing sound quality.',
        price: 49.99,
        image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg',
        isFavorite: true
      },
      {
        id: 4,
        name: 'Laptop Stand',
        description: 'Ergonomic adjustable stand for better posture and comfort.',
        price: 39.99,
        image: 'https://images.pexels.com/photos/7832554/pexels-photo-7832554.jpeg',
        isFavorite: true
      }
    ];
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
