import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
//import { Console } from 'console';
import { HandymanService } from 'src/app/services/Handyman.service';
//import { setFlagsFromString } from 'v8';
import { GeneralHandyman } from '../models/General_Handyman';
import { HandymanRegister } from '../models/handyman-register';

@Component({
  selector: 'app-carpenters',
  templateUrl: './carpenters.component.html',
  styleUrls: ['./carpenters.component.scss']
})
export class CarpentersComponent implements OnInit {
  //handymanCrafts;
  craftID: number = 1;
  // Using model in Trasfrering Data
  handymanCrafts;
  public SSN: string;
  private path;
  public subscription: Subscription;

  // imp  Carpetner Component is the father of Product Detail Component

  //router: any;
  constructor(private HandymanService: HandymanService, private router: Router) {}

  ngOnInit(): void {
    this.getHandymenByCraftIDMethod(this.craftID);
    this.HandymanService.setSSN(this.SSN);
  }

  onSubmit(ssnData: string) {
    // //this.router.navigate(['/planning/capplanning'], {
    //   skipLocationChange: true,
    // });
    debugger;
    //console.log(ssnData);

    this.SSN = ssnData;
    //this.path = '/Products/' + this.SSN;
    this.HandymanService.setSSN(this.SSN);
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