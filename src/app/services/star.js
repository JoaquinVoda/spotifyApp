export function StarService($localStorage){


	this.changeFav = function(track){
		var flag=false;
		for (var i = 0; i <= $localStorage.tracks.length-1; i++) {
			if ($localStorage.tracks[i].id === track.id) {
				flag=true;
				$localStorage.tracks.splice(i,1);
			}
		}
		if(flag == false){
			$localStorage.tracks.push(track);
		}
		console.log($localStorage.tracks);
	}	

	this.getFav = function(id){

		for (var i = 0; i <= $localStorage.tracks.length-1; i++) {
			if ($localStorage.tracks[i].id === id) {
				return true;
			}
		}
		return false;
	}

	this.getAll = function(){

	}

}