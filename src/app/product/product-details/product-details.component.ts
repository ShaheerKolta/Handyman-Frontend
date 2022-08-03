import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarpentersComponent } from 'src/app/carpenters/carpenters.component';
import { CommunicationLayerService } from 'src/app/communication-layer.service';
import { GeneralHandyman } from 'src/app/models/General_Handyman';
import { CommunicationService } from 'src/app/services/Communication.service';
import { HandymanService } from 'src/app/services/Handyman.service';

@Component({
  selector: 'll-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
  //providers: [CommunicationService]
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

  constructor(private HandymanService: HandymanService, public communicationService: CommunicationLayerService) {}

  // variable of carpenter to call it in profile (Product Details)

  ngOnInit() {
    this.communicationService.getSSN().subscribe(newValue => {
      this.SSN = newValue;
    });
    debugger;
    //this.subscription = this.HandymanService.getSSN().subscribe(msg => (this.SSN = msg));
    this.communicationService.SSNStatus.subscribe((status: number) => (this.SSN = status));
    this.communicationService.SSNStatus.unsubscribe();
    //this.SSN = this.communicationService.getValue();
    this.getHandymanProfileBySSNMethod(this.SSN);
    console.log(this.SSN);
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
        console.log('This is a Test', res);
      },
      err => {}
    );
  }

  onSubmit() {}
}
