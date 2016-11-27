/**
 * Created by josecullen on 17/07/16.
 */
import { Directive, Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/interval'
import { GameMatch, User } from '../../../models'
import { GameMatchServices } from '../../game-match.service'

@Component({
  selector: 'multi-player-finder',
  template: `
  <finder 
    (finderEvent)="findMatches($event)" 
    [placeholder]="'Filtrar Partidas Multijugador'">
    <items-founded>
    <div>
        <h4 md-subheader>{{gameMatchSelected.name}}</h4>
        <h6>Privados</h6>
        <md-list>
            <md-list-item
                *ngFor="let gameMatch of gamePrivateMatches">
                <a md-button (click)="selectGameMatch(gameMatch)">{{gameMatch.name}}</a>
            </md-list-item>
        </md-list>    
        <h6>Públicos</h6>
        <md-list>
            <md-list-item
                *ngFor="let gameMatch of gamePublicMatches">
                <a md-button (click)="selectGameMatch(gameMatch)">{{gameMatch.name}}</a>
            </md-list-item>
        </md-list>    
        <br>
    </div>
    </items-founded>
</finder>

  `,
  styles: [`
    md-input {
        width: 100%;
        margin-top: 10px;
    }

    a {
        width: 100%;
    }
  `]

})
export class MultiPlayerFinder implements OnInit {
    @Input()  user:User 
    @Output() onSelection:EventEmitter<GameMatch> = new EventEmitter<GameMatch>()
    
    gamePrivateMatches:Array<GameMatch> = new Array()
    gamePublicMatches:Array<GameMatch> = new Array()
    gameMatchSelected:GameMatch = new GameMatch()

    constructor(private gameMatchService:GameMatchServices){

    }

    ngOnInit(){
        this.findMatches('')
    }

    findMatches(name:string){
        
        this.gameMatchService
            .getByNameMatching(name, 'isMultiplayer=true')
            .subscribe(
                gameMatches => {
                    this.gamePublicMatches = gameMatches
                        .filter(gameMatch => gameMatch.isPublic === true)
                    
                    if(this.user !== null && this.user !== undefined){
                        this.gamePrivateMatches = gameMatches
                            .filter(gameMatch => gameMatch.isPublic === false)
                            .filter(gameMatch => gameMatch.author.username === this.user.username
                                             || gameMatch.users.some(user => this.user.username === user.username))
                    }
                    

                },
                err         => console.log(err)
            )
    }


    selectGameMatch(gameMatch:GameMatch){
        this.onSelection.emit(gameMatch)
        this.gameMatchSelected = gameMatch
    }


}
