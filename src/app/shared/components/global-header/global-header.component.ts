import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss'],
  standalone:false
})
export class GlobalHeaderComponent {

  @Input() showBack: boolean = false;
  @Input() title: string = '';
  @Input() rightIcon: string | null = null;

  @Output() rightIconClick = new EventEmitter<void>();

  constructor(private router: Router) {}

  goBack() {
    this.router.navigateByUrl('/'); // or use history.back()
  }

  onRightIconClick() {
    this.rightIconClick.emit();
  }
}
