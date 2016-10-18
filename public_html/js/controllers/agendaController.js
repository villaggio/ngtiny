app.controller('AgendaController', ['$scope', function($scope) {
    var vm = $scope;
    
    vm.agenda = [];
    vm.day = {};

    vm.init = function(){
        vm.resetAgenda();
        vm.resetDay();
        //test
        vm.loadFakeData();
        console.log(vm.agenda);
    };
    
    // metodo di inizializzazione dati per test
    vm.loadFakeData = function(){
        var day = vm.getDay();
        var eventDateFrom = new Date();
        var eventDateTo = new Date();
        eventDateFrom.setHours(8, 30);
        eventDateTo.setHours(17, 30);
        vm.agenda.push(vm.getDay(day));
        day.events.push({
            from: eventDateFrom,
            to: eventDateTo,
            lesson: 'Frontend Dev',
            argument: 'AngularJS',
            teacher: 'Fabio Fazio'
        });
        vm.agenda.push(vm.getDay(day));
        day.events.push({
            from: new Date(),
            to: new Date(),
            lesson: 'Frontend Dev',
            argument: 'AngularJS',
            teacher: 'Fabio Fazio'
        });
        vm.agenda.push(vm.getDay(day));
    };

    // pulizia lista di day in agenda    
    vm.resetAgenda = function(){
        vm.agenda.length = 0;
    };
    
    // pulizia oggetto day
    vm.resetDay = function(){
        vm.day.index  = -1;
        vm.day.date  = new Date();
        if(vm.day.events)
            vm.day.events.length = 0;
        else
            vm.day.events = [];
    };
    
    // restituisce un nuovo day con valori clonati da d
    vm.getDay = function(d){
        var day = {};
        day.date  = d?d.date:new Date();
        day.events = [];
        if(d && d.events.length)
            for(var i=0;i<d.events.length;i++)
                day.events.push(vm.getEvent(d.events[i]));
        return day;
    };

    // restituisce un nuovo event con valori clonati da e
    vm.getEvent = function(e){
        var event = {};
        event.from  = e?e.from:new Date();
        event.to = e?e.to:new Date();
        event.teacher = e?e.teacher:null;
        event.lesson = e?e.lesson:null;
        event.argument = e?e.argument:null;
        return event;
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
        if(vm.day.index == index)
            vm.resetDay();
        vm.agenda.splice(index,1);
    };
    
    vm.init();
}]);
