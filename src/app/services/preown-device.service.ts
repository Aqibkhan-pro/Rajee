import { Injectable } from '@angular/core';
import { GetEmployeeByEmailLoginGQL, LoginWithEmailGQL } from 'src/graphql/generated';

@Injectable({
  providedIn: 'root'
})
export class PreownDeviceService {

  constructor(
    private getEmployeeByEmail: GetEmployeeByEmailLoginGQL,
    private loginWithEmail : LoginWithEmailGQL) { }

  getEmployeeByEmailApi(data: any) {
    return this.getEmployeeByEmail.watch(data).valueChanges;
  }

  loginWithEmailApi(data: any) {
    return this.loginWithEmail.mutate(data);
  }

}
