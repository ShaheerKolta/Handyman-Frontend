import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { RegisterService } from 'src/app/services/register.service';
import { RequestsService } from 'src/app/services/RequestS.service';
import { RequestService } from 'src/app/services/Request.service';
import { MakingRequestService } from 'src/app/services/MakingRequest.service';
import { PaymentService } from 'src/app/services/Payment.service';
import { CommunicationLayerService } from 'src/app/communication-layer.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  formGroup: FormGroup;
  controller = '/Request';
  SSN;
  //ClientID;
  ClientID = localStorage.getItem('userId');

  constructor(
    private requestService: RequestService,
    private requestsService: RequestService,
    private fb: FormBuilder,
    private MakingRequestService: MakingRequestService,
    private payment: PaymentService,
    private communicationService: CommunicationLayerService
  ) {}
  ngOnInit(): void {
    debugger;
    //this.ClientID = this.getClientID();
    this.getSSN();
    this.initForm();
  }

  submit() {
    //this.initForm();
    console.log(this.formGroup.value);
    this.createRequest(this.formGroup.value).subscribe(res => {
      debugger;
    }),
      err => {};
    debugger;
  }

  getSSN() {
    this.communicationService.getSSN().subscribe(newValue => {
      console.log('this is after send data to request', newValue);
      if (newValue) {
        debugger;
        this.SSN = newValue;
        //this.getHandymanProfileBySSNMethod(newValue);
      }
    });
  }

  getClientID() {
    return localStorage.getItem('userId');
  }

  initForm() {
    debugger;
    this.formGroup = this.fb.group({
      client_ID: [this.ClientID, Validators.compose([Validators.required])],
      handyman_SSN: [this.SSN, Validators.compose([Validators.required])],
      Request_Date: [null, Validators.compose([Validators.required])],
      method: [null, Validators.compose([Validators.required])]
    });
  }

  isControlValid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.formGroup.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.formGroup.controls[controlName];
    return control.dirty || control.touched;
  }
  createRequest(formData) {
    debugger;
    return this.requestsService.post('/Request', formData);
  }
}
