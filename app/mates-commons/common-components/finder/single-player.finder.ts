/**
 * Created by josecullen on 17/07/16.
 */
import { Directive, Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/interval'
import { GameMatch } from '../../../models'
import { GameMatchServices } from '../../game-match.service'

@Component({
  selector: 'single-player-finder',
  template: `
  <finder 
    (finderEvent)="findMatches($event)" 
    [placeholder]="'Filtrar Partidas Individuales'">
    <items-founded>
    <div>
        <h4 md-subheader>{{gameMatchSelected.name}}</h4>
        <md-list>
            <md-list-item
                *ngFor="let gameMatch of gameMatches">
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
export class SinglePlayerFinder implements OnInit{
    @Output() onSelection:EventEmitter<GameMatch> = new EventEmitter<GameMatch>()
    
    gameMatches:Array<GameMatch> = new Array()
    gameMatchSelected:GameMatch = new GameMatch()

    constructor(private gameMatchService:GameMatchServices){}

    ngOnInit(){
        this.findMatches('')
    }

    findMatches(name:string){
        this.gameMatchService
            .getByNameMatching(name, 'isMultiPlayer=false')
            .subscribe(
                gameMatches => this.gameMatches = gameMatches,
                err         => console.log(err)
            )
    }

    selectGameMatch(gameMatch:GameMatch){
        this.onSelection.emit(gameMatch)
        this.gameMatchSelected = gameMatch
    }


}
