
var app = angular.module('artistApp', []);

app.directive('fileChange', [
  function() {
    return {
      link: function(scope, element, attrs) {
        element[0].onchange = function() {
          scope[attrs['fileChange']](element[0])

        }
      }

    }
  }
  ])

app.controller('artistController', function($scope, $http){

  $http.get('http://dev.godster.mx/artist')
  .success(function(data){
    $scope.artists = data.response;
  })
  .error(function(data){
    console.log('Error: ' + data);
  });

  $scope.addArtist = function() {
    var res = encodeURIComponent('background_image=' + $scope.background_image[0].name + '&profile_image=' + $scope.profile_image[0].name + '&name=' + $scope.name + '&genre=' + $scope.genre);
    $http({
      method: "post",
      url: " http://dev.godster.mx/artist",
      headers: {
        "Content-type":"application/x-www-form-urlencoded; charset=utf-8"
      },
      data: res
    })
    .success(function(data){
      console.log(data);
    })
    .error(function(data){
      console.log('Error: ' + data);
    });
  }

  $scope.backgroundFile = function(elm){
    $scope.background_image=elm.files;
    console.log($scope.background_image[0].name);
    $scope.$apply();
  }

  $scope.profileFile = function(elm){
    $scope.profile_image=elm.files;
    console.log($scope.profile_image[0].name);
    $scope.$apply();
  }
});