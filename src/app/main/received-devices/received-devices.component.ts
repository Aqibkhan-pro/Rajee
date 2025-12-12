import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/shared/utils/app-routes';

@Component({
  selector: 'app-received-devices',
  templateUrl: './received-devices.component.html',
  styleUrls: ['./received-devices.component.scss'],
  standalone:false
})
export class ReceivedDevicesComponent  implements OnInit {

   users = [
    { name: 'Evander Whitman', avatar: 'https://i.pravatar.cc/150?img=5', online: true, total: 12, done: 8, return: 2, progress: 67 },
    { name: 'Elowen Hartley', avatar: 'https://i.pravatar.cc/150?img=6', online: false, total: 10, done: 5, return: 1, progress: 50 },
    { name: 'Juniper Ashford', avatar: 'https://i.pravatar.cc/150?img=7', online: true, total: 15, done: 10, return: 5, progress: 75 },
    { name: 'Millie Valdez', avatar: 'https://i.pravatar.cc/150?img=8', online: true, total: 25, done: 10, return: 2, progress: 0 },
    { name: 'Anees Ahmad', avatar: 'https://i.pravatar.cc/150?img=14', online: true, total: 25, done: 10, return: 2, progress: 40 },
    { name: 'Aqib Khan', avatar: 'https://i.pravatar.cc/150?img=15', online: true, total: 25, done: 10, return: 2, progress: 15 },
    { name: 'Muhammad Arslan', avatar: 'https://i.pravatar.cc/150?img=11', online: true, total: 25, done: 10, return: 2, progress: 5 },
    { name: 'Irfan Hashmi', avatar: 'https://i.pravatar.cc/150?img=12', online: false, total: 30, done: 20, return: 2, progress: 10 },
    { name: 'Hammad Hashmi', avatar: 'https://i.pravatar.cc/150?img=13', online: false, total: 55, done: 20, return: 2, progress: 20 },
    { name: 'Sajjad Hashmi', avatar: 'https://i.pravatar.cc/150?img=17', online: true, total: 25, done: 20, return: 2, progress: 1 },
  ];


  constructor(private router: Router,
     private route: ActivatedRoute) { }

  ngOnInit() {}

  goTo(path: string) {
  }

  openDevicesDetails(){
  this.router.navigate([APP_ROUTES.DEVICES_LIST], { relativeTo: this.route });
  }

}
