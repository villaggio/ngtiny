app.controller('AppController', ['swInfo', function( swInfo ) {
    var vm = this;
    
    vm.ver = swInfo.version;
    vm.today = new Date();
}]);
