import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss'],
  standalone: false
})
export class DeviceDetailsComponent implements OnInit {

  constructor(public modalCtrl : ModalController) { }

  ngOnInit() { }

}
