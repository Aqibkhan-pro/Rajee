import { Injectable } from '@angular/core';
import { getAuth } from 'firebase/auth';
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

    body.classList.remove('theme-blue', 'theme-dark','theme-light','theme-darkblue','theme-default');
    if(theme){
       body.classList.add(theme);
    }

    localStorage.setItem(constants.Theme, theme);
  }

    // 🔹 NEW: Refresh Firebase token
    async refreshToken(): Promise<string> {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) throw new Error('User not logged in');
      const idToken = await user.getIdToken(true); // force refresh
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      userData.idToken = idToken;
      localStorage.setItem('userData', JSON.stringify(userData));
      return idToken;
    }
}
