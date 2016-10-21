import { NgModule }      from '@angular/core'
import { CommonModule } from '@angular/common'
import { MdInputModule } from '@angular2-material/input'
import { MdIconModule } from '@angular2-material/icon'
import { FinderComponent, ItemFounded } from './finder/finder.component'

@NgModule({
  imports:      [ 
    CommonModule, 
    MdInputModule, 
    MdIconModule ],
  declarations: [ 
    FinderComponent, 
    ItemFounded ],
  exports : [
    FinderComponent, 
    ItemFounded]
})
export class CommonComponents { }
