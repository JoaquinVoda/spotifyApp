import 'angular-route';

export function routes($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: true,
    });

    $routeProvider
	.when('/', {

		templateUrl : "app/views/index.html"
		//controller: indexCtrl
	})

	.when('/album-detail/:albumId', {

		templateUrl : "/app/views/album-detail.html"
		//controller: albumCtrl
	})

	.when('/band-albums/:bandId', {

		templateUrl : "/app/views/band-albums.html"
		//controller: bandCtrl
	})

	.when('/results', {

		templateUrl : "app/views/results.html"
		//controller: resultsCtrl
	})

}


