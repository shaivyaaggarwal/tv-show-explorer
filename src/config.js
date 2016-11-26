function config($locationProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);
    // $routeProvider
    // .when('/', {
    //     template: require('./containers/home/index.html'),
    //     controller: 'HomeCtrl',
    //     controllerAs: '$ctrl'
    // });
}

export default config;
