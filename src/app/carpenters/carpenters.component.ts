import { Component, OnInit } from '@angular/core';
import { carpentersDB } from '../shared/data/carpenters';

@Component({
  selector: 'app-carpenters',
  templateUrl: './carpenters.component.html',
  styleUrls: ['./carpenters.component.scss']
})
export class CarpentersComponent implements OnInit {
  carpenters = []
  constructor() {
    this.carpenters = carpentersDB.Carpenter;
   }

  ngOnInit(): void {
  }

}
