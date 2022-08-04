import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'll-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  count = 0;
  particlesOptions = {
    particles: {
      color: {
        value: ['#ffffff', '#ffffff']
      },
      size: {
        value: 1
      },
      lineLinked: {
        enable: true,
        color: 'random'
      },
      move: {
        enable: true,
        speed: 1.5
      }
    }
  };
  constructor(private router: Router) {}

  checkLogged(){
    debugger;
    if(localStorage.getItem("token")!=null && this.count == 0){
      this.router.navigate([`/`]);
      this.count = 1;
    }
  }

  ngOnInit(): void {
    
    this.checkLogged();}
}
