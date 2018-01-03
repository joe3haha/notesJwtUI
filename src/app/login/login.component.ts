import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginUrl = 'http://localhost:8080/login';
  error: boolean = false;

  user : User = {
  	username : '',
  	password : ''
  }

  constructor(private http: HttpClient,
  			  private router: Router,
  			  private httpService: HttpServiceService,
  			  private userService: UserServiceService ) { }

  ngOnInit() {
  }

  onSubmit(): void{
    let cred = {username:this.user.username,password:this.user.password};
  	this.httpService.login(this.user.username,this.user.password).subscribe((data : HttpResponse<any>)  => {
  		let token = data.headers.get('Authorization');
  		if(data.status === 200){
  			localStorage.setItem('token',token);
  			this.userService.logIn();
  			this.router.navigate(['home']);
  		}
  	}, err => { this.showErrorLogin();});
  }
  	

  showErrorLogin(): void {
   this.error = true;
   setTimeout(function() {
       this.error = false;
   }.bind(this), 3000);
  }

  goBack(): void{
  	this.router.navigate(['dashboard']);
  }

}
