app.controller('AppController', ['swInfo', function( swInfo ) {
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
       },{
        url:"#/lessons",
        title:"Presenze"
       },{
        url:"#/credits",
        title:"Crediti"
       }
    ];
    vm.ver = swInfo.version;
    vm.today = new Date();
}]);
