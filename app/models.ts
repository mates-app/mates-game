import {GameInstance} from "torbi.ng2-choices-game/components";
export class GameConfig{
  constructor(
    public _id:string,
    public name:string
   ){}
}

export class GameMatch{
  constructor(
    public gameId:string,
    public name:string,
    public isPublic:boolean,
    public isMultiPlayer:boolean,
    public isStarted:boolean = false,
    public _id:string = ""
  ){

  }
}

export class GameMatesInstance extends GameInstance{
  public gameMatchId:string;
}

export class User{
  constructor(
    public username:string = "",
    public password:string = "",
    public _id:string = ""
  ){

  }


}
