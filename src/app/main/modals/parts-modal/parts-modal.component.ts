import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-parts-modal',
  templateUrl: './parts-modal.component.html',
  styleUrls: ['./parts-modal.component.scss'],
  standalone:false
})
export class PartsModalComponent implements OnInit {

  constructor(public modalCtrl : ModalController) { }

  ngOnInit() {
  }

}
