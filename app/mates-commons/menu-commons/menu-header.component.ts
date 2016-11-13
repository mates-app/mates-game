/**
 * Created by josecullen on 17/07/16. (click)="onBack.emit()"
 */
import { Directive, Component, Input, Output, EventEmitter } from '@angular/core';
import { MdIconRegistry } from "@angular/material";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'menu-header',
    template: `
    <md-toolbar>
        <span class="title">{{title}}</span>

        <a  md-button class="md-fab md-mini" 
            style="cursor:pointer" 
            (click)="back()" 
            *ngIf="showBackButton">
            <md-icon class="md-24" style="color:#921919;">keyboard_arrow_left</md-icon>
        </a>
    </md-toolbar>
  `,
    viewProviders: [MdIconRegistry],
    styles: [`
    
    span.title{
        width: 100% 
    }

    md-button{
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
