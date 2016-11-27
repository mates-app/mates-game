import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common'
import { MatesServices } from './mates-game.service'
import { MatesExchangeServices } from './mates-exchange.service'
import { UserServices} from './users.service'
import { GameMatchServices } from './game-match.service'

@NgModule({
  imports:      [ CommonModule ],
  declarations: [  ],
  providers : [ 
    MatesServices, 
    MatesExchangeServices, 
    UserServices,
    GameMatchServices
  ]
})
export class MatesCommonsModule { }
