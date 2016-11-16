export function resultsCtrl($scope, $location, ApiService){

	$scope.resultsCtrl = this;

	ApiService.search().then(function(response){

		this.artists=response;
		
	}.bind(this))

	this.getArtists = function(){

		ApiService.getArtists($scope.resultsCtrl.artist)
		.then(function(response){

			this.artists=response;
			console.log(this.artists);

		}.bind(this))
	}	
}