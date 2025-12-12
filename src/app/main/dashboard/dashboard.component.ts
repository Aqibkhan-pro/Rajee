import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, PopoverController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/services/auth.service';
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
    private router: Router,
    private navCtrl : NavController,
    private authService : AuthService,
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
  this.router.navigate([APP_ROUTES.MAIN+'/'+path]);
}

count = 1
async changeTheme() {
  // if (await this.mediaPermissionService.scannerPermission()) {
  //   this.navCtrl.navigateForward(['main/scan']);
  // }
  // else {
  //   console.log('Camera permission is required to access the scanner.');
  // }
  this.count++;
  if (this.count == 1) {
    this.authService.changeTheme('theme-blue')
  }
  else if (this.count == 2) {
    this.authService.changeTheme('theme-dark')
  } else if(this.count ==3){
    this.authService.changeTheme('theme-darkblue')
  }
  else {
    this.authService.changeTheme('theme-light')
    this.count = 0
  }
}

}
