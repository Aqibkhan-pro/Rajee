import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreownDeviceService } from './../../../services/preown-device.service';
import { Application_Type } from 'src/graphql/generated';
import { constants } from 'src/app/shared/utils/constants';
import { MediaPermissionService } from 'src/app/services/media-permission.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private preownDeviceService: PreownDeviceService,
    private mediaPermissionService: MediaPermissionService,
  ) { }

  ngOnInit() { }

  forgetPassword() {
    this.router.navigate(['auth/forget-password']);
  }

  home() {
    this.callDetailUserApi();
    // this.router.navigate([ROUTES.MAIN]);
  }

  callDetailUserApi() {
    const emaildata = { email: 'aqib@4iisolutions.com' };
    this.preownDeviceService.getEmployeeByEmailApi(emaildata).subscribe(
      res => {
        console.log('Response Verify User:--', res);
        this.logInUserApi();
      },
      (error: any) => {
        console.log('Error Verify User:--', error);
      }
    );
  }

  logInUserApi() {
    let data = {
      email: "aqib@4iisolutions.com",
      password: "Test@123",
      deviceToken: '',
      deviceId: null,
      lat: 0.0,
      long: 0.0,
      appType: Application_Type.UserApp,
    };

    this.preownDeviceService.loginWithEmailApi(data).subscribe(
      async (res: any) => {
        let response = res?.data?.loginWithEmail
        console.log('Login Verify User:--', res);
        localStorage.setItem(constants.Token, response?.tokens?.access?.token);
        localStorage.setItem(constants.RefreshToken, response?.tokens?.refresh?.token);
      },
      (err: any) => {
        console.log('Error Verify User:--', err);
      }
    );
  }

  count = 1
  async scan() {
    // if (await this.mediaPermissionService.scannerPermission()) {
    //   this.router.navigate(['main/scan']);
    // }
    // else {
    //   console.log('Camera permission is required to access the scanner.');
    // }
    this.count++;
    if (this.count == 1) {
      this.changeTheme('theme-blue')
    }
    else if (this.count == 2) {
      this.changeTheme('theme-dark')
    }
    else {
      this.changeTheme('theme-green')
      this.count = 0
    }


  }

  selectedColor = '#3880ff';

  onColorChange(event: any) {
    console.log('Selected color:', event.target.value);
    document.body.style.setProperty('--primary-color', event.target.value);
  }

  changeTheme(theme: 'theme-blue' | 'theme-dark' | 'theme-green') {
    const body = document.body;

    body.classList.remove('theme-blue', 'theme-dark', 'theme-green');
    body.classList.add(theme);
  }


}
