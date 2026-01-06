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
  constructor(private authService: AuthService, private translate : TranslateService) {
    let theme = localStorage.getItem(constants.Theme) || ''
    if (theme != '') {
      this.authService.changeTheme(theme)
    }

    const lang = localStorage.getItem('lang') || 'en';
    this.translate.use(lang);
  }
}
