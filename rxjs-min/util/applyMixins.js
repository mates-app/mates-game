"use strict";function applyMixins(t,p){for(var r=0,e=p.length;r<e;r++)for(var o=p[r],i=Object.getOwnPropertyNames(o.prototype),n=0,a=i.length;n<a;n++){var s=i[n];t.prototype[s]=o.prototype[s]}}exports.applyMixins=applyMixins;