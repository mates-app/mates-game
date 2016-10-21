import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GameConfig, GameMatch } from '../models';
import {GameInstance} from "torbi.ng2-choices-game/components";
import { User } from '../models'

@Injectable()
export class UserServices{

  private pathUsers: string = `http://${location.hostname}:3000/users`;

  constructor(private http: Http) { }

  isValid(user:User):Observable<boolean> {

    return this.http.get(`${this.pathUsers}/is-valid/${user.username}`)
                    .map(this.extractData)
                    .catch(this.handleError);

  }

  getUsersByNameFragment(name:string):Observable<GameMatch[]>{
    return this.http.get(`${this.pathUsers}/by-username-fragment?username=${name}`)
                    .map(this.extractData)
                    .catch(this.handleError);

  }


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



}
