/**
 * Created by josecullen on 17/07/16.
 */
import { Component} from '@angular/core';
import { AuthService} from '../../auth.service'
import { AuthGuard} from '../../auth-guard.service'

@Component({
  moduleId: module.id,
  template: '<router-outlet></router-outlet>'
})
export class MenuOptionsOutlet {}



@Component({
  moduleId: module.id,
  selector: 'menu-options',
  templateUrl: 'menu-options.component.html',  
  styleUrls: ['../menu.component.css']
})
export class MenuOptionsComponent {
  constructor(private authService:AuthService, private authGuard:AuthGuard){}
  
  logout(){
    this.authService.logout()
    this.authGuard.checkLogin('/menu')
  }
}


