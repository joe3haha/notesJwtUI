import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthServiceService {

  jwtHelper: JwtHelper = new JwtHelper();

  constructor() {}


  isAuthenticated(): boolean {

    const token = localStorage.getItem('token');
    if(!token){
    	return false;
    }

    return !this.jwtHelper.isTokenExpired(token);
  }

}
