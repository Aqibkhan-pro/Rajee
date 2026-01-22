import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

import { RAuthService } from 'src/app/services/r-auth.service';
import { AuthModalComponent } from '../auth/auth-modal/auth-modal.component';
import { CommonService } from '../../services/common.service';

import { UserService } from 'src/app/services/user.service';
import { ThemeService } from 'src/app/services/theme.service';

type User = {
  uid: string;
  name?: string;
  email?: string;
  phone?: string;
  is_admin?: boolean;
  isAdmin?: boolean;
  createdAt?: number;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  selectedLanguage: string = 'en';

  userName: string = 'Guest';
  userEmail: string = '';
  isAdmin: boolean = false;
  isDarkMode: boolean = false;

  selectedTab: string = 'home';

  constructor(
    private navCtrl: NavController,
    private menuCtrl: MenuController,
    private authService: RAuthService,
    private modalCtrl: ModalController,
    private translate: TranslateService,
    private commonService: CommonService,
    private userService: UserService,
    private themeService: ThemeService
  ) {}

  async ngOnInit() {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) this.selectedLanguage = savedLang;

    // Initialize dark mode state
    this.isDarkMode = this.themeService.isDarkMode();

    await this.refreshUserFromUserService();
  }

  // ==
  // Helpers
  // ==
  private getLocalUserData(): any {
    try {
      return JSON.parse(localStorage.getItem('userData') || '{}');
    } catch {
      return {};
    }
  }

  private resetUserState() {
    this.userName = 'Guest';
    this.userEmail = '';
    this.isAdmin = false;
  }

  private setUserFromLocal(userData: any) {
    this.userName = userData?.name || 'Guest';
    this.userEmail = userData?.email || '';
    this.isAdmin = !!userData?.is_admin || !!userData?.isAdmin;
  }

  // ==
  // Language
  // ==
  onLanguageChange(language: string) {
    this.selectedLanguage = language;
    this.switchLanguage(language);
    console.log('Language changed to:', language);
  }

  private switchLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  // ==
  // Dark Mode
  // ==
  onDarkModeToggle(event: any) {
    this.isDarkMode = event.detail.checked;
    this.themeService.setTheme(this.isDarkMode ? 'dark' : 'light');
  }

  // ==
  // Fetch user from UserService
  // ==
  private async refreshUserFromUserService() {
    const local = this.getLocalUserData();
    const uid = local?.uid;

    if (!uid) {
      this.resetUserState();
      return;
    }

    try {
      const user: User | null = await this.userService.getUserById(uid);

      this.isAdmin = !!(user as any)?.is_admin || !!(user as any)?.isAdmin;
      this.userName = user?.name || local?.name || 'User';
      this.userEmail = user?.email || local?.email || '';

      localStorage.setItem(
        'userData',
        JSON.stringify({
          ...local,
          ...user,
          is_admin: this.isAdmin
        })
      );

      console.log('Loaded user from UserService:', user, 'isAdmin:', this.isAdmin);
    } catch (err) {
      console.error('Error fetching user from UserService:', err);
      this.setUserFromLocal(local);
    }
  }

  // ==
  // Menu actions
  // ==
  async onMenuItemClick(item: string) {
    const userData = this.getLocalUserData();
    const uid = userData?.uid;
    const token = userData?.idToken;

    if (!uid || !token) {
      await this.openLoginModal();
      this.menuCtrl.close('homeMenu');
      return;
    }

    this.menuCtrl.close('homeMenu');

    switch (item) {
      case 'profile':
        break;

      case 'admin-panel':
        if (!this.isAdmin) return;
        this.navCtrl.navigateForward(['/admin-panel']);
        break;

      case 'policies':
        this.navCtrl.navigateForward(['/policies']);
        break;

      case 'settings':
        break;

      case 'about':
        break;

      case 'help':
        break;

      case 'logout':
        this.authService.logout();
        localStorage.removeItem('userData');
        this.resetUserState();
        break;
    }
  }

  // ==
  // Add button
  // ==
  async onAddClick() {
    const userData = this.getLocalUserData();
    const uid = userData?.uid;
    const token = userData?.idToken;

    if (!uid || !token) {
      await this.openLoginModal();
      return;
    }

    this.navCtrl.navigateForward(['/add-product']);
  }

  // ==
  // Avatar dummy color
  // ==
  getDummyColor(name?: string): string {
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#3f51b5', '#03a9f4', '#4caf50', '#ff9800', '#795548'];
    if (!name) return colors[Math.floor(Math.random() * colors.length)];

    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  }

  // ==
  // Login Modal
  // ==
  async openLoginModal() {
    const modal = await this.modalCtrl.create({
      component: AuthModalComponent,
      cssClass: 'login-bottom-sheet-modal',
      breakpoints: [0, 0.85],
      initialBreakpoint: 0.85,
      mode: 'ios',
      backdropDismiss: false,
      presentingElement: await this.modalCtrl.getTop(),
    });

    await modal.present();
    const { role } = await modal.onDidDismiss();

    if (role === 'success') {
      await this.refreshUserFromUserService();
      this.commonService.notifyLoginSuccess();
    } else if (role === 'close') {
      console.log('Login modal closed');
    }
  }

  // ==
  // Tabs
  // ==
  selectTab(tab: string) {
    const userData = this.getLocalUserData();
    const uid = userData?.uid;
    const token = userData?.idToken;

    if (!uid || !token) {
      this.selectedTab = 'home';
      return;
    }

    if (tab.includes('home')) this.selectedTab = 'home';
    else if (tab.includes('favorites')) this.selectedTab = 'favorites';
    else if (tab.includes('chat')) this.selectedTab = 'chat';
    else if (tab.includes('profile')) this.selectedTab = 'profile';
  }
}

