// declare a new module called 'myApp', and make it require the `ng-admin` module as a dependency
var myApp = angular.module('myApp', ['ng-admin', 'config']);
// declare a function to run when the module bootstraps (during the 'config' phase)
myApp.config(['NgAdminConfigurationProvider', 'RestangularProvider', 'API_HOST', function(nga, RestangularProvider, API_HOST) {
    // create an admin application

    console.log(API_HOST);

    var admin = nga.application('Admin')
        .baseApiUrl(API_HOST);

    RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response) {
        if (operation == "getList") {
            switch (what) {
                default: response.totalCount = data._meta.total;
                data = data._items;
                break;
            }
        }

        return data;
    });

    RestangularProvider.addFullRequestInterceptor(function(element, operation, what, url, headers, params, httpConfig) {
        if (operation == 'put') {
            delete element._created;
            delete element._links;
            delete element._updated;
        }
        return {
            element: element
        };
    });

    var customers = nga.entity('customers');
    customers.identifier(nga.field('_id'));
    customers.listView().fields([
        nga.field('firstname'),
        nga.field('lastname')
        .validation({
            required: true
        }),
    ]);
    customers.creationView().fields(customers.listView().fields());
    customers.editionView().fields(customers.listView().fields());
    admin.addEntity(customers)

    // attach the admin application to the DOM and execute it
    nga.configure(admin);
}]);
