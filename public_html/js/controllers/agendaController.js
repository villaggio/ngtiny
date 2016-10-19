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
        var eventDateFrom1 = new Date();
        var eventDateTo1 = new Date();
        eventDateFrom1.setHours(8, 30);
        eventDateTo1.setHours(12, 30);
        var eventDateFrom2 = new Date();
        var eventDateTo2 = new Date();
        eventDateFrom2.setHours(13, 30);
        eventDateTo2.setHours(17, 30);
        vm.agenda.push(vm.getDay(day));
        day.events.push({
            from: eventDateFrom,
            to: eventDateTo,
            lesson: 'Frontend Dev 0',
            argument: 'AngularJS',
            teacher: 'Fabio Fazio'
        });
        vm.agenda.push(vm.getDay(day));
        day.events.splice(0,1);
        day.events.push({
            from: eventDateFrom1,
            to: eventDateTo1,
            from: eventDateFrom1,
            to: eventDateTo1,
            lesson: 'Frontend Dev 1',
            argument: 'AngularJS',
            teacher: 'Fabio Fazio'
        });
        day.events.push({
            from: eventDateFrom2,
            to: eventDateTo2,
            lesson: 'Frontend Dev 2',
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
        vm.day = vm.getDay();
        vm.day.index  = -1;
    };

    vm.resetEvent = function(){
        vm.event = vm.getEvent();
        vm.event.index  = -1;
    };

    vm.resetEvents = function(){
        vm.day.events.length  = 0;
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
        event.from  = e?e.from:null;
        event.to = e?e.to:null;
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
    
    vm.saveEvent = function(index){
        if(index>=0){
            vm.day.events.splice(index, 1, vm.getEvent(vm.event));
        }else{
            vm.day.events.push(vm.getEvent(vm.event));
            vm.resetEvent();
        }
    };
    
    vm.showDay = function(index){
        vm.day = vm.getDay(vm.agenda[index]);
        vm.day.index = index;
    };
    
    vm.showEvent = function(index){
        vm.event = vm.getEvent(vm.day.events[index]);
        vm.event.index = index;
    };
    
    vm.deleteDay = function(index){
        vm.resetDay();
        vm.agenda.splice(index,1);
    };

    vm.deleteEvent = function(index){
        vm.resetEvent();
        vm.day.events.splice(index,1);
    };
    
    vm.init();
}]);
