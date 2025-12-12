import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cleanSearchValue } from '../../utils/constants';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss'],
  standalone:false
})
export class GlobalSearchComponent  implements OnInit {
  @Input() placeholder: string = '';
  @Output() searchChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  onSearch(event: any) {
  const value = cleanSearchValue(event.target.value);
  if (value) { 
    this.searchChange.emit(value);
  }
  }
}
