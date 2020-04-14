import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit,OnDestroy {
  currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];

  constructor(private myRoutes:Router, private user : User,private userService : UserService) { }

  ngOnInit(): void {
   this.loadAllUsers();

  }
   ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }
    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }
  logout() {
    localStorage.removeItem("LoggedInUser");
    this.myRoutes.navigate(["/login"]);
  }

}
