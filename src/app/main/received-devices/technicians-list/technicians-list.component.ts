import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/shared/utils/app-routes';

@Component({
  selector: 'app-technicians-list',
  templateUrl: './technicians-list.component.html',
  styleUrls: ['./technicians-list.component.scss'],
  standalone:false
})
export class TechniciansListComponent  implements OnInit {
 users = [
    { name: 'Evander Whitman', avatar: 'https://i.pravatar.cc/150?img=5', status: 'completed', total: 12, done: 8, return: 2, progress: 67 },
    { name: 'Elowen Hartley', avatar: 'https://i.pravatar.cc/150?img=6', status: 'completed', total: 10, done: 5, return: 1, progress: 50 },
    { name: 'Juniper Ashford', avatar: 'https://i.pravatar.cc/150?img=7', status: 'pending', total: 15, done: 10, return: 5, progress: 75 },
    { name: 'Millie Valdez', avatar: 'https://i.pravatar.cc/150?img=8', status: 'pending', total: 25, done: 10, return: 2, progress: 0 },
    { name: 'Anees Ahmad', avatar: 'https://i.pravatar.cc/150?img=14', status: 'completed', total: 25, done: 10, return: 2, progress: 40 },
    { name: 'Aqib Khan', avatar: 'https://i.pravatar.cc/150?img=15',status: 'pending', total: 25, done: 10, return: 2, progress: 15 },
    { name: 'Muhammad Arslan', avatar: 'https://i.pravatar.cc/150?img=11', status: 'pending', total: 25, done: 10, return: 2, progress: 5 },
    { name: 'Irfan Hashmi', avatar: 'https://i.pravatar.cc/150?img=12', status: 'completed', total: 30, done: 20, return: 2, progress: 10 },
    { name: 'Hammad Hashmi', avatar: 'https://i.pravatar.cc/150?img=13', status: 'completed', total: 55, done: 20, return: 2, progress: 20 },
    { name: 'Sajjad Hashmi', avatar: 'https://i.pravatar.cc/150?img=17', status: 'completed', total: 25, done: 20, return: 2, progress: 1 },
  ];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {}

 openDevicesDetails() {
  this.router.navigate([APP_ROUTES.TASKS_LIST], {
    relativeTo: this.route
  });
}

  getStatusClass(status: string): string {
  return `chip-${status}`;
}

getStatusIcon(status: string): string {
  switch (status) {
    case 'completed':
      return 'checkmark-circle-outline';
    case 'pending':
      return 'time-outline';

    default:
      return 'help-circle-outline';
  }
}


}
