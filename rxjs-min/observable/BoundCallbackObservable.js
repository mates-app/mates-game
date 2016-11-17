"use strict";function dispatchNext(e){var r=e.value,t=e.subject;t.next(r),t.complete()}function dispatchError(e){var r=e.err,t=e.subject;t.error(r)}var __extends=this&&this.__extends||function(e,r){function t(){this.constructor=e}for(var c in r)r.hasOwnProperty(c)&&(e[c]=r[c]);e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)},Observable_1=require("../Observable"),tryCatch_1=require("../util/tryCatch"),errorObject_1=require("../util/errorObject"),AsyncSubject_1=require("../AsyncSubject"),BoundCallbackObservable=function(e){function r(r,t,c,s){e.call(this),this.callbackFunc=r,this.selector=t,this.args=c,this.scheduler=s}return __extends(r,e),r.create=function(e,t,c){return void 0===t&&(t=void 0),function(){for(var s=[],a=0;a<arguments.length;a++)s[a-0]=arguments[a];return new r(e,t,s,c)}},r.prototype._subscribe=function(e){var t=this.callbackFunc,c=this.args,s=this.scheduler,a=this.subject;if(s)return s.schedule(r.dispatch,0,{source:this,subscriber:e});if(!a){a=this.subject=new AsyncSubject_1.AsyncSubject;var o=function e(){for(var r=[],t=0;t<arguments.length;t++)r[t-0]=arguments[t];var c=e.source,s=c.selector,a=c.subject;if(s){var o=tryCatch_1.tryCatch(s).apply(this,r);o===errorObject_1.errorObject?a.error(errorObject_1.errorObject.e):(a.next(o),a.complete())}else a.next(1===r.length?r[0]:r),a.complete()};o.source=this;var u=tryCatch_1.tryCatch(t).apply(this,c.concat(o));u===errorObject_1.errorObject&&a.error(errorObject_1.errorObject.e)}return a.subscribe(e)},r.dispatch=function(e){var r=this,t=e.source,c=e.subscriber,s=t.callbackFunc,a=t.args,o=t.scheduler,u=t.subject;if(!u){u=t.subject=new AsyncSubject_1.AsyncSubject;var b=function e(){for(var t=[],c=0;c<arguments.length;c++)t[c-0]=arguments[c];var s=e.source,a=s.selector,u=s.subject;if(a){var b=tryCatch_1.tryCatch(a).apply(this,t);b===errorObject_1.errorObject?r.add(o.schedule(dispatchError,0,{err:errorObject_1.errorObject.e,subject:u})):r.add(o.schedule(dispatchNext,0,{value:b,subject:u}))}else{var n=1===t.length?t[0]:t;r.add(o.schedule(dispatchNext,0,{value:n,subject:u}))}};b.source=t;var n=tryCatch_1.tryCatch(s).apply(this,a.concat(b));n===errorObject_1.errorObject&&u.error(errorObject_1.errorObject.e)}r.add(u.subscribe(c))},r}(Observable_1.Observable);exports.BoundCallbackObservable=BoundCallbackObservable;