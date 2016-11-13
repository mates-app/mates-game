import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common'
import { MenuHeaderComponent} from './menu-header.component'
import { MaterialModule } from '@angular/material';


@NgModule({
  imports:      [ CommonModule, MaterialModule.forRoot() ],
  declarations: [ MenuHeaderComponent ],
  exports:      [ MenuHeaderComponent ],
  providers : [  ]
})
export class MenuCommonsModule { }
