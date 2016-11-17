export function albumCtrl($scope, $location, $routeParams, ApiService){
	
	$scope.albumCtrl = this;

	ApiService.getAlbum($routeParams.albumId).then(function(response){
		
		this.album = response;
		console.log(this.album);	

	}.bind(this));

	ApiService.getAlbumTracks($routeParams.albumId).then(function(response){

		this.tracks = response;
		console.log(this.tracks);

	}.bind(this));

	
}