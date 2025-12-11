import { Injectable } from '@angular/core';
import { constants } from 'src/app/shared/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken(): string | null {
    return localStorage.getItem(constants.Token);
  }

  setToken(token: string) {
    localStorage.setItem(constants.Token, token);
  }

  clearToken() {
    localStorage.removeItem(constants.Token);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  changeTheme(theme: string) {
    const body = document.body;

    body.classList.remove('theme-blue', 'theme-dark', 'theme-green','theme-light','theme-darkblue');
    body.classList.add(theme);

    localStorage.setItem(constants.Theme, theme);
  }
}
