import { Component, OnInit } from '@angular/core';
import { HandymanService } from 'src/app/services/Handyman.service';
import { GeneralHandyman } from '../models/General_Handyman';
import { HandymanRegister } from '../models/handyman-register';

@Component({
  selector: 'app-carpenters',
  templateUrl: './carpenters.component.html',
  styleUrls: ['./carpenters.component.scss']
})
export class CarpentersComponent implements OnInit {
  handymanCrafts;
  craftID: number = 1;
  constructor(private HandymanService: HandymanService) {}

  ngOnInit(): void {
    this.getHandymenByCraftIDMethod(this.craftID);
  }

  getHandymenByCraftIDMethod(data) {
    this.HandymanService.getHandymenByCraftID(data).subscribe(
      res => {
        this.handymanCrafts = res;
      },
      err => {}
    );
  }
}
