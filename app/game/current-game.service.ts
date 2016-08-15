import {Injectable} from '@angular/core';

import {GameInstance} from '../models';

@Injectable()
export class CurrentGameInstance{
  private gameInstance:GameInstance

  constructor() { }

  getGameInstance():GameInstance {
    return this.gameInstance
  }

  setCurrentInstance(gameInstance: GameInstance){
    this.gameInstance = gameInstance
  }


}
