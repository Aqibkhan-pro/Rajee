import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, PopoverController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Segment } from 'src/app/shared/enums/common.enum';
import { APP_ROUTES } from 'src/app/shared/utils/app-routes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: false
})
export class DashboardComponent implements OnInit {
  routes = APP_ROUTES;
  segment: Segment = Segment.REPAIR;
  SegmentEnum = Segment;

  images = [
    'https://images.unsplash.com/photo-1569908420024-c8f709b75700?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1569908420024-c8f709b75700?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1569908420024-c8f709b75700?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private authService: AuthService,
    private popOverCtrl: PopoverController) { }

  ngOnInit() {
  }

  logout() {
    if (this.popOverCtrl) {
      this.popOverCtrl.dismiss();
    }
    localStorage.clear();
    this.navCtrl.navigateBack('auth/login');
  }
  goTo(path: string) {
    this.router.navigate([APP_ROUTES.MAIN + '/' + path]);
  }

  count = 1
  async changeTheme() {
    this.count++;
    if (this.count == 1) {
      this.authService.changeTheme('theme-blue')
    }
    else if (this.count == 2) {
      this.authService.changeTheme('theme-dark')
    } else if (this.count == 3) {
      this.authService.changeTheme('theme-darkblue')
    } else if (this.count == 4) {
      this.authService.changeTheme('theme-default')
    }
    else {
      this.authService.changeTheme('theme-light')
      this.count = 0
    }
  }

  filterData(segment: Segment) {
    this.segment = segment;
  }


}
