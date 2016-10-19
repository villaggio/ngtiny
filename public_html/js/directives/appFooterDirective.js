app.directive('appFooter', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      ver: '=',
      today: '='
    }, 
    templateUrl: 'js/directives/appFooter.html' 
  }; 
});

