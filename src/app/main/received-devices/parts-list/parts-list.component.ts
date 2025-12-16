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
      title: 'Pre owned devices - iphone 7 gsm unlocked red grade B',
      description: 'Grade B',
      status: 'completed',
      time: '2 hrs ago'
    },
    {
      imei: '343434788348343XXX',
      title: 'Pre owned devices - iphone 8 gsm unlocked red grade B',
      description: 'Grade B',
      status: 'pending',
      time: '4 hrs ago'
    },
    {
      imei: '343434788348343XXX',
      title: 'Pre owned devices - iphone 9 gsm unlocked red grade B',
      description: 'Grade B',
      status: 'completed',
      time: '1 day ago'
    },
    {
      imei: '343434788348343XXX',
      title: 'Pre owned devices - iphone XS MAX gsm unlocked red grade B',
      description: 'Grade B',
      status: 'completed',
      time: '2 days ago'
    },
    {
      imei: '343434788348343XXX',
      title: 'Pre owned devices - iphone 11 Promax gsm unlocked red grade B',
      description: 'Grade B',
      status: 'pending',
      time: '4 hrs ago'
    },
     {
      imei: '343434788348343XXX',
      title: 'Pre owned devices - iphone 12 Pro unlocked red grade B',
      description: 'Grade B',
      status: 'completed',
      time: '2 days ago'
    },
    {
      imei: '343434788348343XXX',
      title: 'Pre owned devices - iphone 13 Mini gsm unlocked red grade B',
      description: 'Grade B',
      status: 'returned',
      time: '4 hrs ago'
    },
    {
      imei: '343434788348343XXX',
      title: 'Pre owned devices - iphone 14 Promax gsm unlocked red grade B',
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
