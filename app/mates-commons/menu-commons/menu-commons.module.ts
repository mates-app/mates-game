import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common'
import { MenuHeaderComponent, MatesContent} from './menu-header.component'
import { MaterialModule } from '@angular/material';


@NgModule({
  imports:      [ CommonModule, MaterialModule.forRoot() ],
  declarations: [ MenuHeaderComponent, MatesContent ],
  exports:      [ MenuHeaderComponent, MatesContent],
  providers : [  ]
})
export class MenuCommonsModule { }
