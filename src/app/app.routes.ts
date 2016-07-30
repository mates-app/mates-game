/**
 * Created by josecullen on 17/07/16.
 */
import { provideRouter, RouterConfig }  from '@angular/router';
import {GameMatesAppComponent} from './views/game-view/game-view.component'
import {Login} from './views/login/login.component'
import {Menu} from './views/menu/menu.component'
import {SelectGame} from "./views/select-game/select-game.component";

const routes: RouterConfig = [

  {
    path: 'login',
    component: Login
  },
  {
    path: 'menu',
    component: Menu
  },
  {
    path: 'select-game',
    component: SelectGame
  },
  {
    path: 'game-playing',
    component: GameMatesAppComponent
  },
  {
    path: '',
    redirectTo: '/login'
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
