import { Component, Input, OnInit } from '@angular/core';
import {GameOverType} from '../../../models'
@Component({
  moduleId: module.id,
  selector: 'game-over',
  templateUrl: 'game-over.component.html',
  styleUrls: ['game-over.component.css']
})
export class GameOverComponent implements OnInit {
  @Input() gameOverType:GameOverType;


  constructor() {}

  ngOnInit() {
  }

}
