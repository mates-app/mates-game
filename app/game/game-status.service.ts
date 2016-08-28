import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {TimerService} from './timer.service';
import * as models from './models';

@Injectable()
export class GameStatusService{
  private gameLevels:Array<models.GameLevel>;
  // public subjectScore:Subject<number> = new Subject<number>();
  public subjectScore:Subject<models.Score> = new Subject<models.Score>();
  public subjectLevel:Subject<number> = new Subject<number>();
  public subjectLives:Subject<number> = new Subject<number>();
  public subjectProblem:Subject<number> = new Subject<number>();
  public subjectGameOver:Subject<models.GameOverType> = new Subject<models.GameOverType>();
  public level:number = 0;
  public problem:number = 0;
  public score:number = 0;
  public lives:number = 3;

  constructor(
      private timer:TimerService
    ){
      timer.gameTimer.timeObservable.subscribe(time => this.checkGameOver());
      this.subjectGameOver.subscribe(gameOverType => console.log("Game Over", gameOverType));
  }

  startGame(gameLevels:Array<models.GameLevel>){
    this.gameLevels = gameLevels;
    this.subjectLevel.next(this.level);
    this.subjectProblem.next(this.problem);
    this.subjectLives.next(this.lives);
    this.timer.gameTimer.start();
    this.timer.problemTimer.start();
    let scoreConfig:models.ScoreConfig = this.getActualScoreConfig();
    this.timer.setProblemTimerConfig(scoreConfig.preCount, scoreConfig.withTime);
  }

  pauseGame(){
    this.timer.gameTimer.stop();
    this.timer.problemTimer.stop();
    this.timer.extraTimer.stop();
  }

  resumeGame(){
    this.timer.gameTimer.start();
    this.timer.problemTimer.start();
    this.timer.extraTimer.start();
  }

  onAnswer(isCorrect:boolean){
    if(isCorrect){
      this.setScoreAndTime();
    }else{
      this.subjectLives.next(--this.lives);
      this.checkGameOver();
    }
    this.nextProblem();
  }

  setScoreAndTime(){
    let scoreConfig:models.ScoreConfig = this.getActualScoreConfig();
    let scoreToAdd:number = scoreConfig.baseScore;
    let extras:models.ExtraScore =
          scoreConfig.extras
            .filter(extra => this.timer.problemTimer.time <= extra.thresholdTime )
            .reduce(
              ((initial, actual) => initial.thresholdTime < actual.thresholdTime ? initial : actual),
              new models.ExtraScore()
            );
    // scoreToAdd += extras.extraScore;
    this.timer.gameTimer.plusTime(extras.extraTime);
    // this.subjectScore.next(this.score += scoreToAdd);
    this.subjectScore.next(new models.Score(scoreToAdd, extras.extraScore));
  }

  nextProblem(){
    if(this.gameLevels[this.level].gameProblems.length-1 > this.problem){
      this.subjectProblem.next(++this.problem);
    }else{
      this.nextLevel();
    }

    let scoreConfig:models.ScoreConfig = this.getActualScoreConfig();
    this.timer.setProblemTimerConfig(scoreConfig.preCount, scoreConfig.withTime);
  }

  nextLevel(){
    this.subjectProblem.next(this.problem = 0);
    this.subjectLevel.next(++this.level);
    this.checkGameOver();
  }

  private checkGameOver(){
    if(this.gameLevels){
      if(this.lives <= 0){
        this.pauseGame()
        this.subjectGameOver.next(models.GameOverType.LIVES);
      }else if(this.level == this.gameLevels.length){
        this.pauseGame()
        this.subjectGameOver.next(models.GameOverType.LEVELS);
      }else if(this.timer.gameTimer.time <= 0){
        this.pauseGame()
        this.subjectGameOver.next(models.GameOverType.TIME);
      }
    }
  }

  private getActualProblem():models.GameProblem{
    return this.gameLevels[this.level].gameProblems[this.problem];
  }
  private getActualLevel():models.GameLevel{
    return this.gameLevels[this.level];
  }
  private getActualScoreConfig():models.ScoreConfig{
    return this.getActualLevel().scoreConfig;
  }





}


/*


    console.log(scoreConfig.extras
                              .filter(extra => this.timer.problemTimer.time <= extra.thresholdTime ));
    console.log("problemTimer: ",this.timer.problemTimer);
    console.log("gameTimer: ",this.timer.gameTimer);

    console.log(extras);
*/
