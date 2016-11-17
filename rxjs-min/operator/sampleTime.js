"use strict";function sampleTime(e,t){return void 0===t&&(t=async_1.async),this.lift(new SampleTimeOperator(e,t))}function dispatchNotification(e){var t=e.subscriber,i=e.period;t.notifyNext(),this.schedule(e,i)}var __extends=this&&this.__extends||function(e,t){function i(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)},Subscriber_1=require("../Subscriber"),async_1=require("../scheduler/async");exports.sampleTime=sampleTime;var SampleTimeOperator=function(){function e(e,t){this.period=e,this.scheduler=t}return e.prototype.call=function(e,t){return t._subscribe(new SampleTimeSubscriber(e,this.period,this.scheduler))},e}(),SampleTimeSubscriber=function(e){function t(t,i,s){e.call(this,t),this.period=i,this.scheduler=s,this.hasValue=!1,this.add(s.schedule(dispatchNotification,i,{subscriber:this,period:i}))}return __extends(t,e),t.prototype._next=function(e){this.lastValue=e,this.hasValue=!0},t.prototype.notifyNext=function(){this.hasValue&&(this.hasValue=!1,this.destination.next(this.lastValue))},t}(Subscriber_1.Subscriber);