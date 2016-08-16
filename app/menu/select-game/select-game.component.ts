/**
 * Created by josecullen on 17/07/16.
 */
import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MatesServices } from '../../mates-commons/mates-game.service'
import { GameInstance, GameConfig } from '../../models'
import { CurrentGameInstance } from '../../game/current-game.service'
import { MdIconRegistry } from '@angular2-material/icon'

@Component({
  moduleId: module.id,
  selector: 'select-game',
  templateUrl: 'select-game.component.html',
  styleUrls: ['select-game.component.css' ],
  viewProviders: [MdIconRegistry]

})
export class SelectGameComponent implements OnInit {
	gameConfigs:Array<GameConfig>;

	gameInstances:Array<GameInstance>;
	

	constructor(
		private matesServices : MatesServices,
		private router : Router,
		private currentGameInstance : CurrentGameInstance,
		private mdIconRegistry:MdIconRegistry
	){

    	mdIconRegistry
	        .addSvgIcon('thumb-up', '/game-mates/icon/assets/thumbup-icon.svg')
	        .addSvgIconSetInNamespace('core', '/game-mates/icon/assets/core-icon-set.svg')
	        .registerFontClassAlias('fontawesome', 'fa');  
	}

	ngOnInit(){
		this.matesServices.getGameConfigs().subscribe(
                       gameConfigs => this.gameConfigs = gameConfigs,
                       error =>  console.log(error));
	}

	play(id:string){
	   console.log('play', id)

	   this.matesServices.getGameInstance(id).subscribe(
	   	gameInstance => {
	   		this.currentGameInstance.setCurrentInstance(gameInstance)
	   		let link = ['/game']
	   		this.router.navigate(link)
	   	},
	   	error => console.log(error)
	   )
	   
	   
	}
}

