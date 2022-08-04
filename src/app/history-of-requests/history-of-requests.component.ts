import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationLayerService } from '../communication-layer.service';
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

  constructor(
    private RequestsService: RequestsService,
    private CommunicationService: CommunicationLayerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    debugger;
    this.getUserIdandRole();
    this.getRequestsByClientIDorHandySSNMethod(this.userID, this.role);
  }

  onSubmit(value: number) {
    this.CommunicationService.SetRequestID(value);
    this.router.navigate([`/requestdetails`]);
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
