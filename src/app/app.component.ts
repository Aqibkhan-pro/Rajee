import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from './auth/services/auth.service';
import { constants } from './shared/utils/constants';

import { initializeApp, getApps } from 'firebase/app';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false
})
export class AppComponent {

  constructor(
    private authService: AuthService,
    private translate: TranslateService,
    private toastCtrl: ToastController
  ) {
    this.initThemeAndLanguage();
    this.initializeApp();
  }

  /**
   * Initialize theme and language on app start
   */
  private initThemeAndLanguage() {
    /* THEME */
    const theme = localStorage.getItem(constants.Theme) || '';
    if (theme) this.authService.changeTheme(theme);

    /* LANGUAGE */
    let lang = localStorage.getItem('lang');
    if (!lang) {
      lang = 'ar';
      localStorage.setItem('lang', lang);
    }
    this.setLanguage(lang);

    /* LISTEN FOR LANGUAGE CHANGE */
    this.translate.onLangChange.subscribe(event => {
      this.setLanguage(event.lang);
    });
  }

  /**
   * Apply selected language globally
   */
  private setLanguage(lang: string) {
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  /**
   * Initialize Firebase and listen for auth state changes
   */
  private async initializeApp() {
    try {
      // Initialize Firebase if not already initialized
      if (!getApps().length) {
        initializeApp(environment.firebase);
        console.log('✅ Firebase initialized');
      }

      const auth = getAuth();

      // Listen for auth state changes
      onAuthStateChanged(auth, async (user: User | null) => {
        if (user) {
          try {
            // Refresh token
            const idToken = await user.getIdToken(true);

            const userData = JSON.parse(localStorage.getItem('userData') || '{}');
            userData.idToken = idToken;
            userData.uid = user.uid;
            userData.email = user.email;
            userData.name = user.displayName || '';
            userData.photoURL = user.photoURL || '';
            localStorage.setItem('userData', JSON.stringify(userData));

            console.log('✅ Token refreshed on app start for user:', user.uid);

          } catch (err) {
            console.error('Error refreshing token on app start:', err);
            const toast = await this.toastCtrl.create({
              message: 'Failed to refresh session, please login again',
              duration: 3000,
              color: 'danger'
            });
            toast.present();
          }
        } else {
          console.log('No user logged in at app start');
        }
      });

    } catch (err) {
      console.error('Firebase initialization failed:', err);
      const toast = await this.toastCtrl.create({
        message: 'Firebase initialization failed',
        duration: 3000,
        color: 'danger'
      });
      toast.present();
    }
  }
}
