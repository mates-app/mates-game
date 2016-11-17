"use strict";function filter(t,r){return this.lift(new FilterOperator(t,r))}var __extends=this&&this.__extends||function(t,r){function i(){this.constructor=t}for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e]);t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)},Subscriber_1=require("../Subscriber");exports.filter=filter;var FilterOperator=function(){function t(t,r){this.predicate=t,this.thisArg=r}return t.prototype.call=function(t,r){return r._subscribe(new FilterSubscriber(t,this.predicate,this.thisArg))},t}(),FilterSubscriber=function(t){function r(r,i,e){t.call(this,r),this.predicate=i,this.thisArg=e,this.count=0,this.predicate=i}return __extends(r,t),r.prototype._next=function(t){var r;try{r=this.predicate.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}r&&this.destination.next(t)},r}(Subscriber_1.Subscriber);