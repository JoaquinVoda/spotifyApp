export function ApiService($http) {
    
   

    	this.getArtists = function(name) {
    		return $http({
    			method: 'GET',
    			url : 'https://api.spotify.com/v1/search?q=' + name + '&type=artist&limit=10' 
    		}).then(function(response){

    			return response.data.artists.items;

    		}, function(){

    			console.error('Call failed');
    		});
    	}


    	this.getAlbums = function(bandId) {
    		return $http({
    			method: 'GET',
    			url : 'https://api.spotify.com/v1/artists/' + $routeParams.bandId + '/albums'
    		}).then(function(response) {

    			return response.data;

    		}, function(){

    			console.error('Call failed');
    			
    		});
    	}

    	// this.getAlbumTracks = function() {
    	// 	return $http({
    	// 		method: 'GET',
    	// 		url : 'https://api.spotify.com/v1/albums/' + $routeParams.bandId + '/tracks'
    	// 	}).then(function(response) {

    	// 		return response.data.albums.tracks;

    	// 	}, function() {
    	// 		console.error('Call failed');
    	// 	})


    	// }
    

}
