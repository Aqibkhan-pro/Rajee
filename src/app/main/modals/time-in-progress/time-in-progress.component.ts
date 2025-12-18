import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-time-in-progress',
  templateUrl: './time-in-progress.component.html',
  styleUrls: ['./time-in-progress.component.scss'],
  standalone: false
})
export class TimeInProgressComponent implements OnInit {

  constructor(
    private navCtrl : NavController,
    public modalCtrl: ModalController) { }

  ngOnInit() {
    this.start();
  }
  intervalId: any;
  elapsedTime = 0;
  running = false;

  hours = '00';
  minutes = '00';
  seconds = '00';

  start() {
    if (this.running) return;

    this.running = true;
    const startTime = Date.now() - this.elapsedTime;

    this.intervalId = setInterval(() => {
      this.elapsedTime = Date.now() - startTime;
      this.updateTime();
    }, 1000);
  }

  pause() {
    this.running = false;
    clearInterval(this.intervalId);
  }

  reset() {
    this.pause();
    this.elapsedTime = 0;
    this.updateTime();
  }

  updateTime() {
    const totalSeconds = Math.floor(this.elapsedTime / 1000);

    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    this.hours = this.pad(hrs);
    this.minutes = this.pad(mins);
    this.seconds = this.pad(secs);
  }

  pad(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

  goBack(){
    this.navCtrl.pop();
  }
}
