export function bandCtrl($scope, $location, $routeParams, ApiService){

	$scope.bandCtrl = this;


	$scope.fun = function(){
		alert('something');
	}
	ApiService.getAlbums($routeParams.bandId).then(function(response){

		this.albums = response;

	}.bind(this));

	this.goToTracks = function(album){
		
		$location.path('/album-detail/' + album.id);
		
	}.bind(this);

	this.getArtists = function(){
		console.log('algo pasa');	
		$location.path('/results');
		ApiService.query = $scope.bandCtrl.artist;
	}
	
}