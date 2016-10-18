app.controller('AgendaController', ['$scope', function($scope) {
    var vm = $scope;
    
    vm.agenda = [];
    vm.day = {};
    vm.event = {};

    vm.init = function(){
        vm.resetAgenda();
        vm.resetDay();
        vm.agenda.push(vm.day);
    };
    changeFrom=function(){
        var sFrom = $("#selectFrom").prop('selectedIndex');
        var sTo =  $("#selectTo").prop('selectedIndex');
        if (sTo<sFrom)
            $('#selectTo option').eq(sFrom).prop('selected', true);

        
    };
    changeTo=function(){
        var sFrom = $("#selectFrom").prop('selectedIndex');
        var sTo =  $("#selectTo").prop('selectedIndex');
        if (sTo<sFrom)
            $('#selectFrom option').eq(sTo).prop('selected', true);
    };
    
    vm.resetAgenda = function(){
        vm.agenda.length = 0;
    };
    
    vm.resetDay = function(){
        vm.day.index  = -1;
        vm.day.date  = new Date();
        vm.day.events = [];
        vm.event = {};
       
        /*
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
        */
        
    };
    
    vm.getDay = function(d){
        var day = {};
        var e = {};
        day.date  = d.date;
        day.events = [];
        e.to=vm.event.to;
        e.from=vm.event.from;
        e.lesson=vm.event.lesson;
        e.argument=vm.event.argument;
        e.teacher=vm.event.teacher;
        day.events.push(e);
        return day;
        //return event;
    };
    
    vm.saveDay = function(index){
         console.log(index);
        if(index>=0){
            vm.agenda.splice(index, 1, vm.getDay(vm.day));
        }else{
            vm.agenda.push(vm.getDay(vm.day));
            vm.resetDay();
        }
    };
     
    vm.showDay = function(index){
        console.log(index);
        vm.day = vm.getDay(vm.agenda[index]);
        vm.day.index = index;
    };
    
    vm.deleteDay = function(index){
        vm.agenda.splice(index,1);
    };
    
    vm.init();
}]);
