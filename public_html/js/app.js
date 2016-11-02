var app = angular.module('ngtiny', ['ngRoute', 'ngStorage', 'ui.bootstrap']);
app.conf=function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'HomeController', 
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
}
app.config(app.conf);
app.constant("swInfo", {
    "version": "1.0.1"
});
app.constant("URL", {
    "REST": "server"
});
