import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common'
import { MatesServices } from './mates-game.service'
import { MatesExchangeServices } from './mates-exchange.service'
import { UserServices} from './users.service'

@NgModule({
  imports:      [ CommonModule ],
  declarations: [  ],
  providers : [ MatesServices, MatesExchangeServices, UserServices ]
})
export class MatesCommonsModule { }
