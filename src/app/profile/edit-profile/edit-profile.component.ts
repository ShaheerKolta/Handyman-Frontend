import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/Client.service';
import { HandymanService } from 'src/app/services/Handyman.service';

@Component({
  selector: 'app-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  formGroup: FormGroup;
  client;
  // Regions;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  checkStatus: boolean = true;
  role: boolean = localStorage.getItem('role') === 'Handyman' ? false : true;
  constructor(
    private ClientService: ClientService,
    private HandymanService: HandymanService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getClientByID(localStorage.getItem('userId'));
    this.initForm();
  }

  public localStorageItem(): boolean {
    if (localStorage.getItem('role') === 'Client') {
      return true;
    } else {
      return false;
    }
  }

  // Starting Work
  initForm() {
    this.formGroup = this.fb.group({
      client_ID: [Number(localStorage.getItem('userId'))],
      client_name: [null, Validators.compose([Validators.required])],
      client_Address: [null, Validators.compose([Validators.required])],
      region_ID: [1],
      client_Email: ['', Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
      client_Mobile: [''],
      password: ['']
    });
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

  submit() {
    debugger;
    console.log(this.formGroup);
    this.ClientService.editClient(Number(localStorage.getItem('userId')), this.formGroup.value).subscribe(
      res => {
        console.log(res);
      },

      err => {}
    );
  }
}
