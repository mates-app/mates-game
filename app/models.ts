import {GameInstance} from "torbi.ng2-choices-game/components";
export class GameConfig{
  constructor(
    public _id:string = '',
    public name:string = ''
   ){}
}

export class GameMatch{
  public _id:string 
  constructor(
    public gameId:GameConfig = new GameConfig(),
    public name:string = '',
    public isPublic:boolean = true,
    public isMultiPlayer:boolean = true,
    public users:Array<User> = [],
    public author:User = new User('','',''),
    public isStarted:boolean = false,
    
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
