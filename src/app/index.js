import {routes} from './routes';
import {ApiService} from './services';
import {StarService} from './services/star';
import 'ngstorage';
import {indexCtrl} from './controllers/indexCtrl';
import {resultsCtrl} from './controllers/resultsCtrl';
import {bandCtrl} from './controllers/bandCtrl';
import {albumCtrl} from './controllers/albumCtrl';

angular
	.module('App', ['ngRoute', 'ngStorage'])
    .config(routes)
    .service('ApiService', ['$http', '$routeParams', ApiService])
    .service('StarService',['$localStorage', StarService])
    .controller('indexCtrl', ['$scope','$location', 'ApiService', 'StarService', indexCtrl])
    .controller('resultsCtrl',['$scope','$location', '$routeParams', 'ApiService', resultsCtrl])
    .controller('bandCtrl', ['$scope','$location', '$routeParams', 'ApiService', bandCtrl])
    .controller('albumCtrl', ['$scope', '$location', '$routeParams', 'ApiService', 'StarService', albumCtrl]);
