import {Component, Input, Output, EventEmitter} from '@angular/core';
import { GameOverType } from '../../../models'

@Component({
	selector : 'game-over',
	template: `
	
	<h1>Game Over {{gameOverType}}</h1>
	<a routerLink="">Menu</a>
	<a routerLink="../select-game">Select Game</a>
	`
})
export class GameOverComponent{
	@Input() gameOverType:GameOverType


}