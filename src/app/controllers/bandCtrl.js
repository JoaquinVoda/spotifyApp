export function bandCtrl($scope, $routeParams, $location, ApiService){

	$scope.bandCtrl = this;

	this.getAlbums = function(){

		ApiService.getAlbums($routeParams.bandId)
		.then(function(response){

			this.albums=response;
			console.log(albums);

		}.bind(this))

	}

	
}