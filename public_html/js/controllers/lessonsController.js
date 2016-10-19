app.controller('LessonsController', ['$scope', function($scope) {
    var vm = $scope;
    
    vm.lessons = []; // ARRAY
    vm.lesson = {}; // OGGETTO

    vm.init = function(){
        vm.resetLessons();
        vm.resetLesson();
        vm.lessons.push(vm.lesson); // reset su oggetto
    };
    
    vm.resetLessons = function(){
        vm.lessons.length = 0;
    };
    
    vm.resetLesson = function(){
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
    
    vm.getLesson = function(d){
        var day = {};
        day.date  = d.day;
        return day;
    };
    
    vm.saveLesson = function(index){
        if(index>=0){
            vm.lessons.splice(index, 1, vm.getLesson(vm.lesson));
        }else{
            vm.lessons.push(vm.getLesson(vm.lesson));
            vm.resetLesson();
        }
    };
    
    vm.showLesson = function(index){
        vm.lesson = vm.getLesson(vm.lessons[index]);
        vm.lesson.index = index;
    };
    
    vm.deleteDay = function(index){
        vm.lessons.splice(index,1);
    };
    
    vm.init();
}]);
