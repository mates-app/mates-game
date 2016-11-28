/**
 * Created by josecullen on 17/07/16. (click)="onBack.emit()"
 */
import { Directive, Component, Input, Output, EventEmitter } from '@angular/core';
import { MdIconRegistry } from "@angular/material";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'menu-header',
    template: `

    <md-sidenav-layout>
        <md-sidenav #start (open)="closeStartButton.focus()">
            <a md-button class="side-button" routerLink="singleplayer">Single Player</a>
            <a md-button class="side-button" routerLink="multiplayer">Multi Player</a>
            <a md-button class="side-button" (click)="logout()">Logout</a>
            <button md-button #closeStartButton (click)="start.close()">Cerrar</button>
        </md-sidenav>
        
        <md-toolbar>
            <a  md-button class="md-fab md-mini" 
                style="cursor:pointer" 
                (click)="start.open()">
                <md-icon class="md-24" style="color:#921919;">menu</md-icon>
            </a>
            <span class="title">{{title}}</span>
            <a  md-button class="md-fab md-mini" 
                style="cursor:pointer" 
                (click)="back()" 
                *ngIf="showBackButton">
                <md-icon class="md-24" style="color:#921919;">keyboard_arrow_left</md-icon>
            </a>
        </md-toolbar>

        <ng-content select="mates-content"></ng-content>

    </md-sidenav-layout>


    
  `,
    viewProviders: [MdIconRegistry],
    styles: [`
    
    span.title{
        width: 100%;
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
        private route: ActivatedRoute) {
            console.log('header',this.route.url)

        }

    
  back(){
    this.router.navigate([this.routeBack, {  }], { relativeTo: this.route });
  }

}

@Directive({
  selector: 'mates-content'
})
export class MatesContent {}
