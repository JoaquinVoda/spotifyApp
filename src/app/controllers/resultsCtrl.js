export function resultsCtrl($scope, $location, $routeParams, ApiService){

	$scope.resultsCtrl = this;
	this.artist = $routeParams.artist;

	ApiService.getArtists($routeParams.artist)
	.then(function(response){

		this.artists=response;
		
	}.bind(this))

	this.getArtists = function(artist){

		$location.path('/results/' + artist);

	}.bind(this)

	this.goToAlbums = function(band){

		$location.path('/band-albums/' + band.id);
		
	}.bind(this)

	this.goToHome = function(){
		
		$location.path('/');

	}	
}