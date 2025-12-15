import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController, PopoverController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Segment } from 'src/app/shared/enums/common.enum';
import { APP_ROUTES } from 'src/app/shared/utils/app-routes';
import { TimeInProgressComponent } from '../modals/time-in-progress/time-in-progress.component';

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
    '../../../assets/image/slide.jpg',
    '../../../assets/image/slide-two.jpg',
    '../../../assets/image/slide-three.jpg',
    '../../../assets/image/slide-four.jpg'
  ];
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private authService: AuthService,
    private modalCtrl: ModalController,
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

  greeting = 'Good Morning';
  ionViewWillEnter() {
    const hour = new Date().getHours();
    this.greeting =
      hour > 4 && hour < 12 ? 'Good Morning' :
      hour > 12 && hour < 17 ? 'Good Afternoon' :
      hour > 17 && hour < 21 ? 'Good Evening' :
      'Good Night';
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: TimeInProgressComponent,
      backdropDismiss: true,
      breakpoints: [0, 0.6, 1],
      initialBreakpoint: 0.6
    });

    await modal.present();
  }


}
