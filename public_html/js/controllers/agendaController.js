app.controller('AgendaController', ['$scope', function($scope) {
    var vm = $scope;
    
    vm.agenda = [];
    vm.day = {};

    vm.init = function(){
        vm.resetAgenda();
        vm.resetDay();
        vm.agenda.push(vm.day);
    };
    
    vm.resetAgenda = function(){
        vm.agenda.length = 0;
    };
    
    vm.resetDay = function(){
        vm.day.index  = -1;
        vm.day.date  = new Date();
        vm.day.events = [];
        vm.day.events.push({
            from: 8.30,
            to: 12.30,
            lesson: 'Frontend Dev',
            argument: 'AngularJS',
            teacher: 'Fabio Fazio'
        });
        vm.day.events.push({
            from: 13.30,
            to: 17.30,
            lesson: 'Frontend Dev',
            argument: 'AngularJS',
            teacher: 'Fabio Fazio'
        });
        vm.day.index  = -1;
        
        
    };
    
    vm.getDay = function(d){
        var day = {};
        day.date  = d.day;
        return day;
    };
    
    vm.saveDay = function(index){
        if(index>=0){
            vm.agenda.splice(index, 1, vm.getDay(vm.day));
        }else{
            vm.agenda.push(vm.getDay(vm.day));
            vm.resetDay();
        }
    };
    
    vm.showDay = function(index){
        vm.day = vm.getDay(vm.agenda[index]);
        vm.day.index = index;
    };
    
    vm.deleteDay = function(index){
        vm.agenda.splice(index,1);
    };
    
    vm.init();
}]);
