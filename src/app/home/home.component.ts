import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  constructor(private myRoutes:Router) { }

  ngOnInit(): void {


  }
  logout() {
    localStorage.removeItem("LoggedInUser");
    this.myRoutes.navigate(["/login"]);
  }

}
