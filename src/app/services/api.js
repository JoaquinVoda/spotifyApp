export function ApiService($http, $routeParams) {
		this.query;

		this.search = function(){
			return $http({
				method: 'GET',
				url: 'https://api.spotify.com/v1/search?q=' + this.query + '&type=artist&limit=10'
			}).then(function(response){

				return response.data.artists.items;

			}, function(){
				console.error('Call failed');

			});

		}

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


        this.getAlbum = function(albumId) {
            return $http({
                method: 'GET',
                url : 'https://api.spotify.com/v1/albums/' + albumId
            }).then(function(response) {

                return response.data;

            }, function(){

                console.error('Call failed');
            })
        }

    	this.getAlbums = function(bandId) {
    		return $http({
    			method: 'GET',
    			url : 'https://api.spotify.com/v1/artists/' + bandId + '/albums'
    		}).then(function(response) {
                
    			return response.data.items;

    		}, function(){

    			console.error('Call failed');
    			
    		});
    	}

    	this.getAlbumTracks = function(albumId) {
    		return $http({
    			method: 'GET',
    			url : 'https://api.spotify.com/v1/albums/' + albumId + '/tracks'
    		}).then(function(response) {
    			return response.data.items;

    		}, function() {
    			console.error('Call failed');
    		});


    	}
    
        this.getFavsTracks = function(ids) {
            return $http({
                method: 'GET',
                url: 'https://api.spotify.com/v1/tracks/?ids=' + ids
            }).then(function(response) {

                return response.data.tracks;

            }, function() {
                console.error('Call failed');
            });
        }

}
