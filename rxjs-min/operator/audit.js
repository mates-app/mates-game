"use strict";function audit(t){return this.lift(new AuditOperator(t))}var __extends=this&&this.__extends||function(t,r){function e(){this.constructor=t}for(var i in r)r.hasOwnProperty(i)&&(t[i]=r[i]);t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)},tryCatch_1=require("../util/tryCatch"),errorObject_1=require("../util/errorObject"),OuterSubscriber_1=require("../OuterSubscriber"),subscribeToResult_1=require("../util/subscribeToResult");exports.audit=audit;var AuditOperator=function(){function t(t){this.durationSelector=t}return t.prototype.call=function(t,r){return r._subscribe(new AuditSubscriber(t,this.durationSelector))},t}(),AuditSubscriber=function(t){function r(r,e){t.call(this,r),this.durationSelector=e,this.hasValue=!1}return __extends(r,t),r.prototype._next=function(t){if(this.value=t,this.hasValue=!0,!this.throttled){var r=tryCatch_1.tryCatch(this.durationSelector)(t);r===errorObject_1.errorObject?this.destination.error(errorObject_1.errorObject.e):this.add(this.throttled=subscribeToResult_1.subscribeToResult(this,r))}},r.prototype.clearThrottle=function(){var t=this,r=t.value,e=t.hasValue,i=t.throttled;i&&(this.remove(i),this.throttled=null,i.unsubscribe()),e&&(this.value=null,this.hasValue=!1,this.destination.next(r))},r.prototype.notifyNext=function(t,r,e,i){this.clearThrottle()},r.prototype.notifyComplete=function(){this.clearThrottle()},r}(OuterSubscriber_1.OuterSubscriber);