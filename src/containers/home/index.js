import './index.scss';

import angular from 'angular';
import ngRoute from 'angular-route';
import route from './route';
import HomeCtrl from './HomeCtrl';

export default angular
.module('containers.home', [ngRoute])
.config(route)
.controller('HomeCtrl', HomeCtrl)
.name;
