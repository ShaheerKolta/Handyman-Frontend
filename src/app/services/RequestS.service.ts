import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  Controller = '/Request';
  constructor(private requestService: RequestService) {}
  getRequest() {
    return this.requestService.get(this.Controller) as Observable<any>;
  }
  createRequest(formData) {
    return this.requestService.post(this.Controller + '/', formData) as Observable<any>;
  }
  getRequestById(id:number)
  {
    return this.requestService.getById(this.Controller, id) as Observable<any>;
  }

  editRequest(id: number, request :[]) {
    return this.requestService.put(this.Controller + '/', id, request) as Observable<any>;
  }

  deleteRequest(id) {
    return this.requestService.delete(this.Controller + '/', id) as Observable<any>;
  }

  getRequestsByClientIDorHandySSN(id: Number, role: string) {
    return this.requestService.getById(this.Controller + '/' + role + '/', id) as Observable<any>;
  }
  getRequestByID(id: Number) {
    return this.requestService.getById(this.Controller, id) as Observable<any>;
  }
}
