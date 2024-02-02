import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/auth/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit{
  userLoginOn:boolean=false;
  constructor(private loginService:LoginService, private router:Router)  {}

  ngOnInit(): void {
      this.loginService.currentUserLoginOn.subscribe(
        {
          next:(userLoginOn) => {
            this.userLoginOn=userLoginOn;
          }
        }
      )
    }
  
    logout()
    {
      this.loginService.logout();
      this.router.navigate(['/login'])
    }
}
