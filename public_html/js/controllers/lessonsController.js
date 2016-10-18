app.controller('AgendaController', ['$scope', function($scope) {
    var vm = $scope;
    
    //DONE
    vm.lessons = [];
    vm.lesson = {};

    //DONE
    vm.init = function(){
        vm.resetLessons();
        vm.resetLesson();
        //test
        vm.loadFakeData();
        console.log(vm.lessons);
    };
    
    // TO DO
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

    // DONE
    // pulizia lista di lesson in lessons  
    vm.resetLessons = function(){
        vm.lessons.length = 0;
    };
    
    // DONE
    // pulizia oggetto lesson
    vm.resetLesson = function(){
        vm.lesson.index  = -1;
        vm.lesson.title = null;
        vm.lesson.teacher = null;
        vm.lesson.hours = null;
        vm.lesson.start = new Date();
        vm.lesson.end = new Date();
        
        if(vm.lesson.arguments)
            vm.lesson.arguments.length = 0;
        else
            vm.lesson.arguments = [];
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
