import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class CommunicationLayerService {
  /////////////////////////////////////////////////////////////////////////////////////////
  // imp Communication using ->>>>>>> E v e n t   E m i t t e r
  /////////////////////////////////////////////////////////////////////////////////////////

  SSNStatus = new EventEmitter<any>();

  //logStatusChange(Status: string) {}

  //UpdateSSN() {}
  constructor() {}

  /////////////////////////////////////////////////////////////////////////////////////////
  // imp Communication using ->>>>>>> O b s e r v a b l e s
  /////////////////////////////////////////////////////////////////////////////////////////
  //private value: BehaviorSubject<any>;
  data: any;
  currentValue = new BehaviorSubject<number>(null);
  value = this.currentValue.asObservable();

  // ! this is a setter should be replaced
  //private data = new Subject<number>();
  setSSN(ssn: number) {
    // debugger;
    // this.data = ssn;
    //this.currentValue.subscribe();
    this.currentValue.next(ssn);
  }
  /////////////////////////////////////////////////////////////////////////////////////////
  // ! this is a getter should be replaced
  getSSN() {
    // debugger;
    //return this.currentValue.asObservable();
    return this.value;
  }

  getValue() {
    //debugger;
    return this.value;
  }
}
