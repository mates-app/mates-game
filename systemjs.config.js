/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    // map tells the System loader where to look for things
    var map = {
        'app': 'dist/app',
        '@angular/core': 'npm:@angular/core/bundles/core.umd.min.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.min.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.min.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.min.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.min.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.min.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.min.js',
        '@angular/material': 'npm:@angular/material/material.umd.min.js',
        'hammerjs':'npm:hammerjs',
        'angular2-in-memory-web-api': 'npm:/angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
        'rxjs': 'rxjs-min',
        'mathjax': 'node_modules/mathjax',
        'torbi.ng2-choices-game' : 'node_modules/torbi.ng2-choices-game',
        'socket.io-client' : 'npm:socket.io-client/socket.io.js'
    };

    var packages = {
        'app': { 
            main: 'main.js', 
            defaultExtension: 'js' 
        },
        "socket.io-client": {"defaultExtension": "js"},
        'rxjs': { 
            defaultExtension: 'js' 
        },
        'angular2-in-memory-web-api': { 
            main: './index.js', 
            defaultExtension: 'js' 
        },
        'torbi.ng2-choices-game': {
          main: 'index',
          defaultExtension: 'js'
        },
        'hammerjs':{
            main: 'hammerjs.min',
            defaultExtension: 'js'
        }
    };
    var config = {
        paths: { 'npm:': 'node_modules/' },
        map: map,
        packages: packages
    };
    System.config(config);
})(this);
//# sourceMappingURL=system-config.js.map
