import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

export class GameConfig{
  constructor(
    public _id:string,
    public name:string
   ){}
}

export class GameInstance{
  constructor(
    public instanceId:string = "",
    public gameId:string = "",
    public levels:Array<GameLevel> = new Array()
  ){}
}

export class GameLevel{
  constructor(
    public gameProblems:Array<GameProblem>,
	  public scoreConfig:ScoreConfig
  ){}
}

export class GameProblem{
  constructor(
    public problemExpression:string ,
  	public solvedExpression:string,
  	public answerOptions:string[],
  	public answer:string[]
  ){}
}

export class ScoreConfig{
  constructor(
    public baseScore:number,
    public preCount:number,
    public withTime:boolean,
    public extras:Array<ExtraScore>
  ){}
}

export class ExtraScore{
  constructor(
    public name:string = "",
    public extraTime:number = 0,
    public extraScore:number = 0,
    public thresholdTime:number = 100
  ){}

}

export class Score{
  constructor(
    public base:number = 0,
    public extra:number = 0
  ){}

  allScore():number{
    return this.base + this.extra
  }
}

export enum GameOverType{
  TIME, LEVELS, LIVES
}
