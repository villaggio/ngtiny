app.controller('appController', ['$scope', function($scope) {
    var vm = this;
    vm.nav = [
       {
        url:"#/",
        title:"home"
       },{
        url:"#/credits",
        title:"credits"
       },
    ];
    vm.ver = '1.0.0';
    vm.today = new Date();
    
}]);
