/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    // map tells the System loader where to look for things
    var map = {
        'app': 'dist/app',
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
        '@angular/material': 'npm:@angular/material/material.umd.js',

        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        'rxjs': 'node_modules/rxjs',
        'mathjax': 'node_modules/mathjax',
        'torbi.ng2-choices-game' : 'node_modules/torbi.ng2-choices-game'
    };

    var packages = {
        'app': { 
            main: 'main.js', 
            defaultExtension: 'js' 
        },
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
