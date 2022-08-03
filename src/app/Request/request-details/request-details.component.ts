import { DatePipe } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
//import { request } from 'http';
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';
import { RequestsService } from 'src/app/services/RequestS.service';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss']
})

// @Injectable({
//   providedIn: 'root'
// })
export class RequestDetailsComponent implements OnInit {
request;
formgroup:FormGroup
editrequest;
review;
pipe = new DatePipe('en-US');
rate:number =0;
role = localStorage.getItem('role')==='Handyman'?true:false;
status;
editReview = false;

  constructor(private requestService : RequestService, private requestsservice : RequestsService ) { }

  ngOnInit(): void {
    this.GetRequest();
  }
  GetRequest() {
    this.requestsservice.getRequestById(3).subscribe(
      res => {
        this.request = res;
      },
      err => {}
    );
  }
  putRequest(id,requestObj) {
    if(this.role===true){
      requestObj.handy_Review=this.review;
      requestObj.handy_Rate=this.rate;
    }
    else {
      requestObj.client_Review=this.review;
      requestObj.client_Rate=this.rate;
    }
    
    this.requestsservice.editRequest(id, requestObj).subscribe(
      res => {
        this.editrequest = res;
      },
      err => {}
    );
  }
  // initForm() {
  //   this.formgroup = this.fb.group(
  //     {
  //       //rate: new FormControl(this.request.request.handy_Rate,),
  //       rate : this.rate,
  //       review: new FormControl(this.request.request.handy_Review )
  //     }
  //   )
  // };
  getstatus(status:number){
    if(status==0)
      return "Pending for Tommorow";
    else if(status==1)
      return "Pending for Today";
    if(status==2)
      return "Accepted";
    else if(status==3)
      return "Canceled by Client";
    if(status==4)
      return "Canceled by Handyman";
  }
  submit(){
    debugger
    if(this.editReview===true){
      //this.putRequest(this.request.request.request_ID,this.request.request);
      this.editReview=false;
      console.log(this.rate);
    }
    else{
      this.editReview = true;
     // this.initForm();
    }
  }
  onSubmit(){
    console.log(this.request.request.handy_Rate);
    debugger
  }

}
