import { NgModule }      from '@angular/core'
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common'
import { FinderComponent, ItemFounded } from './finder/finder.component'
import { MatesCommonsModule } from '../mates-commons.module'
import { SinglePlayerFinder } from './finder/single-player.finder'
import { MultiPlayerFinder } from './finder/multi-player.finder'

@NgModule({
  imports: [ 
    MaterialModule.forRoot(),
    MatesCommonsModule,
    CommonModule
  ],
  declarations: [ 
    FinderComponent, 
    ItemFounded,
    SinglePlayerFinder,
    MultiPlayerFinder
  ],
  exports : [
    FinderComponent, 
    ItemFounded,
    SinglePlayerFinder,
    MultiPlayerFinder
  ]
})
export class CommonComponents { }

