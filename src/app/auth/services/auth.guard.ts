import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { AuthModalComponent } from '../components/auth/auth-modal/auth-modal.component';
import { ModalController } from '@ionic/angular';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private storageService: StorageService,
    private router: Router,
    private modalCtrl : ModalController,
    private commonService : CommonService
  ) {}

  canActivate(): boolean {
    const isLoggedIn = this.storageService.getItem('isLoggedIn');

    if (isLoggedIn) {
      return true;
    } else {
      this.openLoginModal();
      return false;
    }
  }

  async openLoginModal() {
    const modal = await this.modalCtrl.create({
      component: AuthModalComponent,
      cssClass: 'login-bottom-sheet-modal',
      breakpoints: [0, 0.6, 1],
      initialBreakpoint: 0.6,
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
}
