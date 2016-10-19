app.controller('AppController', ['globalInfo', function(globalInfo) {
    var vm = this;
    vm.nav = [
       {
        url:"#/",
        title:"Home"
       },{
        url:"#/students",
        title:"Anagrafica"
       },{
        url:"#/agenda",
        title:"Calendario"
       },{
        url:"#/credits",
        title:"Crediti"
       }
    ];
    vm.ver = globalInfo.version;
    vm.today = new Date();
}]);
