import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss'],
  standalone:false
})
export class DevicesListComponent  implements OnInit {
  @Output() onDeviceClicked: EventEmitter<Device> = new EventEmitter<Device>();
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
      status: 'returned',
      time: '4 hrs ago'
    },
    {
      imei: '343434788348343XXX',
      title: 'Pre owned devices - iphone 7 gsm unlocked red grade B',
      description: 'Pre owned devices - iphone 7 gsm unlocked red grade B',
      status: 'returned',
      time: '4 hrs ago'
    }
  ];
  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {}

     getStatusIcon(status: string): string {
    return status === 'completed' ? 'checkmark-circle-outline' : 'time-outline';
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'completed':
        return 'chip-completed';
      case 'returned':
        return 'chip-returned';
      default:
        return 'chip-pending';
    }
  }

  onDeviceClick(device: Device) {
    this.onDeviceClicked.emit(device);
  }
}

interface Device {
  imei: string;
  title: string;
  description: string;
  status: 'completed' | 'pending'| 'returned';
  time: string;
}

