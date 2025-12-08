import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
  standalone: true,
  imports: [ CommonModule, IonicModule, FormsModule, ReactiveFormsModule ],
  
})
export class ForgetPasswordComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
