import angular from 'angular';
import episode from './episode';
import searchbar from './search-bar';
import series from './series';

export default angular
.module('components', [series, episode, searchbar])
.name;
