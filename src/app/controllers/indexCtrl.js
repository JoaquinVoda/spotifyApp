export function indexCtrl($scope, ApiService) {
	
	$scope.indexCtrl = this;

	this.getArtists = function(){

		ApiService.getArtists($scope.indexCtrl.artist)
		.then(function(response){

			this.artists = response;
			console.log(this.artists);

		}.bind(this));
	}


}