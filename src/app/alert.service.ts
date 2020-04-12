import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationStart } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<any>();
    private keepAfterRouteChange = false;


  constructor(private router: Router) { }

 
}
