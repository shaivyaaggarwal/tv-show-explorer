function route($routeProvider) {
    'ngInject';

    $routeProvider
    .when('/', {
        template: require('./index.html'),
        controller: 'HomeCtrl',
        controllerAs: '$ctrl'
    });
}

export default route;
