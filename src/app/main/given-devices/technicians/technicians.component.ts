import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/shared/utils/app-routes';

@Component({
  selector: 'app-technicians',
  templateUrl: './technicians.component.html',
  styleUrls: ['./technicians.component.scss'],
  standalone: false
})
export class TechniciansComponent implements OnInit {


  users = [
    { name: 'Evander Whitman', avatar: 'https://i.pravatar.cc/150?img=5', time: '09:00 am', assign: false },
    { name: 'Elowen Hartley', avatar: 'https://i.pravatar.cc/150?img=6', time: '-50 min', assign: false },
    { name: 'Juniper Ashford', avatar: 'https://i.pravatar.cc/150?img=7', time: '09:00 am', assign: true },
    { name: 'Millie Valdez', avatar: 'https://i.pravatar.cc/150?img=8', time: '-30 min', assign: false },
    { name: 'Anees Ahmad', avatar: 'https://i.pravatar.cc/150?img=14', time: '-20 min', assign: false },
    { name: 'Aqib Khan', avatar: 'https://i.pravatar.cc/150?img=15', time: '09:00 am', assign: false },
    { name: 'Muhammad Arslan', avatar: 'https://i.pravatar.cc/150?img=11', time: '-10 min', assign: false },
    { name: 'Irfan Hashmi', avatar: 'https://i.pravatar.cc/150?img=12', time: '09:00 am', assign: true },
    { name: 'Hammad Hashmi', avatar: 'https://i.pravatar.cc/150?img=13', time: '-05 min', assign: false },
    { name: 'Sajjad Hashmi', avatar: 'https://i.pravatar.cc/150?img=17', time: '09:00 am', assign: true },
  ];

  constructor(private router: Router) { }

  ngOnInit() { }

  assigningListDetail(user: any) {
    this.router.navigate([APP_ROUTES.MAIN + '/' + APP_ROUTES.GIVEN_DEVICES + '/' + APP_ROUTES.ASSIGN_DEVICES]);
  }

  onHeaderMenuClick() {
    console.log('Header right icon clicked');
  }

  onSearchValue(event: any) {

  }


}
