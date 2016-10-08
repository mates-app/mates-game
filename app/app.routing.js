"use strict";
var router_1 = require('@angular/router');
// import { loginRoutes, authProviders } from './login/login.routing'
// import { AuthGuard } from './login/auth-guard.service'
var appRouting = [
    {
        path: 'menu',
        loadChildren: 'app/menu/menu.module#MenuModule',
    },
    {
        path: '',
        redirectTo: '/menu',
        pathMatch: 'full'
    }
];
var appRoutes = appRouting.slice();
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map