import 'materialize-css/dist/css/materialize.css';
import './index.scss';


import angular from 'angular';
import ngRoute from 'angular-route';
import routes from './config';
import containers from './containers/';
import components from './components/';

angular
.module('tvshowexplorer', [ngRoute, containers, components])
.config(routes);
