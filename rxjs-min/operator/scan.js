"use strict";function scan(t,e){return this.lift(new ScanOperator(t,e))}var __extends=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},Subscriber_1=require("../Subscriber");exports.scan=scan;var ScanOperator=function(){function t(t,e){this.accumulator=t,this.seed=e}return t.prototype.call=function(t,e){return e._subscribe(new ScanSubscriber(t,this.accumulator,this.seed))},t}(),ScanSubscriber=function(t){function e(e,r,n){t.call(this,e),this.accumulator=r,this.index=0,this.accumulatorSet=!1,this.seed=n,this.accumulatorSet="undefined"!=typeof n}return __extends(e,t),Object.defineProperty(e.prototype,"seed",{get:function(){return this._seed},set:function(t){this.accumulatorSet=!0,this._seed=t},enumerable:!0,configurable:!0}),e.prototype._next=function(t){return this.accumulatorSet?this._tryNext(t):(this.seed=t,void this.destination.next(t))},e.prototype._tryNext=function(t){var e,r=this.index++;try{e=this.accumulator(this.seed,t,r)}catch(t){this.destination.error(t)}this.seed=e,this.destination.next(e)},e}(Subscriber_1.Subscriber);