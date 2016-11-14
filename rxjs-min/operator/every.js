"use strict";function every(t,e){return this.lift(new EveryOperator(t,e,this))}var __extends=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},Subscriber_1=require("../Subscriber");exports.every=every;var EveryOperator=function(){function t(t,e,r){this.predicate=t,this.thisArg=e,this.source=r}return t.prototype.call=function(t,e){return e._subscribe(new EverySubscriber(t,this.predicate,this.thisArg,this.source))},t}(),EverySubscriber=function(t){function e(e,r,i,s){t.call(this,e),this.predicate=r,this.thisArg=i,this.source=s,this.index=0,this.thisArg=i||this}return __extends(e,t),e.prototype.notifyComplete=function(t){this.destination.next(t),this.destination.complete()},e.prototype._next=function(t){var e=!1;try{e=this.predicate.call(this.thisArg,t,this.index++,this.source)}catch(t){return void this.destination.error(t)}e||this.notifyComplete(!1)},e.prototype._complete=function(){this.notifyComplete(!0)},e}(Subscriber_1.Subscriber);