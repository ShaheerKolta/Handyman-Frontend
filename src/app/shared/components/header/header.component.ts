import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { LoginService } from 'src/app/services/login.service';
import { Menu, menuList as staticMenuList } from '../../data/menus';

@Component({
  selector: 'll-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() topFixed: boolean;
  @Output() toggleSidenav = new EventEmitter();
  isScrolled: boolean;
  menuList : Menu[]=  [];
  isLessThenLargeDevice;
  isLoggedIn:boolean = localStorage.getItem("token")? true : false; 
  constructor(private breakpointObserver: BreakpointObserver, private loginService : LoginService) {}

  ngOnInit(): void {
    this.menuList = staticMenuList;
    if(!this.isLoggedIn){
      this.menuList=this.menuList.slice(1,this.menuList.length);
    }
    this.breakpointObserver.observe(['(max-width: 1199px)']).subscribe(({ matches }) => {
      this.isLessThenLargeDevice = matches;
    });
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isScrolled = window.pageYOffset > 15;
  }


}
