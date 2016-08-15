"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
var signup_component_1 = require('./signup.component');
var signin_component_1 = require('./signin.component');
var loginRoutes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent,
        children: [{
                path: 'signup',
                component: signup_component_1.SignUpComponent
            }, {
                path: 'signin',
                component: signin_component_1.SignInComponent
            }, {
                path: '',
                component: signin_component_1.SignInComponent
            }
        ]
    }
];
exports.loginRouting = router_1.RouterModule.forChild(loginRoutes);
//# sourceMappingURL=login.routing.js.map