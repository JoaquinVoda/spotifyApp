export function indexCtrl($scope, $location, ApiService) {
	
	$scope.indexCtrl = this;

	this.getArtists = function(){

		// ApiService.getArtists($scope.indexCtrl.artist)
		// .then(function(response){

		// 	this.artists = response;
		// 	console.log(this.artists);

		// }.bind(this));

		$location.path('/results');
		ApiService.query = $scope.indexCtrl.artist;
	}


}