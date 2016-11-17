"use strict";function debounce(t){return this.lift(new DebounceOperator(t))}var __extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},OuterSubscriber_1=require("../OuterSubscriber"),subscribeToResult_1=require("../util/subscribeToResult");exports.debounce=debounce;var DebounceOperator=function(){function t(t){this.durationSelector=t}return t.prototype.call=function(t,e){return e._subscribe(new DebounceSubscriber(t,this.durationSelector))},t}(),DebounceSubscriber=function(t){function e(e,i){t.call(this,e),this.durationSelector=i,this.hasValue=!1,this.durationSubscription=null}return __extends(e,t),e.prototype._next=function(t){try{var e=this.durationSelector.call(this,t);e&&this._tryNext(t,e)}catch(t){this.destination.error(t)}},e.prototype._complete=function(){this.emitValue(),this.destination.complete()},e.prototype._tryNext=function(t,e){var i=this.durationSubscription;this.value=t,this.hasValue=!0,i&&(i.unsubscribe(),this.remove(i)),i=subscribeToResult_1.subscribeToResult(this,e),i.closed||this.add(this.durationSubscription=i)},e.prototype.notifyNext=function(t,e,i,r,o){this.emitValue()},e.prototype.notifyComplete=function(){this.emitValue()},e.prototype.emitValue=function(){if(this.hasValue){var e=this.value,i=this.durationSubscription;i&&(this.durationSubscription=null,i.unsubscribe(),this.remove(i)),this.value=null,this.hasValue=!1,t.prototype._next.call(this,e)}},e}(OuterSubscriber_1.OuterSubscriber);