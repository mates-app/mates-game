/**
 * Created by josecullen on 17/07/16. (click)="onBack.emit()"
 */
import { Directive, Component, Input, Output, EventEmitter } from '@angular/core';
import { MdIconRegistry } from "@angular/material";
import {Router, ActivatedRoute} from "@angular/router";
import { AuthService} from '../../auth.service'
import { AuthGuard} from '../../auth-guard.service'

@Component({
    selector: 'menu-header',
    template: `
    <md-sidenav-layout>
        <md-sidenav #start (open)="closeStartButton.focus()">
            <a  md-button 
                (click)="navigate('')"
                class="side-button">Home
            </a>
            <a  md-button 
                (click)="navigate('your-games')"
                class="side-button">Tus Juegos
            </a>
            <a  md-button 
                class="side-button" 
                (click)="logout()">Logout
            </a>
            <a  md-button 
                #closeStartButton
                class="side-button" 
                (click)="start.close()">Cerrar</a>
        </md-sidenav>
        
        <md-toolbar>
            <a  md-mini-fab class="md-fab md-mini" 
                style="cursor:pointer" 
                (click)="start.open()">
                <md-icon class="md-24" style="color:#921919;">menu</md-icon>
            </a>
            <span class="title">{{title}}</span>
        </md-toolbar>

        <ng-content select="mates-content"></ng-content>
        
    </md-sidenav-layout>
  `,
    viewProviders: [MdIconRegistry],
    styles: [`
    
    span.title{
        width: 100%;
        font-size: 16px;
    }

    a.side-button {
        min-width: 200px;
        display: block;   
        text-align: left;
    }

    md-button{
        width: 100%;
        text-align: right;
    }

    md-icon {
        background-repeat: no-repeat;
        display: inline-block;
        fill: currentColor;
        height: 24px;
        width: 24px;
    }

    @font-face {
        font-family: 'Material Icons';
        font-style: normal;
        font-weight: 400;
        src: local('Material Icons'), local('MaterialIcons-Regular');
    }

    .material-icons {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        -webkit-font-feature-settings: 'liga';
        -webkit-font-smoothing: antialiased;
    }

    `]

})
export class MenuHeaderComponent {
    @Input() title: string = ""
    @Input() showBackButton: boolean = true
    @Output() onBack: EventEmitter<any> = new EventEmitter<any>()
    @Input() routeBack:string = "../"

    constructor(        
        private mdIconRegistry: MdIconRegistry,
        private router : Router,
        private route: ActivatedRoute,
        private authService:AuthService, 
        private authGuard:AuthGuard) {
            console.log('header',this.route.url)
        }

  navigate(to:string){
    this.router.navigate(['menu/'+to, {}],{ relativeTo: this.route.root });  
  }      

  back(){
    this.router.navigate([this.routeBack, {  }], { relativeTo: this.route });
  }

  logout(){
    this.authService.logout()
    this.authGuard.checkLogin('/menu')
  }

}

@Directive({
  selector: 'mates-content'
})
export class MatesContent {}
