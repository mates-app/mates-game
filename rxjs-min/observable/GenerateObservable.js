"use strict";var __extends=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},Observable_1=require("../Observable"),isScheduler_1=require("../util/isScheduler"),selfSelector=function(e){return e},GenerateObservable=function(e){function t(t,r,i,s,o){e.call(this),this.initialState=t,this.condition=r,this.iterate=i,this.resultSelector=s,this.scheduler=o}return __extends(t,e),t.create=function(e,r,i,s,o){return 1==arguments.length?new t(e.initialState,e.condition,e.iterate,e.resultSelector||selfSelector,e.scheduler):void 0===s||isScheduler_1.isScheduler(s)?new t(e,r,i,selfSelector,s):new t(e,r,i,s,o)},t.prototype._subscribe=function(e){var r=this.initialState;if(this.scheduler)return this.scheduler.schedule(t.dispatch,0,{subscriber:e,iterate:this.iterate,condition:this.condition,resultSelector:this.resultSelector,state:r});for(var i=this,s=i.condition,o=i.resultSelector,c=i.iterate;;){if(s){var n=void 0;try{n=s(r)}catch(t){return void e.error(t)}if(!n){e.complete();break}}var a=void 0;try{a=o(r)}catch(t){return void e.error(t)}if(e.next(a),e.closed)break;try{r=c(r)}catch(t){return void e.error(t)}}},t.dispatch=function(e){var t=e.subscriber,r=e.condition;if(!t.closed){if(e.needIterate)try{e.state=e.iterate(e.state)}catch(e){return void t.error(e)}else e.needIterate=!0;if(r){var i=void 0;try{i=r(e.state)}catch(e){return void t.error(e)}if(!i)return void t.complete();if(t.closed)return}var s;try{s=e.resultSelector(e.state)}catch(e){return void t.error(e)}if(!t.closed&&(t.next(s),!t.closed))return this.schedule(e)}},t}(Observable_1.Observable);exports.GenerateObservable=GenerateObservable;