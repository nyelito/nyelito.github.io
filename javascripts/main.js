var restApp = angular.module("restApp", []);

  restApp.controller('GithubController', function($scope, $http){
    $http.get("https://api.github.com/users/nyelito")
      .success(function(data, status){
        $scope.githubInfo = data;
      })
      .error(function(data, status){
        console.log('Unable to retrieve user');
      });
  });
