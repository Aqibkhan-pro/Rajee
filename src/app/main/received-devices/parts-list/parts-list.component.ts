import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parts-list',
  templateUrl: './parts-list.component.html',
  styleUrls: ['./parts-list.component.scss'],
  standalone:false
})
export class PartsListComponent  implements OnInit {
 devices: Device[] = [
    {
      imei: '343434788348343XXX',
      title: 'iPhone 15 Pro Max',
      description: 'Grade B',
      status: 'completed',
      time: '2 hrs ago'
    },
    {
      imei: '343434788348343XXX',
      title: 'iPhone 14 Pro',
      description: 'Grade B',
      status: 'pending',
      time: '4 hrs ago'
    },
    {
      imei: '343434788348343XXX',
      title: 'iPhone 12',
      description: 'Grade B',
      status: 'completed',
      time: '1 day ago'
    },
    {
      imei: '343434788348343XXX',
      title: 'iPhone 11 Pro',
      description: 'Grade B',
      status: 'completed',
      time: '2 days ago'
    },
    {
      imei: '343434788348343XXX',
      title: 'iPhone 7',
      description: 'Grade B',
      status: 'pending',
      time: '4 hrs ago'
    },
     {
      imei: '343434788348343XXX',
      title: 'iPhone 10 XS MAX',
      description: 'Grade B',
      status: 'completed',
      time: '2 days ago'
    },
    {
      imei: '343434788348343XXX',
      title: 'iPhone 8',
      description: 'Grade B',
      status: 'returned',
      time: '4 hrs ago'
    },
    {
      imei: '343434788348343XXX',
      title: 'iPhone 13 mini',
      description: 'Grade B',
      status: 'returned',
      time: '4 hrs ago'
    }
  ];
  constructor() { }

  ngOnInit() {}

}

interface Device {
  imei: string;
  title: string;
  description: string;
  status: 'completed' | 'pending'| 'returned';
  time: string;
}
