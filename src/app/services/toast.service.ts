import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ToastType, ToastPosition } from '../shared/enums/common.enum';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) {}

  async showToast(
    message: string,
    type: ToastType = ToastType.SUCCESS,
    position: ToastPosition = ToastPosition.BOTTOM,
    duration: number = 2000
  ) {
    const toast = await this.toastController.create({
      message,
      color: type,
      position,
      duration,
      icon: this.getIcon(type),
      cssClass: 'custom-toast'
    });
    toast.present();
  }

  private getIcon(type: ToastType): string | undefined {
    switch (type) {
      case ToastType.SUCCESS:
        return 'checkmark-circle-outline';
      case ToastType.WARNING:
        return 'alert-circle-outline';
      case ToastType.ERROR:
        return 'close-circle-outline';
      default:
        return undefined;
    }
  }
    //   this.toastService.showToast('Operation Successful', ToastType.SUCCESS, ToastPosition.TOP);

}
