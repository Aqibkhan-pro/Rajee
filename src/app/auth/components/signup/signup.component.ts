import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';

// ✅ Custom OTP validator
function otpRequiredLength(length: number) {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value || value.toString().length !== length) {
      return { otpLength: true };
    }
    return null;
  };
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: false
})
export class SignupComponent implements OnInit, OnDestroy {

  // Signup form
  signupForm!: FormGroup;
  submitted = false;

  // OTP form
  otpForm!: FormGroup;
  otpFormSubmitted = false;

  isLoading = false;
  otpSent = false;

  // Countdown for resend
  countdown: number = 60;
  canResend: boolean = false;
  private countdownInterval: any;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    // Signup form
    this.signupForm = this.fb.group(
      {
        fullName: ['Happy khan', Validators.required],
        phone: ['+966920004414', Validators.required],
        email: ['aqib11khan22@gmail.com', [Validators.required, Validators.email]],
        password: ['123456', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['123456', Validators.required]
      },
      { validators: this.passwordMatchValidator }
    );

    // OTP form
    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, otpRequiredLength(6)]]
    });
  }

  ngOnDestroy() {
    if (this.countdownInterval) clearInterval(this.countdownInterval);
  }

  // Password match validator
  passwordMatchValidator(group: AbstractControl) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  // Form getters
  get fullName() { return this.signupForm.get('fullName'); }
  get phone() { return this.signupForm.get('phone'); }
  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }
  get confirmPassword() { return this.signupForm.get('confirmPassword'); }
  get otp() { return this.otpForm.get('otp'); }

  // Toast helper
  async showToast(message: string, color: string = 'danger') {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color,
      position: 'bottom'
    });
    toast.present();
  }

  // ✅ Send OTP
  async onSendOtp() {
    this.submitted = true;
    if (this.signupForm.invalid) return;

    this.isLoading = true;
    try {
      const { fullName, phone, email, password } = this.signupForm.value;

      const res = await fetch('https://rajeeac-63le.vercel.app/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: fullName, phone, email, password })
      });

      const result = await res.json();
      if (!result.success) throw new Error(result.message || 'Failed to send OTP');

      this.otpSent = true;
      this.startCountdown();
      this.showToast('OTP sent! Check your email.', 'success');

    } catch (err: any) {
      this.showToast(err.message || 'Failed to send OTP');
    } finally {
      this.isLoading = false;
    }
  }

  // ✅ Verify OTP
  async onVerifyOtp() {
    this.otpFormSubmitted = true;
    this.otpForm.markAllAsTouched();

    if (this.otpForm.invalid) return;

    this.isLoading = true;
    try {
      const res = await fetch('https://rajeeac-63le.vercel.app/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: this.signupForm.value.email,
          otp: String(this.otpForm.value.otp)
        })
      });

      const result = await res.json();
      if (!result.success) throw new Error(result.message || 'OTP verification failed');

      this.showToast('Account created successfully!', 'success');
      this.navCtrl.navigateForward('auth/login');

    } catch (err: any) {
      this.showToast(err.message || 'Invalid OTP');
      this.otpForm.reset();
    } finally {
      this.isLoading = false;
    }
  }

  // ✅ Resend OTP
  async onResendOtp() {
    if (!this.canResend) return;
    this.isLoading = true;
    this.otpForm.reset();

    try {
      const { fullName, phone, email, password } = this.signupForm.value;

      const res = await fetch('https://rajeeac-63le.vercel.app/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: fullName, phone, email, password })
      });

      const result = await res.json();
      if (!result.success) throw new Error(result.message || 'Failed to resend OTP');

      this.showToast('OTP resent successfully!', 'success');
      this.startCountdown();

    } catch (err: any) {
      this.showToast(err.message || 'Failed to resend OTP');
    } finally {
      this.isLoading = false;
    }
  }

  // ✅ Countdown timer for resend
  startCountdown() {
    this.countdown = 60;
    this.canResend = false;

    if (this.countdownInterval) clearInterval(this.countdownInterval);

    this.countdownInterval = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        this.canResend = true;
        clearInterval(this.countdownInterval);
      }
    }, 1000);
  }

  // Back to signup form
  goBack() {
    this.otpSent = false;
    this.submitted = false;
    if (this.countdownInterval) clearInterval(this.countdownInterval);
  }

  goToLogin() {
    this.navCtrl.navigateBack('auth/login');
  }
}
