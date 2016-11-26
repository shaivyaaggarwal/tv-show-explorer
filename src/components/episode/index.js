import './index.scss';

import angular from 'angular';
import EpisodeCtrl from './EpisodeCtrl';
import episodeNumber from './episodeNumber.filter';

export default angular.module('components.episode', [])
.component('episode', {
    bindings: {
        episodeId: '<',
        onHide: '&'
    },
    template: require('./index.html'),
    controller: EpisodeCtrl,
    controllerAs: '$ctrl'
})
.filter('episodeNumber', [episodeNumber])
.name;
