/**
 * Created by josecullen on 17/07/16.
 */
import { Component} from '@angular/core';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list'

@Component({
  moduleId: module.id,
  selector: 'menu-options',
  templateUrl: 'menu-options.component.html',
  directives: [MD_LIST_DIRECTIVES],
  styleUrls: ['../menu.component.css']
})
export class MenuOptionsComponent {}
