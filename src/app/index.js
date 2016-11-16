import {routes} from './routes';
import {ApiService} from './services';
import {indexCtrl} from './controllers/indexCtrl';
import {resultsCtrl} from './controllers/resultsCtrl';
import {bandCtrl} from './controllers/bandCtrl';
import {albumCtrl} from './controllers/albumCtrl';

angular
	.module('App', ['ngRoute'])
    .config(routes)
    .service('ApiService', ['$http', '$routeParams', ApiService])
    .controller('indexCtrl', ['$scope','$location', 'ApiService', indexCtrl])
    .controller('resultsCtrl',['$scope','$location', 'ApiService', resultsCtrl])
    .controller('bandCtrl', ['$scope', '$routeParams', 'ApiService', bandCtrl])
    .controller('albumCtrl', albumCtrl);
