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
        vm.lesson.index  = -1;
        vm.lesson.title  = '';
        vm.lesson.teacher = '';
        vm.lesson.hours = parseInt(vm.lesson.hours);
        vm.lesson.start = new Date();
        vm.lesson.end = new Date();
        vm.lesson.arguments = [];
        vm.lesson.arguments.push({
            title: 'JavaScript',
            hours: 200,
            description: 'Lezioni di Javascript fatte da VS e FF'
        });
        vm.lesson.arguments.push({
            title: 'SQL',
            hours: 16,
            description: 'Lezioni di SQL fatte da RM'
        });
        vm.lesson.index  = -1;
        
        
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
