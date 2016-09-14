/**
 * Created by josecullen on 11/09/16.
 */

import {Component} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'public-game-menu',
  template: `
<a md-raised-button routerLink="single-game">Single Game</a>
<a md-raised-button routerLink="multi-player-game" [disabled]="true">Multiplayer Game</a>

`
})
export class PublicGameMenu{

}
