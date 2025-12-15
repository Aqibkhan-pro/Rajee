import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
  standalone:false
})
export class DevicesComponent  implements OnInit {
  constructor() { }

  ngOnInit() {}

  openDevice(device: any) {
    console.log('Opening device:', device);
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

}

