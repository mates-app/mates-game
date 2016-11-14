"use strict";var __extends=this&&this.__extends||function(e,s){function r(){this.constructor=e}for(var i in s)s.hasOwnProperty(i)&&(e[i]=s[i]);e.prototype=null===s?Object.create(s):(r.prototype=s.prototype,new r)},Observable_1=require("../Observable"),asap_1=require("../scheduler/asap"),isNumeric_1=require("../util/isNumeric"),SubscribeOnObservable=function(e){function s(s,r,i){void 0===r&&(r=0),void 0===i&&(i=asap_1.asap),e.call(this),this.source=s,this.delayTime=r,this.scheduler=i,(!isNumeric_1.isNumeric(r)||r<0)&&(this.delayTime=0),i&&"function"==typeof i.schedule||(this.scheduler=asap_1.asap)}return __extends(s,e),s.create=function(e,r,i){return void 0===r&&(r=0),void 0===i&&(i=asap_1.asap),new s(e,r,i)},s.dispatch=function(e){var s=e.source,r=e.subscriber;return s.subscribe(r)},s.prototype._subscribe=function(e){var r=this.delayTime,i=this.source,t=this.scheduler;return t.schedule(s.dispatch,r,{source:i,subscriber:e})},s}(Observable_1.Observable);exports.SubscribeOnObservable=SubscribeOnObservable;