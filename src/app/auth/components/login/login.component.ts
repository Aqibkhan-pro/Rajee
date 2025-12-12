import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreownDeviceService } from './../../../services/preown-device.service';
import { Application_Type } from 'src/graphql/generated';
import { constants } from 'src/app/shared/utils/constants';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NavController } from '@ionic/angular';
import { APP_ROUTES } from 'src/app/shared/utils/app-routes';
import { MediaPermissionService } from 'src/app/services/media-permission.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder,
    private authService: AuthService,
    private preownDeviceService: PreownDeviceService,
    private mediaPermissionService: MediaPermissionService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });





  }

  get email() {
    return this.loginForm.get('email') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  forgetPassword() {
    this.navCtrl.navigateForward(['auth/forget-password']);
  }

  isLoading: boolean = false;
  callDetailUserApi() {
    this.navCtrl.navigateForward([APP_ROUTES.MAIN]);
    return;
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true; // start loader
    const emaildata = { email: this.loginForm.value.email };
    this.preownDeviceService.getEmployeeByEmailApi(emaildata).subscribe(
      res => {
        console.log('Response Verify User:--', res);
        this.logInUserApi();
      },
      (error: any) => {
        console.log('Error Verify User:--', error);
        this.isLoading = false; // stop loader on error
      }
    );
  }

  logInUserApi() {
    const data = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      deviceToken: '',
      deviceId: null,
      lat: 0.0,
      long: 0.0,
      appType: Application_Type.UserApp,
    };

    this.preownDeviceService.loginWithEmailApi(data).subscribe(
      (res: any) => {
        this.isLoading = false; // stop loader
        if (!res?.data?.loginWithEmail) {
          return;
        }
        const response = res?.data?.loginWithEmail;
        console.log('Login Verify User:--', response);
        this.authService.setToken(response?.tokens?.access?.token);
        localStorage.setItem(constants.RefreshToken, response?.tokens?.refresh?.token);
        this.navCtrl.navigateForward([APP_ROUTES.MAIN]);
      },
      (err: any) => {
        console.log('Error Verify User:--', err);
        this.isLoading = false; // stop loader on error
      }
    );
  }

  count = 1
  async scan() {
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

  selectedColor = '#3880ff';

  onColorChange(event: any) {
    console.log('Selected color:', event.target.value);
    document.body.style.setProperty('--primary-color', event.target.value);
  }
}
