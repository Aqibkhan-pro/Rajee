import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ROUTES } from 'src/app/shared/utils/app-routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ CommonModule, IonicModule, FormsModule, ReactiveFormsModule ],
})
export class LoginComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

 forgetPassword() {
  this.router.navigate(['auth/forget-password']);
}

home() {
  this.router.navigate([ROUTES.MAIN]);
}
}
