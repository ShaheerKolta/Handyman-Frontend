import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { __values } from 'tslib';
import { GeneralHandyman } from '../models/General_Handyman';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class HandymanService {
  private value: BehaviorSubject<any>;
  data : Number = 12;
  currentValue: Subject<Number> = new BehaviorSubject<Number>(this.data);

  Controller = '/Handyman';
  constructor(private requestService: RequestService) {}
  getHandymen() {
    return this.requestService.get(this.Controller) as Observable<any>;
  }
  /////////////////////////////////////////////////////////////////////////////////////////
  // ! this is a setter should be replaced
  //private data = new Subject<number>();
  setSSN(ssn: Number) {
    debugger;
    this.data = ssn;
    this.currentValue.next(ssn);
  }
  /////////////////////////////////////////////////////////////////////////////////////////
  // ! this is a getter should be replaced
  getSSN() {
    debugger;
    return this.currentValue.asObservable();
  }

  /////////////////////////////////////////////////////////////////////////////////////////
  // TODO : Need to be Checked (Routing might be Wrong)
  // ! Route Modified by Helmy
  getHandymenByCraftID(id: number) {
    return this.requestService.getById(this.Controller + '/' + 'Craft', id) as Observable<any>;
  }
  getHandymanProfileBySSN(id: number) {
    return this.requestService.getById(this.Controller, id) as Observable<any>;
  }
  /////////////////////////////////////////////////////////////////////////////////////////

  createHandymen(formData) {
    return this.requestService.post(this.Controller + '/', formData) as Observable<any>;
  }

  editHandymen(id: number, formData) {
    return this.requestService.put(this.Controller + '/', id, formData) as Observable<any>;
  }

  deleteHandymen(id) {
    return this.requestService.delete(this.Controller + '/', id) as Observable<any>;
  }
}
