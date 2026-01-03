import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { RAuthService } from 'src/app/services/r-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  selectedLanguage: string = 'en';
  userName: string = 'John Doe';
  userRole: string = 'Administrator';

  constructor(
    private menuCtrl: MenuController,
    private toastController: ToastController,
    private authService: RAuthService,
    private navCtrl : NavController,private translate: TranslateService) { }

  ngOnInit() {


    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) {
      this.selectedLanguage = savedLang;
    }

  }


  onLanguageChange(language: string) {
    this.selectedLanguage = language;
    this.switchLanguage(language);
    console.log('Language changed to:', language);
  }

  onMenuItemClick(item: string) {
    console.log('Menu item clicked:', item);
    this.menuCtrl.close('homeMenu');

    switch(item) {
      case 'profile':
        break;
      case 'settings':
        break;
      case 'about':
        break;
      case 'help':
        break;
      case 'logout':
        this.authService.logout();
        this.navCtrl.navigateRoot('auth/login');
        break;
    }
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
    this.navCtrl.navigateForward(['/add-product']);
  }

    // Function to switch language
    switchLanguage(lang: string) {
      this.translate.use(lang);
      localStorage.setItem('lang', lang); // save selected language
    }
}
