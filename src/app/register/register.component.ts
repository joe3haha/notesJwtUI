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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

    console.log('about to create a new user: ' + this.user.username + ' ' + this.user.password  );
    let cred = {username:this.user.username,password:this.user.password};
  	this.httpService.createUser(this.user.username,this.user.password).subscribe((data : HttpResponse<any>)  => {
  		if(data.status === 201){
  			this.router.navigate(['login']);
  		}
  	}, err => { console.log(err); this.router.navigate(['dashboard']);});
  	

  }
  	

  goBack(): void{
  	this.router.navigate(['dashboard']);
  }

}
