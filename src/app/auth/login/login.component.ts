import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'll-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private LoginService: LoginService) {
    // this.loginForm = this.fb.group({
    //   Email: new FormControl(null, Validators.required),
    //   password: new FormControl(null, Validators.required),
    //   Type: new FormControl(null, Validators.required)
    // });
  }


  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.loginForm = this.fb.group(
      {

      }
    )
  };



  // submitForm() {
  //   if (this.form.invalid) {
  //     return;
  //   }
  //   this.LoginService.loginform(this.form.get('Email')?.value, this.form.get('password')?.value).subscibe(Response => {
  //     this.Router.navigate(['/']);
  //   });
  // }

  // ngOnInit(): void {}
  // ngOnInit(): void {
  // this.initForm();
  // this.loadForm();

  //   initForm() {
  //     this.formGroup = this.fb.group(
  //       {

  // }
  // )};
  // loadForm() {
  //   this.formGroup =this.loginservices.loginform;
  // // this.initForm();

  // }

  get userName() {
    return this.loginForm.get('userName');
  }
  get password() {
    return this.loginForm.get('password');
  }

  login() {
    this.LoginService.login(this.loginForm.value).subscribe(data => {
      this.LoginService.saveToken[data['token']];
    });
  }


  // onSubmit() {
  //   var loginRequest = <login>{};
  //   loginRequest.Email = this.loginForm.controls['Email'].value;
  //   loginRequest.password = this.loginForm.controls['password'].value;
  //   this.LoginService
  //   .login(loginRequest)
  //   .subscribe(result => {
  //   console.log(result);
  //   this.loginResult = result;
  //   if (result.success && result.token) {
  //   localStorage.setItem(this.LoginService.tokenKey, result.token);
  //   }
  //   }, error => {
  //   console.log(error);
  //   if (error.status == 401) {
  //   this.loginResult = error.error;
  //   }
  //   });
  //   }
}
