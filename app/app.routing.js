"use strict";
var router_1 = require('@angular/router');
var todo_component_1 = require('./todo.component');
var form_component_1 = require('./form.component');
var restaurant_component_1 = require('./restaurant.component');
var appRoutes = [
    {
        path: 'todos',
        component: todo_component_1.TodoComponent
    },
    {
        path: 'form',
        component: form_component_1.FormComponent
    },
    {
        path: 'restaurants',
        component: restaurant_component_1.RestaurantComponent
    },
    {
        path: '',
        redirectTo: '/todos',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map