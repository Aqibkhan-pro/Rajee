import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss'],
  imports: [IonicModule,CommonModule],

})
export class DevicesListComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
