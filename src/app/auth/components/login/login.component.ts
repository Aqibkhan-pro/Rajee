import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreownDeviceService } from './../../../services/preown-device.service';
import { Application_Type } from 'src/graphql/generated';
import { constants } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private preownDeviceService: PreownDeviceService
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


}
