export function resultsCtrl($scope, $location, $routeParams, ApiService){

	$scope.resultsCtrl = this;

	ApiService.search().then(function(response){

		this.artist = ApiService.query;
		this.artists=response;
		
	}.bind(this))

	this.getArtists = function(){

		ApiService.getArtists($scope.resultsCtrl.artist)
		.then(function(response){

			this.artists=response;

		}.bind(this))
	}

	this.goToAlbums = function(band){

		$location.path('/band-albums/' + band.id);
		
	}.bind(this)	
}