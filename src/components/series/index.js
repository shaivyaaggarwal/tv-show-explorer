import './index.scss';

import angular from 'angular';
import SeriesCtrl from './SeriesCtrl';

export default angular.module('components.series', [])
.component('series', {
    bindings: {
        series: '<'
    },
    template: require('./index.html'),
    controller: SeriesCtrl,
    controllerAs: '$ctrl'
})
.name;
