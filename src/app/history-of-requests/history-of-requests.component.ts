import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/RequestS.service';

@Component({
  selector: 'app-history-of-requests',
  templateUrl: './history-of-requests.component.html',
  styleUrls: ['./history-of-requests.component.scss']
})
export class HistoryOfRequestsComponent implements OnInit {
  orders = [];
  request;
  requests;
  token: string;

  constructor(private RequestsService: RequestsService) {}

  ngOnInit(): void {
    debugger;
    this.getRequestByIDMethod(12);
    this.getToken();
    console.log(this.request);
  }

  getToken() {
    this.token = localStorage.getItem('token');
    console.log(this.token);
  }
  getRequestByIDMethod(data: Number) {
    this.RequestsService.getRequestByID(data).subscribe(
      res => {
        this.request = res;
        // this.GeneralHandyman = res;
      },
      err => {}
    );
  }
}
