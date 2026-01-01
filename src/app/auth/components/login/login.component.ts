import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { APP_ROUTES } from 'src/app/shared/utils/app-routes';
import { RAuthService } from 'src/app/services/r-auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { ToastType } from 'src/app/shared/enums/common.enum';
import { StorageService } from 'src/app/services/storage.service';
import { constants } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  isLoading: boolean = false;

  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder,
    private authService: RAuthService,
    private toastService: ToastService,
    private storageService: StorageService
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

  creatAccount() {
    this.navCtrl.navigateForward(['auth/signup']);
  }
  callDetailUserApi() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.authService.loginWithEmail(email, password)
      .then(async res => {
        this.isLoading = false;
        this.toastService.showToast('Login successful...', ToastType.SUCCESS);
        console.log('Firebase login success:', res);

        // Get the idToken
        const idToken = await res.user?.getIdToken();

        // Save user data + token to local storage
        const userData = {
          uid: res.user?.uid,
          email: res.user?.email,
          displayName: res.user?.displayName,
          photoURL: res.user?.photoURL,
          emailVerified: res.user?.emailVerified,
          loginTime: new Date().toISOString(),
          idToken: idToken // ✅ Save the token
        };

        this.storageService.setItem('userData', userData);
        this.storageService.setItem('isLoggedIn', true);
        this.storageService.setItem(constants.Started, true);

        // Navigate to main page
        this.navCtrl.navigateRoot([APP_ROUTES.MAIN]);
      })
      .catch(err => {
        this.isLoading = false;
        console.error('Firebase login error:', err);
        this.toastService.showToast('Login error', ToastType.ERROR);
        alert(err.message || 'Login failed. Please try again.');
      });
  }

}
