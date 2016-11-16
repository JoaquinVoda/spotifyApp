export function bandCtrl($scope, $routeParams, ApiService){

	$scope.bandCtrl = this;

	ApiService.getAlbums($routeParams.bandId).then(function(response){

		this.albums = response;
		console.log($scope.bandCtrl.albums);

	}.bind(this))

	
}