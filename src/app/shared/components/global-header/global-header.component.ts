import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss'],
  standalone: false
})
export class GlobalHeaderComponent {

  @Input() showBack: boolean = false;
  @Input() showFilter: boolean = false;
  @Input() title: string = '';
  @Input() rightIcon: string | null = null;
  @Input() showPopOver: boolean = false;
  @Input() iconFromAssets: any
  @Input() showRightButton: boolean = false;
  @Input() buttonText: string = '';

  @Output() rightIconClick = new EventEmitter<void>();

  constructor(private navCtrl: NavController) { }

  goBack() {
    this.navCtrl.back();
  }

  onRightIconClick() {
    this.rightIconClick.emit();
  }
}
