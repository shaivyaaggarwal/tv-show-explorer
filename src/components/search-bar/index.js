import './index.scss';

import angular from 'angular';
import SearchCtrl from './SearchCtrl';

export default angular.module('components.searchbar', [])
.component('searchBar', {
    bindings: {
        onSearch: '&',
        placeholder: '@',
        search: '<'
    },
    controller: SearchCtrl,
    controllerAs: '$ctrl',
    template: require('./index.html')
})
.name;
