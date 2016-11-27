/**
 * Created by josecullen on 17/07/16.
 */
import { Component, OnInit} from '@angular/core';
import { AuthService} from '../../auth.service'
import { AuthGuard} from '../../auth-guard.service'
import { GameMatch, User } from '../../models'


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
export class MenuOptionsComponent implements OnInit {
  user:User
  gameMatch:GameMatch = undefined

  constructor(private authService:AuthService, private authGuard:AuthGuard){}
  
  ngOnInit(){
    this.user = this.authService.getUser()
  }

  logout(){
    this.authService.logout()
    this.authGuard.checkLogin('/menu')
  }

  onSelection(gameMatch:GameMatch){
    this.gameMatch = gameMatch
  }
}


