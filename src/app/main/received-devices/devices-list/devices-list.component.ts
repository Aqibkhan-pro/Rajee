import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared-module';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss'],
  standalone:false
})
export class DevicesListComponent  implements OnInit {

  devices: Device[] = [
    {
      imei: '343434788348343XXX',
      title: 'Pre owned devices - iphone 7 gsm unlocked red grade B',
      description: 'Pre owned devices - iphone 7 gsm unlocked red grade B',
      status: 'completed',
      time: '2 hrs ago'
    },
    {
      imei: '343434788348343XXX',
      title: 'Pre owned devices - iphone 7 gsm unlocked red grade B',
      description: 'Pre owned devices - iphone 7 gsm unlocked red grade B',
      status: 'pending',
      time: '4 hrs ago'
    },
    {
      imei: '343434788348343XXX',
      title: 'Pre owned devices - iphone 7 gsm unlocked red grade B',
      description: 'Pre owned devices - iphone 7 gsm unlocked red grade B',
      status: 'completed',
      time: '1 day ago'
    },
    {
      imei: '343434788348343XXX',
      title: 'Pre owned devices - iphone 7 gsm unlocked red grade B',
      description: 'Pre owned devices - iphone 7 gsm unlocked red grade B',
      status: 'completed',
      time: '2 days ago'
    },
    {
      imei: '343434788348343XXX',
      title: 'Pre owned devices - iphone 7 gsm unlocked red grade B',
      description: 'Pre owned devices - iphone 7 gsm unlocked red grade B',
      status: 'pending',
      time: '4 hrs ago'
    },
     {
      imei: '343434788348343XXX',
      title: 'Pre owned devices - iphone 7 gsm unlocked red grade B',
      description: 'Pre owned devices - iphone 7 gsm unlocked red grade B',
      status: 'completed',
      time: '2 days ago'
    },
    {
      imei: '343434788348343XXX',
      title: 'Pre owned devices - iphone 7 gsm unlocked red grade B',
      description: 'Pre owned devices - iphone 7 gsm unlocked red grade B',
      status: 'pending',
      time: '4 hrs ago'
    }
  ];

  constructor() { }

  ngOnInit() {}

  openDevice(device: Device) {
    console.log('Opening device:', device);
  }
  
  onSearchValue(value: string) {
  console.log('Search value:', value);
  }

   getStatusIcon(status: string): string {
    return status === 'completed' ? 'checkmark-circle-outline' : 'time-outline';
  }

  getStatusClass(status: string): string {
    return status === 'completed' ? 'status-text completed' : 'status-text pending';
  }
}

interface Device {
  imei: string;
  title: string;
  description: string;
  status: 'completed' | 'pending';
  time: string;
}

