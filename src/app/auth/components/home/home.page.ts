import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { RAuthService } from 'src/app/services/r-auth.service';
import { AuthModalComponent } from '../auth/auth-modal/auth-modal.component';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  selectedLanguage: string = 'en';
  userName: string = 'Loading...';
  userEmail: string = 'Loading...';

  constructor(
    private navCtrl : NavController,
    private menuCtrl: MenuController,
    private authService: RAuthService,
    private modalCtrl: ModalController,
    private translate: TranslateService,
    private commonService : CommonService) { }

  ngOnInit() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (userData) {
      this.userName = userData?.name;
      this.userEmail = userData?.email;

    }

    const savedLang = localStorage.getItem('lang');
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

    this.openLoginModal();
    this.menuCtrl.close('homeMenu');

    switch(item) {
      case 'profile':
        break;
      case 'admin-panel':
        this.navCtrl.navigateForward(['/admin-panel']);
        break;
      case 'settings':
        break;
      case 'about':
        break;
      case 'help':
        break;
      case 'logout':
        this.authService.logout();
        // this.navCtrl.navigateRoot('auth/login');
        break;
    }
  }

  onAddClick() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const uid = userData?.uid;
    const token = userData?.idToken;

    if (!uid || !token) {
      this.openLoginModal();
      console.error('No auth data available');
      return;
    }

    this.navCtrl.navigateForward(['/add-product']);
  }

    switchLanguage(lang: string) {
      this.translate.use(lang);
      localStorage.setItem('lang', lang);
    }

    getDummyColor(name?: string): string {
      const colors = ['#f44336', '#e91e63', '#9c27b0', '#3f51b5', '#03a9f4', '#4caf50', '#ff9800', '#795548'];

      if (!name) return colors[Math.floor(Math.random() * colors.length)];
      let hash = 0;
      for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
      }
      const index = Math.abs(hash) % colors.length;
      return colors[index];
    }

    async openLoginModal() {
      const modal = await this.modalCtrl.create({
        component: AuthModalComponent,
        cssClass: 'login-bottom-sheet-modal',
        breakpoints: [0, 0.8],
        initialBreakpoint: 0.8,
        mode: 'ios',
        backdropDismiss: false,
        presentingElement: await this.modalCtrl.getTop(),
      });

      // Present the modal
      await modal.present();

      // Wait for the modal to be dismissed
      const { data, role } = await modal.onDidDismiss();

      if (role === 'success') {
        this.commonService.notifyLoginSuccess();
      } else if (role === 'warning') {
        // this.navCtrl.navigateForward(['auth/signup']);
      } else if (role === 'close') {
        console.log('Login modal closed');
      }
    }


    selectedTab: string = 'home'; // default selected tab

// Or simpler function if using tab name directly
selectTab(tab: string) {
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');
  const uid = userData?.uid;
  const token = userData?.idToken;

  if (!uid || !token) {
    this.selectedTab = 'home';
    console.error('No auth data available');
    return;
  }

  if (tab.includes('home')) this.selectedTab = 'home';
  else if (tab.includes('favorites')) this.selectedTab = 'favorites';
  else if (tab.includes('chat')) this.selectedTab = 'chat';
  else if (tab.includes('profile')) this.selectedTab = 'profile';
}

}
