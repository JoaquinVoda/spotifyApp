export function resultsCtrl($scope, $location, ApiService){

	$scope.resultsCtrl = this;

	this.getArtists = function(){

		ApiService.getArtists(resultsCtrl.artist)
		.then(function(response){

			this.artists=response;
			console.log(this.artists);

		}.bind(this))
	}	
}