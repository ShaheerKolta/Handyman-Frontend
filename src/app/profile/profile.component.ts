import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/Client.service';
import { HandymanService } from '../services/Handyman.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  client;
  handyman;
  checkStatus:boolean=true;
  role:boolean = localStorage.getItem('role') === 'Handyman' ? false: true;
  constructor(private ClientService: ClientService , private HandymanService : HandymanService) {}

  ngOnInit(): void {
    if(localStorage.getItem('role')=="Client")
      this.getClientByID(localStorage.getItem('userId'));
    else this.getHandymanBySSN(localStorage.getItem('userId'));
    this.checkStatus = this.localStorageItem();
  }

  getClientByID(id) {
    this.ClientService.getClientbyId(id).subscribe(
      res => {
        this.client = res;
      },
      err => {}
    );
  }

  getHandymanBySSN(ssn){
this.HandymanService.getHandymanProfileBySSN(ssn).subscribe(
  res=>{
    this.handyman=res;
  }
);}

public localStorageItem(): boolean {
    if (localStorage.getItem("role") === "Client") {
      return true
    } else {
      return false;
    };
  }
}
