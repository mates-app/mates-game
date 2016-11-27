import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GameConfig, GameMatch, User } from '../models';
import {GameInstance} from "torbi.ng2-choices-game/components";

@Injectable()
export class GameMatchServices{
  private pathGameMatch: string = `http://${location.hostname}:4001/game-match`;
  constructor(private http: Http) { }

  create(createGameBody:CreateGameBody):Observable<GameMatch> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.pathGameMatch, JSON.stringify(createGameBody), options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getPublic(type:string):Observable<GameMatch[]>{
    return this.http.get(`${this.pathGameMatch}/public/${type}`)
                    .map(this.extractData)
                    .catch(this.handleError);

  }

  exists(name:string):Observable<boolean>{
    return this.http.get(`${this.pathGameMatch}/exists/${name}`)
                    .map(exists => exists.json())
                    .catch(this.handleError);
  }

  getByNameMatching(name:string, query:string):Observable<GameMatch[]>{
      let endpoint = `${this.pathGameMatch}/name-matching/${name}?${query}`

      return this.http
                 .get(endpoint)
                 .map(this.extractData)
                 .catch(this.handleError);
  }

  byId(id:string):Observable<GameMatch>{
    return this.http.get(`${this.pathGameMatch}/${id}`)
                    .map(this.extractData)
                    .catch(this.handleError);

  }



  private extractData(res: Response) {
    let body = res.json();
    // console.log('extractData', res, body)
    return body || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }



}


export interface CreateGameBody{

  gameId:string,
  name:string,
  isMultiPlayer:boolean,
  users:Array<User>,
  author:User,
  isPublic:boolean


}
