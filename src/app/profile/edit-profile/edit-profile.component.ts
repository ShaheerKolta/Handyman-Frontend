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
    // this.loadForm();
  }

  public localStorageItem(): boolean {
    if (localStorage.getItem('role') === 'Client') {
      return true;
    } else {
      return false;
    }
  }

  // Starting Work
  loadForm() {
    this.formGroup = new FormGroup({
      client_ID: new FormControl(localStorage.getItem('userId')),
      client_name: new FormControl('', Validators.required),
      client_Address: new FormControl(''),
      region_ID: new FormControl(1),
      client_Email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      client_Mobile: new FormControl('' /*,[Validators.required/,Validators.pattern(this.phoneNumber) ]*/),
      password: new FormControl('', Validators.required)
    });
  }
  initForm() {
    this.formGroup = this.fb.group({
      client_name: [this.client.client_name, Validators.compose([Validators.required])],
      client_Address: [this.client.client_Address, Validators.compose([Validators.required])],
      region_ID: [null],
      client_Email: [
        this.client.client_Email,
        Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])
      ],
      client_Mobile: [
        this.client.client_Mobile,
        Validators.compose([
          Validators.required
          //Validators.pattern(this.phonePattern)
        ])
      ],
      password: [
        this.client.password,
        Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(100)])
      ]
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
    this.ClientService.editClient(localStorage.getItem('userId'), this.formGroup.value).subscribe(
      res => {
        console.log(res);
      },

      err => {}
    );
  }
}
