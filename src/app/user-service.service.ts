import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class UserServiceService {

  constructor() { }

  private logger = new Subject<boolean>();


  isLoggedIn(): Observable<boolean> {
    return this.logger.asObservable();
  }

 
  logout() {
    this.logger.next(false);
  }

  logIn() {
    this.logger.next(true);
  }


}
