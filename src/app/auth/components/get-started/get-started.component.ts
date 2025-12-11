import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { constants } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
  standalone: false
})
export class GetStartedComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  getStarted(){
    localStorage.setItem(constants.Started, JSON.stringify(false));
    this.navCtrl.navigateForward('/auth/login');
  }
}
