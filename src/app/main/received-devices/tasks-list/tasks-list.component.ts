import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APP_ROUTES } from 'src/app/shared/utils/app-routes';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  standalone:false
})
export class TasksListComponent  implements OnInit {
  users = [
  { date: getRandomDate(new Date(2023, 0, 1), new Date()), avatar: 'https://i.pravatar.cc/150?img=5', status: 'completed', total: 12, done: 8, return: 2, progress: 67 },
  { date: getRandomDate(new Date(2023, 0, 1), new Date()), avatar: 'https://i.pravatar.cc/150?img=6', status: 'completed', total: 10, done: 5, return: 1, progress: 50 },
  { date: getRandomDate(new Date(2023, 0, 1), new Date()), avatar: 'https://i.pravatar.cc/150?img=7', status: 'pending', total: 15, done: 10, return: 5, progress: 75 },
  { date: getRandomDate(new Date(2023, 0, 1), new Date()), avatar: 'https://i.pravatar.cc/150?img=8', status: 'pending', total: 25, done: 10, return: 2, progress: 0 },
  { date: getRandomDate(new Date(2023, 0, 1), new Date()), avatar: 'https://i.pravatar.cc/150?img=14', status: 'completed', total: 25, done: 10, return: 2, progress: 40 },
  { date: getRandomDate(new Date(2023, 0, 1), new Date()), avatar: 'https://i.pravatar.cc/150?img=15', status: 'pending', total: 25, done: 10, return: 2, progress: 15 },
  { date: getRandomDate(new Date(2023, 0, 1), new Date()), avatar: 'https://i.pravatar.cc/150?img=11', status: 'pending', total: 25, done: 10, return: 2, progress: 5 },
  { date: getRandomDate(new Date(2023, 0, 1), new Date()), avatar: 'https://i.pravatar.cc/150?img=12', status: 'completed', total: 30, done: 20, return: 2, progress: 10 },
  { date: getRandomDate(new Date(2023, 0, 1), new Date()), avatar: 'https://i.pravatar.cc/150?img=13', status: 'completed', total: 55, done: 20, return: 2, progress: 20 },
  { date: getRandomDate(new Date(2023, 0, 1), new Date()), avatar: 'https://i.pravatar.cc/150?img=17', status: 'completed', total: 25, done: 20, return: 2, progress: 1 },
];


  constructor(private router: Router,
     private route: ActivatedRoute) { }

  ngOnInit() {}

  goTo(path: string) {
  }



  openDevicesDetails() {
  this.router.navigate(['../'+ APP_ROUTES.DEVICES ], { relativeTo: this.route });
}

  onSearchValue(value: string) {
    console.log('Search value:', value);
  }

  onHeaderMenuClick() {
    console.log('Header right icon clicked');
  }

  analyticsReport:boolean=false
  analyticsReports(){
    this.analyticsReport = !this.analyticsReport;
    console.log('analyticsReports icon clicked');
  }

  
}
function getRandomDate(start: Date, end: Date): string {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split('T')[0]; // format YYYY-MM-DD
}