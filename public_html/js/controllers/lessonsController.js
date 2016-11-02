//Prima FILA
// nuova pagina e controller in menu e in routing: lessons.html + LessonsController
// Come per Agenda mostrare lessons (array) che conterranno oggetti del tipo:
// {"title":string, "teacher":string, "hours":int, "start":date, "end":date, "arguments":array}
// ogni "argument" sarà come segue {"title":string, "hours":int , "description":string}
         
    app.controller('LessonsController', ['$scope', 'LessonsService', function($scope, LessonsService) {
    var vm = $scope;
    //done
    vm.lessons = [];
    vm.lesson = {};
    //done
    vm.init = function(){
        vm.resetLessons();
        vm.resetLesson();
    };
    
    var populateLessons = function(response){
        var lessons = response.data.result.lessons;
        vm.lessons.length = 0;
        for(var i=0;i<lessons.length;i++){
           vm.lessons.push(lessons[i]); 
        }
    };
        
    vm.resetLessons = function(){
        LessonsService.getLessons({}, populateLessons);
    };

    //done
    // pulizia oggetto lesson
    vm.resetLesson = function(){
        vm.lesson.index  = -1;
        vm.lesson.title  = "";
        vm.lesson.teacher  = "";
        vm.lesson.hours= null;
        vm.lesson.start  = new Date();
        vm.lesson.end  = new Date();
        if(vm.lesson.arguments)
            vm.lesson.arguments.length = 0;
        else
            vm.lesson.arguments = [];
    };

    //done
    // restituisce un nuovo lesson con valori clonati da d
    vm.getLesson = function(d){
        var lesson = {};
        lesson.title = d?d.title:"";
        lesson.teacher = d?d.teacher:"";
        lesson.hours = d?d.hours:null;
        lesson.start = d?d.start:new Date();
        lesson.end = d?d.end:new Date();

        lesson.arguments = [];
        if(d && d.arguments.length)
            for(var i=0;i<d.arguments.length;i++)
                lesson.arguments.push(vm.getArgument(d.arguments[i]));
        return lesson;
    };

    //done
    // restituisce un nuovo argument con valori clonati da e
    vm.getArgument = function(e){
        var argument = {};
        argument.title = e?e.title:"";
        argument.hours = e?e.hours:null;
        argument.description = e?e.description:"";
        return argument;
    };

    //done
    // memorizza le modifiche di lesson e sovrascrive
    // la nuova versione alla sua precedente
    vm.saveLesson = function(index){
        if(index>=0){
            vm.lessons.splice(index, 1, vm.getLesson(vm.lesson));
        }else{
            vm.lessons.push(vm.getLesson(vm.lesson));
            vm.resetLesson();
        }
    };

    //done
    vm.showLesson = function(index){
      
        vm.lesson = vm.getLesson(vm.lessons[index]);
        vm.lesson.index = index;
    };

    //done
    vm.deleteLesson = function(index){
        if(vm.lesson.index === index)
            vm.resetLesson();
        vm.lessons.splice(index,1);
    };

    //------------------
    vm.saveArgument = function(index){
        if(index>=0){
            vm.lesson.arguments.splice(index, 1, vm.getArgument(vm.argument));
        }else{
            vm.lesson.arguments.push(vm.getArgument(vm.argument));
            vm.resetArgument();
        }
    };
    
    vm.showArgument = function(index){
        vm.argument = vm.getArgument(vm.lesson.arguments[index]);
        vm.argument.index = index;
    };
    

    vm.resetArgument = function(){
        vm.argument = vm.getArgument();
        vm.argument.index  = -1;
        
    };
    
    vm.resetArguments = function(){
        vm.lesson.arguments.length  = 0;
    };

    //done
    vm.deleteArgument = function(parent, index){
        var lesson = vm.lessons[parent];
        lesson.arguments.splice(index,1);
        vm.lessons.splice(parent,1,vm.getLesson(lesson));
    };
    

    vm.init();
}]);
