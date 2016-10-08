/**
 * Created by josecullen on 11/09/16.
 */

import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {MdIconRegistry} from "@angular2-material/icon";

@Component({
  moduleId: module.id,
  selector: 'public-game-menu',
  template: `
  <md-toolbar>
    <span class="title">Selecciona un juego</span>
    <a md-button class="md-fab md-mini" style="cursor:pointer" (click)="menu()">
	    <md-icon class="md-24" style="color:#921919;">keyboard_arrow_left</md-icon>
    </a>
  </md-toolbar>

<router-outlet></router-outlet>
`,
viewProviders: [MdIconRegistry]
})
export class PublicGameMenu{
  
  constructor(private router:Router){

  }

  menu(){
    console.log('click')
    let link = ['/login']
    this.router.navigate(link)
  }  
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


