app.controller('AppController', [function() {
    var vm = this;
    vm.nav = [
       {
        url:"#/",
        title:"Home"
       },{
        url:"#/students",
        title:"Anagrafica"
       },{
        url:"#/lessons",
        title:"Lezioni"
       },{
        url:"#/agenda",
        title:"Calendario"
       },{
        url:"#/credits",
        title:"Crediti"
       },
    ];
    vm.ver = '1.0.0';
    vm.today = new Date();

}]);
