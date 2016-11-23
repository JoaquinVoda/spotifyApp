export function albumCtrl($scope, $location, $routeParams, ApiService, StarService){
	
	$scope.albumCtrl = this;

	ApiService.getAlbum($routeParams.albumId).then(function(response){
		
		this.album = response;	

	}.bind(this));

	ApiService.getAlbumTracks($routeParams.albumId).then(function(response){

		this.tracks = response;
		console.log(this.tracks);

	}.bind(this));

	this.favTrack = function(track){
		StarService.changeFav(track);
	}

	this.isFav = function(id){
		return StarService.getFav(id);
	}

	this.getArtists = function(artist){

		$location.path('/results/' + artist);
	}

	this.goToHome = function(){

		$location.path('/');

	}

	this.sortAsc = function(){
		this.tracks = ApiService.sortByDurationAsc(this.tracks);
	}

	this.sortDesc = function(){
		this.tracks = ApiService.sortByDurationDesc(this.tracks);
	}

}	