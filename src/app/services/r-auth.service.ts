import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class RAuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private storageService: StorageService) { }

  // Firebase email/password login
  loginWithEmail(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Optional: logout
  logout() {
    this.storageService.removeItem('userData');
    this.storageService.removeItem('isLoggedIn');
    this.storageService.removeItem('userEmail');
    return this.afAuth.signOut();
  }

  // Optional: register
  register(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

async getIdToken() {
  const user = await this.afAuth.currentUser;
  if (user) {
    const idToken = await user.getIdToken(); // ✅ this is what Firebase needs
    return idToken;
  }
  return null;
}

}
