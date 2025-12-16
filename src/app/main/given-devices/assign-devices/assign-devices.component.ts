import { Component, OnInit } from '@angular/core';
import { Segment } from 'src/app/shared/enums/common.enum';

@Component({
  selector: 'app-assign-devices',
  templateUrl: './assign-devices.component.html',
  styleUrls: ['./assign-devices.component.scss'],
  standalone: false,
})
export class AssignDevicesComponent implements OnInit {


  partsList = [
    { name: 'Display (LCD / OLED)', detail: 'Touch screen display' },
    { name: 'Touch Panel (Digitizer)', detail: 'Detects touch input' },
    { name: 'Battery', detail: 'Power storage unit' },
    { name: 'Charging Port', detail: 'Charging and data' },
    { name: 'Motherboard', detail: 'Main control board' },
    { name: 'Front Camera', detail: 'Selfie camera' },
    { name: 'Rear Camera', detail: 'Main camera' },
    { name: 'Loud Speaker', detail: 'Audio output speaker' },
    { name: 'Earpiece Speaker', detail: 'Call audio speaker' }
  ];

  segmentEnum = Segment;
  selectedSegment: string = Segment.DEVICES;
  constructor() { }

  ngOnInit() { }

  onSearchValue(value: string) {
    console.log('Search value:', value);
  }


  filterData(event: any) {
    this.selectedSegment = event;
  }

}
