var app = angular.module('ngtiny', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      //controller: 'HomeController', 
      templateUrl: 'views/home.html' 
    })
    .when('/students', { 
      controller: 'StudentsController', 
      templateUrl: 'views/students.html' 
    }) 
    .when('/credits', { 
      //controller: 'PhotoController', 
      templateUrl: 'views/credits.html' 
    }) 
    .otherwise({ 
      redirectTo: '/' 
    }); 
});