import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { RegisterService } from 'src/app/services/register.service';
import { RequestsService } from 'src/app/services/RequestS.service';
import { RequestService } from 'src/app/services/Request.service';
import { MakingRequestService } from 'src/app/services/MakingRequest.service';
import { PaymentService } from 'src/app/services/Payment.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  formGroup: FormGroup;
  controller = '/Request';

  constructor(
    private requestService: RequestService,
    private requestsService: RequestService,
    private fb: FormBuilder,
    private MakingRequestService: MakingRequestService,
    private payment: PaymentService
  ) {}
  ngOnInit(): void {
    debugger;
    this.initForm();
  }
  submit() {
    this.initForm();
    this.createRequest(this.formGroup.valueChanges).subscribe(res => {
      debugger;
    }),
      err => {};
  }
  initForm() {
    debugger;
    this.formGroup = this.fb.group({
      client_ID: [null, Validators.compose([Validators.required])],
      handyman_SSN: [null, Validators.compose([Validators.required])],
      Request_Date: [null, Validators.compose([Validators.required])],
      payment: [null, Validators.compose([Validators.required])]
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
