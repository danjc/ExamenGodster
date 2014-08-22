
var app = angular.module('artistApp', [])

function artistController($scope, $http) {
	$scope.artistData = {};

	$http.get('http://dev.godster.mx/artist')
		.success(function(data){
			$scope.artists = data;
		})
		.error(function(data){
			console.log('Error: ' + data);
		});

	$scope.addArtist = function() {
		console.log($scope.artistData);
		$http.post('http://godster.mx:5000/artist', $scope.artistData)	
			.success(function(data){
				$scope.artistData = {};
			})
			.error(function(data){
				console.log('Error: ' + data);
			});
	}
};