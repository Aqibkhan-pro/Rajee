import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
  standalone: false
})
export class DevicesComponent implements OnInit {
  isModalOpen: boolean = false;
  constructor(private navCtrl : NavController) { }

  ngOnInit() { }

  onDeviceClick(device: any) {
    console.log('Opening device:', device);
    this.isModalOpen = true;
    this.navCtrl.navigateForward('/main/received-devices/devices/details');
  }

  onSearchValue(value: string) {
    console.log('Search value:', value);
  }

  selectedSegment: string = 'Devices';
  filterData(segment: string) {
    this.selectedSegment = segment;
    console.log('Segment changed:', segment);
  }

  onHeaderMenuClick() {
    console.log('Header right icon clicked');
  }

  onWillDismiss(event: any) {
    this.isModalOpen = false;
  }
}

