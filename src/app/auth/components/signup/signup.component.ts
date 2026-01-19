import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

interface User {
  uid: string;
  name: string;
  email: string;
  phone: string;
  photoURL: string | null;
  createdAt: number;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: false
})
export class SignupComponent implements OnInit {
  selectedLanguage: string = 'ar';
  signupForm!: FormGroup;

  submitted = false;
  isLoading = false;

  // ✅ Firebase Database URL
  FIREBASE_DB_URL = 'https://rajee-198a5-default-rtdb.firebaseio.com';

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private afAuth: AngularFireAuth,
    private ngZone: NgZone,
    private translate: TranslateService,
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group(
      {
        fullName: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      },
      { validators: this.passwordMatchValidator }
    );

    const savedLang = localStorage.getItem('lang');
    if (savedLang) this.selectedLanguage = savedLang;
  }

  /* ================= Validators ================= */
  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  /* ================= Getters ================= */
  get fullName() { return this.signupForm.get('fullName'); }
  get phone() { return this.signupForm.get('phone'); }
  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }
  get confirmPassword() { return this.signupForm.get('confirmPassword'); }

  /* ================= Toast ================= */
  async showToast(message: string, color: string = 'danger') {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color,
      position: 'bottom',
    });
    await toast.present();
  }

  /* ================= DB SAVE (REST + ID token) ================= */
  async saveUserToDatabase(userData: User, idToken: string): Promise<void> {
    const url = `${this.FIREBASE_DB_URL}/users/${userData.uid}.json?auth=${idToken}`;

    const res = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(errText || 'Failed to save user in DB');
    }
  }

  /* ================= SIMPLE SIGNUP ================= */
  async onSignup() {
    this.submitted = true;
    this.signupForm.markAllAsTouched();
    if (this.signupForm.invalid) return;

    this.isLoading = true;

    try {
      const { fullName, phone, email, password } = this.signupForm.value;

      // 1) Create user in Firebase Auth
      const cred = await this.afAuth.createUserWithEmailAndPassword(email, password);
      if (!cred.user) throw new Error('Firebase Auth failed');

      const uid = cred.user.uid;

      // 2) Get token for Realtime DB REST auth
      const idToken = await cred.user.getIdToken();

      // 3) Save profile to Realtime DB
      const userData: User = {
        uid,
        name: fullName,
        email,
        phone,
        photoURL: null,
        createdAt: Date.now()
      };

      await this.saveUserToDatabase(userData, idToken);

      // ✅ OPTIONAL: (recommended) send email verification
      // await cred.user.sendEmailVerification();

      // 4) Navigate
      this.ngZone.run(() => {
        this.showToast('Account created successfully!', 'success');
        // go to login or home
        this.navCtrl.navigateForward('auth/login');
      });

    } catch (err: any) {
      // Friendly firebase errors
      const msg =
        err?.code === 'auth/email-already-in-use' ? 'Email already in use' :
        err?.code === 'auth/invalid-email' ? 'Invalid email' :
        err?.code === 'auth/weak-password' ? 'Weak password (min 6)' :
        (err?.message || 'Signup failed');

      this.showToast(msg);
    } finally {
      this.isLoading = false;
    }
  }

  goToLogin() {
    this.ngZone.run(() => this.navCtrl.navigateBack('auth/login'));
  }
}
