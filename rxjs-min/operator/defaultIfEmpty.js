"use strict";function defaultIfEmpty(t){return void 0===t&&(t=null),this.lift(new DefaultIfEmptyOperator(t))}var __extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},Subscriber_1=require("../Subscriber");exports.defaultIfEmpty=defaultIfEmpty;var DefaultIfEmptyOperator=function(){function t(t){this.defaultValue=t}return t.prototype.call=function(t,e){return e._subscribe(new DefaultIfEmptySubscriber(t,this.defaultValue))},t}(),DefaultIfEmptySubscriber=function(t){function e(e,i){t.call(this,e),this.defaultValue=i,this.isEmpty=!0}return __extends(e,t),e.prototype._next=function(t){this.isEmpty=!1,this.destination.next(t)},e.prototype._complete=function(){this.isEmpty&&this.destination.next(this.defaultValue),this.destination.complete()},e}(Subscriber_1.Subscriber);