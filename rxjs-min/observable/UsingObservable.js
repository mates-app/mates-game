"use strict";var __extends=this&&this.__extends||function(r,e){function t(){this.constructor=r}for(var s in e)e.hasOwnProperty(s)&&(r[s]=e[s]);r.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)},Observable_1=require("../Observable"),subscribeToResult_1=require("../util/subscribeToResult"),OuterSubscriber_1=require("../OuterSubscriber"),UsingObservable=function(r){function e(e,t){r.call(this),this.resourceFactory=e,this.observableFactory=t}return __extends(e,r),e.create=function(r,t){return new e(r,t)},e.prototype._subscribe=function(r){var e,t=this,s=t.resourceFactory,i=t.observableFactory;try{return e=s(),new UsingSubscriber(r,e,i)}catch(e){r.error(e)}},e}(Observable_1.Observable);exports.UsingObservable=UsingObservable;var UsingSubscriber=function(r){function e(e,t,s){r.call(this,e),this.resource=t,this.observableFactory=s,e.add(t),this.tryUse()}return __extends(e,r),e.prototype.tryUse=function(){try{var r=this.observableFactory.call(this,this.resource);r&&this.add(subscribeToResult_1.subscribeToResult(this,r))}catch(r){this._error(r)}},e}(OuterSubscriber_1.OuterSubscriber);