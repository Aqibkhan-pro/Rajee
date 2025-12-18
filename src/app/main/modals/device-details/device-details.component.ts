import { PriorityEmums } from './../../../../graphql/generated';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { IonHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss'],
  standalone: false
})
export class DeviceDetailsComponent implements OnInit {

  constructor(
    private navCtrl : NavController,
    public modalCtrl : ModalController) { }

  ngOnInit() { }

  getStatusClass(status: string): string {
    return `chip-${status}`;
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'completed':
        return 'checkmark-circle-outline';
      case 'pending':
        return 'time-outline';

      default:
        return 'help-circle-outline';
    }
  }

  routeToProgress(device:any){
    this.navCtrl.navigateForward('/main/received-devices/devices/details/time-progress');
  }
}
