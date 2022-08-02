import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GeneralHandyman } from 'src/app/models/General_Handyman';
import { HandymanService } from 'src/app/services/Handyman.service';

@Component({
  selector: 'll-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  //Handyman;
  //@Input() public SSN;
  // @Input() handymanCrafts;
  SSN;
  Handyman;
  dataIsReady = true;
  errorMessage: string = '500 SERVER ERROR, CONTACT ADMINISTRATOR!!!!';

  public subscription: Subscription;

  constructor(private HandymanService: HandymanService) {}

  ngOnInit() {
    this.HandymanService.getSSN().subscribe(newValue => {
      this.SSN = newValue;
    });
    console.log(this.SSN);
    this.getHandymanProfileBySSNMethod(this.SSN);
    this.subscription = this.HandymanService.getSSN().subscribe(msg => (this.SSN = msg));
  }

  test() {
    //this.SSN = this.HandymanService.getSSN();
    // this.subscription = this.HandymanService.getSSN().subscribe(msg => (this.SSN = msg));
    // alert(this.subscription);
    // console.log(this.subscription);
  }
  getHandymanProfileBySSNMethod(data) {
    debugger;
    this.HandymanService.getHandymanProfileBySSN(data).subscribe(
      res => {
        this.Handyman = res;
        console.log(res);
      },
      err => {}
    );
  }

  onSubmit() {}
}
