import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { UserServices } from './mates-commons/users.service'
import { User } from './models'

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  redirectUrl: string;

  private pathUsers: string = `http://${location.hostname}:3000/users`;

  constructor(private http: Http) { }

  private extractData(res: Response) {
    let body = res.json();
    console.log('extractData', res, body)
    return body || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  login(user:User): Observable<boolean> {
    return this.http.get(`${this.pathUsers}/is-valid/${user.username}`)
                    .map(res => {
                      this.isLoggedIn = res.json()                      
                      return this.isLoggedIn
                    })
                    .catch(this.handleError);
  }

  signup(user:User): Observable<boolean>{
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.pathUsers, JSON.stringify(user), options)
                    .map(this.extractData)
                    .catch(this.handleError)
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}

