app.directive('appNav', function() { 
  return { 
    restrict: 'E', 
    templateUrl: 'js/directives/appNav.html' 
  }; 
});

app.controller('appNavController', [ '$scope', '$location', 'SessionService', '$route', function($scope, $location, SessionService, $route) { 
  var vm = this;
  vm.pages = [];
  vm.session = null;
  
  vm.loadSession = function(){
      vm.pages.length = 0;
      vm.session = SessionService.get();
      if(vm.session){
        for(i = 0; i < vm.session.pages.length ; i++){
            vm.pages.push(vm.session.pages[i]);
        }
    }
    $route.reload();
  };
  
  vm.init = function(){
      vm.loadSession();
  };
  
  vm.signout = function(){
        SessionService.signout(vm.loadSession);
        $location.path( '/' );
  };
  
  vm.signin = function(valid){
    if(valid){
        SessionService.signin({data: vm.user}, vm.loadSession);
    }else
        alert("Autenticazione errata");
  };
  
  vm.init();
}]);

