import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-global-segment',
  templateUrl: './global-segment.component.html',
  styleUrls: ['./global-segment.component.scss'],
  standalone:false
})
export class GlobalSegmentComponent {

  @Input() segments: string[] = [];
  @Input() default: string = '';   // optional default segment
  @Output() segmentChanged = new EventEmitter<string>();

  selected: string = '';

  ngOnInit() {
    this.selected = this.default || this.segments[0] || '';
  }

  onSegmentSelect(event: any) {
    const value = (event.detail?.value || '').trim();
    this.segmentChanged.emit(value);
  }
}
