import {routes} from './routes';
import {ApiService} from './services';
import {indexCtrl} from './controllers/indexCtrl';
import {resultsCtrl} from './controllers/resultsCtrl';
import {bandCtrl} from './controllers/bandCtrl';
import {albumCtrl} from './controllers/albumCtrl';

angular
	.module('App', ['ngRoute'])
    .config(routes)
    .service('ApiService', ['$http', ApiService])
    .controller('indexCtrl', ['$scope', 'ApiService', indexCtrl])
    .controller('resultsCtrl', resultsCtrl)
    .controller('bandCtrl', bandCtrl)
    .controller('albumCtrl', albumCtrl);
