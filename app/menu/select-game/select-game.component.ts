/**
 * Created by josecullen on 17/07/16.
 */
import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MatesServices } from '../../mates-commons/mates-game.service'
import { GameInstance } from '../../models'
import { CurrentGameInstance } from '../../game/current-game.service'

@Component({
  moduleId: module.id,
  selector: 'select-game',
  templateUrl: 'select-game.component.html',
})
export class SelectGameComponent implements OnInit {
	gameInstances:Array<GameInstance>;
	

	constructor(
		private matesServices : MatesServices,
		private router : Router,
		private currentGameInstance : CurrentGameInstance
		){}

	ngOnInit(){
		this.gameInstances = this.matesServices.getGameInstances();
	}

	play(gameInstance:GameInstance){
	   console.log('play', gameInstance)
	   this.currentGameInstance.setCurrentInstance(gameInstance);
	   let link = ['/game'];
	   this.router.navigate(link);
	}
}

