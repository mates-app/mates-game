/**
 * Created by josecullen on 17/07/16.
 */
import { Component, OnInit} from '@angular/core'
import { AuthService} from '../../auth.service'
import { AuthGuard} from '../../auth-guard.service'
import { GameMatch, User } from '../../models'
import { MatchType } from '../../mates-commons/common-components/finder/game-match.finder'
 
@Component({
  template: `
  <div style="height:100%">
    <menu-header [title]="'Tus Juegos'">
        <mates-content>
            <a md-button 
                routerLink="create">
                CREAR NUEVO
            </a>

            <game-match-finder
                [user]="user"
                [onlyAdmin]="user"
                (onSelection)="onSelection($event)">
            </game-match-finder>
            <a md-button 
                routerLink="{{gameMatch._id}}">
                EDITAR
            </a>
            {{gameMatch._id}}
        </mates-content>
    </menu-header>    
</div>
  `  
})
export class YourGamesView {
  user:User
  gameMatch:GameMatch = new GameMatch()

  constructor(
      private authService:AuthService, 
      private authGuard:AuthGuard){}
  
  ngOnInit(){
    this.user = this.authService.getUser()
  }

  onSelection(gameMatch:GameMatch){
    this.gameMatch = gameMatch
  }

}


