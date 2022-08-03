import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
//import { Console } from 'console';
import { HandymanService } from 'src/app/services/Handyman.service';
import { CommunicationLayerService } from '../communication-layer.service';
//import { setFlagsFromString } from 'v8';
import { GeneralHandyman } from '../models/General_Handyman';
import { HandymanRegister } from '../models/handyman-register';
import { CommunicationService } from '../services/Communication.service';

@Component({
  selector: 'app-carpenters',
  templateUrl: './carpenters.component.html',
  styleUrls: ['./carpenters.component.scss']
  //providers: [CommunicationService]
})
export class CarpentersComponent implements OnInit {
  //handymanCrafts;
  craftID: Number = 1;
  // Using model in Trasfrering Data
  handymanCrafts;
  private SSN: Number;
  private path;
  public subscription: Subscription;
  

  //router: any;
  constructor(
    private HandymanService: HandymanService,
    private router: Router,
    public CommunicationService: CommunicationLayerService
  ) {}

  ngOnInit(): void {
    this.getHandymenByCraftIDMethod(this.craftID);
    //this.HandymanService.setSSN(this.SSN);
  }

  onSubmit(ssnData: Number) {
    // //this.router.navigate(['/planning/capplanning'], {
    //   skipLocationChange: true,
    // });
    debugger;
    //console.log(ssnData);

    this.SSN = ssnData;
    //this.path = '/Products/' + this.SSN;
    this.CommunicationService.setSSN(this.SSN);
    this.CommunicationService.SSNStatus.emit(ssnData); // emits the SSN

    //console.log(this.subscription);

    // this.router.navigate([this.path], {
    //   skipLocationChange: true
    // });
  }

  getHandymenByCraftIDMethod(data) {
    this.HandymanService.getHandymenByCraftID(data).subscribe(
      res => {
        this.handymanCrafts = res;
        // this.GeneralHandyman = res;
        console.log(this.handymanCrafts[0]);
      },
      err => {}
    );
  }
}
