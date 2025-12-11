import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { APP_ROUTES } from 'src/app/shared/utils/app-routes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: false
})
export class DashboardComponent implements OnInit {
  routes = APP_ROUTES
  constructor(
    private navCtrl : NavController,
    private popOverCtrl : PopoverController) { }

  ngOnInit() {
  }

  logout(){
    if(this.popOverCtrl){
    this.popOverCtrl.dismiss();
    }
    localStorage.clear();
    this.navCtrl.navigateBack('auth/login');
  }
  goTo(path: string) {
  this.navCtrl.navigateForward([APP_ROUTES.MAIN+'/'+path]);
}
}
