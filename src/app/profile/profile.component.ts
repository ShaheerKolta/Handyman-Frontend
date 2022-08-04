import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/Client.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  client;
  constructor(private ClientService: ClientService) {}

  ngOnInit(): void {
    this.getClientByID(localStorage.getItem('userId'));
  }

  getClientByID(id) {
    this.ClientService.getClientbyId(id).subscribe(
      res => {
        this.client = res;
        console.log(this.client);
      },
      err => {}
    );
  }
}
