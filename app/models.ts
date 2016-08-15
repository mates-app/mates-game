import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';


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
  	public correctAnswer:string[]
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

export enum GameOverType{
  TIME, LEVELS, LIVES
}
