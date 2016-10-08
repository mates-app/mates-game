/**
 * Created by josecullen on 17/07/16.
 */
import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MatesServices } from '../../mates-commons/mates-game.service'
// import { GameInstance, GameConfig } from '../../models'
import { MdIconRegistry } from '@angular2-material/icon'
import {GameControl, GameInstance} from "torbi.ng2-choices-game/components";
import {GameConfig} from "../../models";

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
  isStarted:boolean = false;

	constructor(
		private matesServices : MatesServices,
		private router : Router,
		private gameControl:GameControl,
		private mdIconRegistry:MdIconRegistry
	){

    	mdIconRegistry
	        .addSvgIcon('thumb-up', '/game-mates/icon/assets/thumbup-icon.svg')
	        .addSvgIconSetInNamespace('core', '/game-mates/icon/assets/core-icon-set.svg')
	        .registerFontClassAlias('fontawesome', 'fa');
	}

	menu(){
		console.log('click')
		let link = ['/menu']
	   	this.router.navigate(link)
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
	   		this.gameControl.setGameInstance(gameInstance)
        this.gameControl.start()
        this.isStarted = true

        this.gameControl.onScoreChange()
          .subscribe(
            score =>{
              this.matesServices.pushScore(
                this.gameControl.getGameInstance().gameId,
                "57bccba3ee005b59204559a4",
                score.allScore())
              console.log('score', score.allScore())
            }

          )

	   		// let link = ['/game']
	   		// this.router.navigate(link)
	   	},
	   	error => console.log(error)
	   )


	}
}

