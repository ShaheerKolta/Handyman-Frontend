import { Component, OnInit } from '@angular/core';
import { plumberssDB } from '../shared/data/plumbers';


@Component({
  selector: 'app-plumber-component',
  templateUrl: './plumber-component.component.html',
  styleUrls: ['./plumber-component.component.scss']
})
export class PlumberComponentComponent implements OnInit {
  plumbers = []

  constructor() {
    this.plumbers = plumberssDB.Plumber;
   }

  ngOnInit(): void {
  }

}
