"use strict";var __extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},AsyncAction_1=require("./AsyncAction"),AsyncScheduler_1=require("./AsyncScheduler"),VirtualTimeScheduler=function(t){function e(e,i){var r=this;void 0===e&&(e=VirtualAction),void 0===i&&(i=Number.POSITIVE_INFINITY),t.call(this,e,function(){return r.frame}),this.maxFrames=i,this.frame=0,this.index=-1}return __extends(e,t),e.prototype.flush=function(){for(var t,e,i=this,r=i.actions,n=i.maxFrames;(e=r.shift())&&(this.frame=e.delay)<=n&&!(t=e.execute(e.state,e.delay)););if(t){for(;e=r.shift();)e.unsubscribe();throw t}},e.frameTimeFactor=10,e}(AsyncScheduler_1.AsyncScheduler);exports.VirtualTimeScheduler=VirtualTimeScheduler;var VirtualAction=function(t){function e(e,i,r){void 0===r&&(r=e.index+=1),t.call(this,e,i),this.scheduler=e,this.work=i,this.index=r,this.index=e.index=r}return __extends(e,t),e.prototype.schedule=function(i,r){return void 0===r&&(r=0),this.id?this.add(new e(this.scheduler,this.work)).schedule(i,r):t.prototype.schedule.call(this,i,r)},e.prototype.requestAsyncId=function(t,i,r){void 0===r&&(r=0),this.delay=t.frame+r;var n=t.actions;return n.push(this),n.sort(e.sortActions),!0},e.prototype.recycleAsyncId=function(t,e,i){void 0===i&&(i=0)},e.sortActions=function(t,e){return t.delay===e.delay?t.index===e.index?0:t.index>e.index?1:-1:t.delay>e.delay?1:-1},e}(AsyncAction_1.AsyncAction);exports.VirtualAction=VirtualAction;