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
    .when('/agenda', { 
      controller: 'AgendaController', 
      templateUrl: 'views/agenda.html' 
    }) 
    .when('/credits', { 
      //controller: 'CreditsController', 
      templateUrl: 'views/credits.html' 
    }) 
    .otherwise({ 
      redirectTo: '/' 
    }); 
});