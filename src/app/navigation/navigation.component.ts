import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  authenticated: boolean = false;
  subscription: Subscription;
 

  constructor(private router: Router,private userService: UserServiceService) { 
     this.subscription = this.userService.isLoggedIn().subscribe(auth => this.authenticated = auth);
     //this.userService.logout();
  }

  ngOnInit() {
  	if(localStorage.getItem('token')){
  		this.authenticated = true;
  	}else{
  		this.authenticated = false;
  	}
  }

  onLogout(): void{
  	localStorage.removeItem('token');
  	this.router.navigate(['dashboard']);

  }

}
