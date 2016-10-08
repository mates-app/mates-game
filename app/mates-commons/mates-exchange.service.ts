import { Injectable } from '@angular/core';
import { GameConfig, GameMatch } from '../models';


@Injectable()
export class MatesExchangeServices{

    selectedGameMatch:GameMatch

    getSelectedGameMatch():GameMatch{
        return this.selectedGameMatch
    }

    setSelectedGameMatch(gameMatch:GameMatch){
        this.selectedGameMatch = gameMatch
    }



}