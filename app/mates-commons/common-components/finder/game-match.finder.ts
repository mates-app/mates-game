/**
 * Created by josecullen on 17/07/16.
 */
import { Directive, Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/interval'
import { GameMatch, User } from '../../../models'
import { GameMatchServices } from '../../game-match.service'

@Component({
  selector: 'game-match-finder',
  template: `
  <finder 
    (finderEvent)="findMatches($event)" 
    [placeholder]="'Filtrar Partidas Multijugador'">
    <items-founded>
    <div>
        <h4 md-subheader>{{gameMatchSelected.name}}</h4>
        <div *ngIf="matches.privates.length > 0">
            <h6>Privados</h6>
            <md-list>
                <md-list-item
                    *ngFor="let gameMatch of matches.privates">
                    <a md-button (click)="selectGameMatch(gameMatch)">
                        {{gameMatch.name}}
                    </a>
                </md-list-item>
            </md-list>    
        </div>
        <div *ngIf="matches.publics.length > 0">
            <h6>Públicos</h6>
            <md-list>
                <md-list-item
                    *ngFor="let gameMatch of matches.publics">
                    <a md-button (click)="selectGameMatch(gameMatch)">
                        {{gameMatch.name}}
                    </a>
                </md-list-item>
            </md-list>    
        </div>
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
export class GameMatchFinder implements OnInit {
    @Input()  matchType:string = MatchType.BOTH
    @Input()  onlyAdmin:boolean = false
    @Input()  user:User = new User()
    @Output() onSelection:EventEmitter<GameMatch> = new EventEmitter<GameMatch>()
    
    matches:MatchLists = new MatchLists()
    gameMatchSelected:GameMatch = new GameMatch()

    constructor(private gameMatchService:GameMatchServices){}

    ngOnInit(){
        this.findMatches('')
    }

    findMatches(name:string){
        this.gameMatchService
            .getByNameMatching(name, this.resolveQuery())
            .subscribe(
                gameMatches => {
                    this.matches = new MatchFilter()
                        .withList(gameMatches)
                        .withMatchType(this.matchType)
                        .withOnlyAdmin(this.onlyAdmin)
                        .withUser(this.user)
                        .filter()                       
                },
                err         => console.log(err)
            )
    }

    resolveQuery():string{
        return this.matchType === MatchType.BOTH
                ? ''
                : this.matchType === MatchType.MULTI_PLAYER
                    ? 'isMultiPlayer=true'
                    : 'isMultiPlayer=false'
    }


    selectGameMatch(gameMatch:GameMatch){
        this.onSelection.emit(gameMatch)
        this.gameMatchSelected = gameMatch
    }





}


class MatchFilter {
    private list:Array<GameMatch>
    private matchType:MatchType = MatchType.BOTH
    private onlyAdmin:boolean = false
    private user:User 

    public withList(list:Array<GameMatch>):MatchFilter{
        this.list = list
        return this
    }

    public withMatchType(matchType:MatchType):MatchFilter{
        this.matchType = matchType
        return this
    }
    
    public withOnlyAdmin(onlyAdmin:boolean):MatchFilter{
        this.onlyAdmin = onlyAdmin
        return this
    }

    public withUser(user:User):MatchFilter{
        this.user = user
        return this
    }

    public filter():MatchLists{
        let matchLists:MatchLists = new MatchLists()
                
        matchLists.privates = this.list.filter(this.privateFilter)
        matchLists.publics  = this.list.filter(this.publicFilter)

        if(this.onlyAdmin){
            matchLists.privates = matchLists.privates
                    .filter(this.onlyAdminFilter)
            matchLists.publics = matchLists.publics
                    .filter(this.onlyAdminFilter)
        }

        if(this.matchType === MatchType.MULTI_PLAYER){
            matchLists.privates = matchLists.privates
                    .filter(this.multiplayerFilter)
        }

        return matchLists
    }

    private onlyAdminFilter = (match:GameMatch)   => this.user.username === match.author.username     
    private privateFilter = (match:GameMatch)     => match.isPublic === false 
    private publicFilter = (match:GameMatch)      => match.isPublic === true
    private multiplayerFilter = (match:GameMatch) => {
        return match.author.username === this.user.username
            || match.users.some(user => this.user.username === user.username)
    }
}

class MatchLists{
    constructor(
        public privates:Array<GameMatch> = [],
        public publics: Array<GameMatch> = []){}
}

export class MatchType{
    static SINGLE_PLAYER:string = "SINGLE_PLAYER"
    static MULTI_PLAYER:string = "MULTI_PLAYER"
    static BOTH:string = "BOTH"
}