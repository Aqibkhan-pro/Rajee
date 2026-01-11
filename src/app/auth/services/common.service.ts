import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private loginSuccessSubject = new Subject<boolean>();
  loginSuccess$ = this.loginSuccessSubject.asObservable();

  constructor() { }

  notifyLoginSuccess() {
    this.loginSuccessSubject.next(true);
  }

}
