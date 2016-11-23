export function ApiService($http, $routeParams) {
		

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

        this.sortByDurationAsc = function(tracks){
           return tracks.sort(compareAsc);
        }

        this.sortByDurationDesc = function(tracks){
            return tracks.sort(compareDesc);
        }

        function compareAsc(a,b){
            if (a.duration_ms > b.duration_ms) {
                return -1;
            }
            if (a.duration_ms < b.duration_ms) {
                return 1;
            }
            return 0;
        }

        function compareDesc(a ,b){
            if (a.duration_ms < b.duration_ms) {
                return -1;
            }
            if (a.duration_ms > b.duration_ms) {
                return 1;
            }
            return 0;
        }

}
