import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/RequestS.service';

@Component({
  selector: 'app-history-of-requests',
  templateUrl: './history-of-requests.component.html',
  styleUrls: ['./history-of-requests.component.scss']
})
export class HistoryOfRequestsComponent implements OnInit {
  // orders = [];
  request;
  requests;
  userID;
  role;

  constructor(private RequestsService: RequestsService) {}

  ngOnInit(): void {
    debugger;
    this.getUserIdandRole();
    this.getRequestsByClientIDorHandySSNMethod(this.userID, this.role);
  }

  getUserIdandRole() {
    this.userID = localStorage.getItem('userId');
    this.role = localStorage.getItem('role');
  }
  getRequestsByClientIDorHandySSNMethod(data: Number, role) {
    this.RequestsService.getRequestsByClientIDorHandySSN(data, role).subscribe(
      res => {
        this.requests = res; // this.GeneralHandyman = res;
        console.log(res);
      },
      err => {}
    );
  }
}
