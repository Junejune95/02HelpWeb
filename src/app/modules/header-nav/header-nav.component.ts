import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  public currentRoute: any = [];
  public userName: any ;

  constructor(private _route: Router) { }

  ngOnInit() {
    this.checkCurrenroute();
    this.userName=localStorage.getItem('username');
  }

  directRoute(go) {
    this.checkCurrenroute();
    this._route.navigateByUrl(go);
  }


  checkCurrenroute() {
    setTimeout(() => {
      this.currentRoute = this._route.url.split("/");
    }, 100);

  }

  logout(){
    localStorage.clear();
    this._route.navigateByUrl('/login');
  }

}
