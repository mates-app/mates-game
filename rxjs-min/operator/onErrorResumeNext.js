"use strict";function onErrorResumeNext(){for(var r=[],e=0;e<arguments.length;e++)r[e-0]=arguments[e];return 1===r.length&&isArray_1.isArray(r[0])&&(r=r[0]),this.lift(new OnErrorResumeNextOperator(r))}function onErrorResumeNextStatic(){for(var r=[],e=0;e<arguments.length;e++)r[e-0]=arguments[e];var t=null;return 1===r.length&&isArray_1.isArray(r[0])&&(r=r[0]),t=r.shift(),new FromObservable_1.FromObservable(t,null).lift(new OnErrorResumeNextOperator(r))}var __extends=this&&this.__extends||function(r,e){function t(){this.constructor=r}for(var o in e)e.hasOwnProperty(o)&&(r[o]=e[o]);r.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)},FromObservable_1=require("../observable/FromObservable"),isArray_1=require("../util/isArray"),OuterSubscriber_1=require("../OuterSubscriber"),subscribeToResult_1=require("../util/subscribeToResult");exports.onErrorResumeNext=onErrorResumeNext,exports.onErrorResumeNextStatic=onErrorResumeNextStatic;var OnErrorResumeNextOperator=function(){function r(r){this.nextSources=r}return r.prototype.call=function(r,e){return e._subscribe(new OnErrorResumeNextSubscriber(r,this.nextSources))},r}(),OnErrorResumeNextSubscriber=function(r){function e(e,t){r.call(this,e),this.destination=e,this.nextSources=t}return __extends(e,r),e.prototype.notifyError=function(r,e){this.subscribeToNextSource()},e.prototype.notifyComplete=function(r){this.subscribeToNextSource()},e.prototype._error=function(r){this.subscribeToNextSource()},e.prototype._complete=function(){this.subscribeToNextSource()},e.prototype.subscribeToNextSource=function(){var r=this.nextSources.shift();r?this.add(subscribeToResult_1.subscribeToResult(this,r)):this.destination.complete()},e}(OuterSubscriber_1.OuterSubscriber);