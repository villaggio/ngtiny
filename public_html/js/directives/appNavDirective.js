app.directive('appNav', function() { 
  return { 
    restrict: 'E', 
    templateUrl: 'js/directives/appNav.html' 
  }; 
});

app.controller('ProfileController', ['$scope', '$uibModalInstance', 'params',
    function($scope, $uibModalInstance, params) {
  var init = function(){
    $.each(params, function(i,v){
        $scope[i] = v;
     });
  }
  $scope.ok = function () {
    $uibModalInstance.close('closed');
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  init();
}]);

app.controller('appNavController', [ '$scope', '$location', 'SessionService', '$route', '$uibModal',
        function( $scope, $location, SessionService, $route, $uibModal ) { 
  var vm = this;
  vm.pages = [];
  vm.defaultPages = [{
        "url": "#/",
        "title": "Home"
    }, {
        "url": "#/credits",
        "title": "Crediti"
    }];
  vm.session = null;
  
  vm.loadSession = function(){
    var pages = [];
    var reload = false;
    vm.pages.length = 0;
    vm.session = SessionService.get();
    if(vm.session){
        pages = vm.session.pages;
        reload = true;
    }else{
        pages = vm.defaultPages;
    }
    for(i = 0; i < pages.length ; i++){
        vm.pages.push(pages[i]);
    }
    if(reload) $route.reload();
  }

  vm.editProfile = function() {
        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'js/directives/edit.html',
          controller: 'ProfileController',
          resolve: {
              params : function(){return {
                  title : "Profilo Utente",
                  reset : function(){},
                  user : SessionService.get(),
                  isAdmin : SessionService.isAdmin()
             }
          }
        }});
        return modalInstance;
  };
  
  vm.saveProfile = function(user){
      SessionService.saveProfile( {data: {user:user}} );
  }
  
  vm.register = function() {
        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'js/directives/edit.html',
          controller: 'ProfileController',
          resolve: {
              params : function(){return {
                title: "Modulo di registrazione"
              }}
            }
        })
 
        return modalInstance;
  };
  
  vm.init = function(){
      vm.loadSession();
  }
  
  vm.signout = function(){
        SessionService.signout(vm.loadSession);
        $location.path( '/' );
  }
  
  vm.signin = function(valid){
    if(valid){
        SessionService.signin({data: vm.user}, vm.loadSession);
    }else
        alert("Autenticazione errata");
  }
  
  vm.init();
}]);

