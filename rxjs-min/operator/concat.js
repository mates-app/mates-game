"use strict";function concat(){for(var e=[],r=0;r<arguments.length;r++)e[r-0]=arguments[r];return concatStatic.apply(void 0,[this].concat(e))}function concatStatic(){for(var e=[],r=0;r<arguments.length;r++)e[r-0]=arguments[r];var t=null,a=e;return isScheduler_1.isScheduler(a[e.length-1])&&(t=a.pop()),new ArrayObservable_1.ArrayObservable(e,t).lift(new mergeAll_1.MergeAllOperator(1))}var isScheduler_1=require("../util/isScheduler"),ArrayObservable_1=require("../observable/ArrayObservable"),mergeAll_1=require("./mergeAll");exports.concat=concat,exports.concatStatic=concatStatic;