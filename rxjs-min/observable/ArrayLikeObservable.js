"use strict";var __extends=this&&this.__extends||function(e,r){function t(){this.constructor=e}for(var a in r)r.hasOwnProperty(a)&&(e[a]=r[a]);e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)},Observable_1=require("../Observable"),ScalarObservable_1=require("./ScalarObservable"),EmptyObservable_1=require("./EmptyObservable"),ArrayLikeObservable=function(e){function r(r,t){e.call(this),this.arrayLike=r,this.scheduler=t,t||1!==r.length||(this._isScalar=!0,this.value=r[0])}return __extends(r,e),r.create=function(e,t){var a=e.length;return 0===a?new EmptyObservable_1.EmptyObservable:1===a?new ScalarObservable_1.ScalarObservable(e[0],t):new r(e,t)},r.dispatch=function(e){var r=e.arrayLike,t=e.index,a=e.length,s=e.subscriber;if(!s.closed){if(t>=a)return void s.complete();s.next(r[t]),e.index=t+1,this.schedule(e)}},r.prototype._subscribe=function(e){var t=0,a=this,s=a.arrayLike,i=a.scheduler,n=s.length;if(i)return i.schedule(r.dispatch,0,{arrayLike:s,index:t,length:n,subscriber:e});for(var l=0;l<n&&!e.closed;l++)e.next(s[l]);e.complete()},r}(Observable_1.Observable);exports.ArrayLikeObservable=ArrayLikeObservable;