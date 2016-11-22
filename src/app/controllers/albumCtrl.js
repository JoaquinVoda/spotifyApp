export function albumCtrl($scope, $location, $routeParams, ApiService, StarService){
	
	$scope.albumCtrl = this;

	ApiService.getAlbum($routeParams.albumId).then(function(response){
		
		this.album = response;	

	}.bind(this));

	ApiService.getAlbumTracks($routeParams.albumId).then(function(response){

		this.tracks = response;

	}.bind(this));

	this.favTrack = function(track){
		StarService.changeFav(track);
	}

	this.isFav = function(id){
		return StarService.getFav(id);
	}

	this.getArtists = function(){

		$location.path('/results');
		ApiService.query = $scope.albumCtrl.artist;
	}
}