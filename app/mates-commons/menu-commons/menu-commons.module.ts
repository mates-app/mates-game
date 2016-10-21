import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common'
import { MenuHeaderComponent} from './menu-header.component'
import { MdButtonModule } from '@angular2-material/button';
import { MdToolbarModule } from '@angular2-material/toolbar'
import { MdIconModule } from '@angular2-material/icon'


@NgModule({
  imports:      [ CommonModule, MdButtonModule, MdIconModule, MdToolbarModule ],
  declarations: [ MenuHeaderComponent ],
  exports:      [ MenuHeaderComponent ],
  providers : [  ]
})
export class MenuCommonsModule { }
