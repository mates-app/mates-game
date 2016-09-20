/**
 * Created by josecullen on 11/09/16.
 */

import {Component} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'public-game-menu',
  template: `
<router-outlet></router-outlet>
`
})
export class PublicGameMenu{

}



@Component({
  moduleId: module.id,
  selector: 'public-game-menu',
  template: `
<a md-raised-button routerLink="single">Single Game</a>
<a md-raised-button routerLink="multiplayer">Multiplayer Game</a>

`
})
export class PublicGameMenuList{

}


