import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/auth/services/common.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { ToastType } from 'src/app/shared/enums/common.enum';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: false
})
export class ProfileComponent implements OnInit, OnDestroy {

  profileForm!: FormGroup;
  subScription: Subscription | null = null;

  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    private storageService: StorageService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    // Initialize form
    const userData = this.storageService.getItem('userData') || {};

    this.profileForm = this.fb.group({
      fullName: [userData.name || ''],
      email: [userData.email || ''],
      phoneNumber: [userData.phoneNumber || ''],
      photoURL: [userData.photoURL || ''],
      language: [localStorage.getItem('selectedLanguage') || 'en']
    });

    // Subscribe to login success
    this.subScription = this.commonService.loginSuccess$.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        const newUser = this.storageService.getItem('userData') || {};
        this.profileForm.patchValue({
          fullName: newUser.name,
          email: newUser.email,
          phoneNumber: newUser.phoneNumber,
          photoURL: newUser.photoURL
        });
      }
    });
  }

  // Save profile changes
  saveProfile() {
    const updatedData = this.profileForm.value;

    // Save to local storage
    this.storageService.setItem('userData', {
      ...this.storageService.getItem('userData'),
      name: updatedData.fullName,
      phoneNumber: updatedData.phoneNumber,
      photoURL: updatedData.photoURL
    });

    // Save language
    localStorage.setItem('selectedLanguage', updatedData.language);

    this.toastService.showToast('Profile updated successfully!', ToastType.SUCCESS);
  }

  // Handle language change
  onLanguageChange(event: any) {
    localStorage.setItem('selectedLanguage', event.detail.value);
  }

  // Change profile picture (example placeholder)
  changeProfilePicture() {
    // Here you can implement Camera or FilePicker
    alert('Change profile picture clicked!');
  }

  ngOnDestroy() {
    if (this.subScription) {
      this.subScription.unsubscribe();
      this.subScription = null;
    }
  }

  logout(){

  }
}
