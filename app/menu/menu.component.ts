/**
 * Created by josecullen on 17/07/16.
 */
import { Component, OnInit} from '@angular/core'
import { AuthService} from '../auth.service'
import { AuthGuard} from '../auth-guard.service'
import { GameMatch, User } from '../models'
import { MatchType } from '../mates-commons/common-components/finder/game-match.finder'
 
@Component({
  template: `
  <div style="height:100%">
    <menu-header [title]="'Menú'" [showBackButton]="false">
        <mates-content>
            <md-tab-group>
                <md-tab label="One" style="width:50%">
                    <template md-tab-label>
                        Individual    
                    </template>        
                    <template md-tab-content>
                        <game-match-finder
                            [matchType]="singlePlayerType"
                            [user]="user"
                            (onSelection)="onSelection($event)">
                        </game-match-finder>
                        <a md-button 
                            (click)="play()"
                            *ngIf="gameMatch !== undefined">Jugar
                        </a>        
                    </template>
                </md-tab>
                <md-tab label="Two" style="width:50%">
                    <template md-tab-label>
                        Multijugador    
                    </template>
                    <template md-tab-content>
                        <game-match-finder
                            [matchType]="multiPlayerType"
                            [user]="user"
                            (onSelection)="onSelection($event)">
                        </game-match-finder>
                        <a md-button (click)="play()">Jugar</a>        
                    </template>
                </md-tab>
            </md-tab-group>
        </mates-content>
    </menu-header>    
</div>
  `  
})
export class MenuComponent {
  singlePlayerType:MatchType = MatchType.SINGLE_PLAYER
  multiPlayerType:MatchType = MatchType.MULTI_PLAYER

  user:User
  gameMatch:GameMatch = undefined

  constructor(private authService:AuthService, private authGuard:AuthGuard){}
  
  ngOnInit(){
    this.user = this.authService.getUser()
  }

  onSelection(gameMatch:GameMatch){
    this.gameMatch = gameMatch
  }

}


