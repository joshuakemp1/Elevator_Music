var app = angular.module('ElevatorMusic', []);

app.run(function($rootScope) {
  $rootScope.name = "Josh Kemp";
});

app.controller('MyController', function($scope) {
  $scope.person = { name: "Josh Kemp" };
  var updateClock = function() {
    $scope.clock = new Date();
  };
  var timer = setInterval(function() {
    $scope.$apply(updateClock);
  }, 1000);
  updateClock();
});

app.controller('PlayerController', ['$scope', function($scope) {
  $scope.playing = false;
  $scope.audio = document.createElement('audio');
  $scope.audio.src = 'http://download.wavetlan.com/SVV/Media/HTTP/BlackBerry.mp4';
  $scope.play = function() {
    $scope.audio.play();
    $scope.playing = true;
  };
  $scope.stop = function() {
    $scope.audio.pause();
    $scope.playing = false;
  };
  $scope.audio.addEventListener('ended', function() {
    $scope.$apply(function() {
      $scope.stop();
    });
  });
}]);

app.controller('DemoController', ['$scope', function ($scope) {
  $scope.counter = 0;
  $scope.add = function(amount) { $scope.counter += amount; };
  $scope.subtract = function(amount) { $scope.counter -= amount; };
}]);

app.controller('RelatedController', ['$scope', function($scope) {
}]);
