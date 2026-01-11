import { AuthService } from './auth/services/auth.service';
import { Component } from '@angular/core';
import { constants } from './shared/utils/constants';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false
})
export class AppComponent {

  constructor(
    private authService: AuthService,
    private translate: TranslateService
  ) {

    /* THEME */
    const theme = localStorage.getItem(constants.Theme) || '';
    if (theme) {
      this.authService.changeTheme(theme);
    }

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

  private setLanguage(lang: string) {
    this.translate.use(lang);

    document.documentElement.lang = lang;

    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }
}
