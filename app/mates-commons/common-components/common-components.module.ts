import { NgModule }      from '@angular/core'
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common'
import { FinderComponent, ItemFounded } from './finder/finder.component'

@NgModule({
  imports:      [ 
    MaterialModule.forRoot(),
    CommonModule],
  declarations: [ 
    FinderComponent, 
    ItemFounded ],
  exports : [
    FinderComponent, 
    ItemFounded]
})
export class CommonComponents { }
