export function indexCtrl($scope, $location, ApiService, StarService) {
	
	$scope.indexCtrl = this;

	this.ids = new Array();
	this.favtracks = new Array ();

	this.tracks = StarService.getAllFavs();

	for (var i = 0; i < this.tracks.length ; i++) {
		this.ids.push(this.tracks[i].id);
	}

	ApiService.getFavsTracks(this.ids).then(function(response){
		$scope.indexCtrl.favtracks = response;

	});
	

	this.getArtists = function(){

		$location.path('/results');
		ApiService.query = $scope.indexCtrl.artist;
	}

	this.favTrack = function(track){

		StarService.changeFav(track);

	}

	this.isFav = function(id){

		StarService.getFav(id);

	}


}