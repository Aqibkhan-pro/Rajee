import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: false
})
export class DashboardComponent implements OnInit {

  constructor(
    private navCtrl : NavController,
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
}
