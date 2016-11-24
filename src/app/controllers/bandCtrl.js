export function bandCtrl($scope, $location, $routeParams, ApiService){

	$scope.bandCtrl = this;
	// this.albums = new Array();
	// this.artist = new Array();

	ApiService.getAlbums($routeParams.bandId)
	.then(function(response){

		this.albums = response;

	}.bind(this));

	ApiService.getArtistById($routeParams.bandId)
	.then(function(response){

		this.artist = response;
		
	}.bind(this));

	this.goToTracks = function(album){
		
		$location.path('/album-detail/' + album.id);
		
	}.bind(this);

	this.getArtists = function(artist){

		$location.path('/results/' + artist);
	}
	
	this.goToHome = function(){

		$location.path('/');

	}
}