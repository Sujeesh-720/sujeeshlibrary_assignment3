import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WELCOME TO LIBRARYAPP';
  constructor(public _auth:AuthService,private _router:Router) {}

  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate([''])
  }
  loggedUser(){
    this._router.navigate(['books'])
  }
}

