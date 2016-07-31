/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { GameOverComponent } from './game-over.component';

describe('Component: GameOver', () => {
  it('should create an instance', () => {
    let component = new GameOverComponent();
    expect(component).toBeTruthy();
  });
});
