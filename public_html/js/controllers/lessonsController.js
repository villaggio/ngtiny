//Prima FILA
// nuova pagina e controller in menu e in routing: lessons.html + LessonsController
// Come per Agenda mostrare lessons (array) che conterranno oggetti del tipo:
// {"title":string, "teacher":string, "hours":int, "start":date, "end":date, "arguments":array}
// ogni "argument" sarà come segue {"title":string, "hours":int , "description":string}
         
    app.controller('LessonsController', ['$scope', function($scope) {
    var vm = $scope;
    //done
    vm.lessons = [];
    vm.lesson = {};
    //done
    vm.init = function(){
        vm.resetLessons();
        vm.resetLesson();
        //test
        vm.loadFakeLessons();
        console.log(vm.lessons);
    };
    //to do
    // metodo di inizializzazione dati per test
    vm.loadFakeLessons = function(){
        var lesson = vm.getLesson(); //done

        var title = "JavaScript";           // var eventDateFrom = new Date();
        var teacher = "Fazio";              // var eventDateTo = new Date();
        var hours = parseInt(130);          // eventDateFrom.setHours(8, 30);
        var start = new Date();
        var end = new Date();

        var title1 = "HTML/CSS";            // var eventDateFrom1 = new Date();
        var teacher1 = "Sanguineti";        // var eventDateTo1 = new Date();
        var hours1 = parseInt(50);          // eventDateFrom1.setHours(8, 30);
        var start1 = new Date();            // eventDateTo1.setHours(12, 30);
        var end1 = new Date();

        var title2 = "HTML/CSS";            // var eventDateFrom2 = new Date();
        var teacher2 = "Sanguineti";        // var eventDateTo2 = new Date();
        var hours2 = parseInt(50);          // eventDateFrom2.setHours(13, 30);
        var start2 = new Date();            // eventDateTo2.setHours(17, 30);
        var end2 = new Date();

        vm.lessons.push(vm.getLesson(lesson)); //done

        lesson.arguments.push({ //done
        title: "cicli for, do_while, while",   // from: eventDateFrom,
        hours: 4,                              // to: eventDateTo,
        description: "spiegazione e esercizio" // lesson: 'Frontend Dev 0',
                                               // argument: 'AngularJS',
                                               // teacher: 'Fabio Fazio'
        });
        vm.lessons.push(vm.getLesson(lesson)); //done
        lesson.arguments.splice(0,1); //done
        lesson.arguments.push({ //done
        title: "modifica del DOM da script",   // from: eventDateFrom1,
        hours: 8,                              // to: eventDateTo1,
        description: "esercizi in classe"      // from: eventDateFrom1,
                                               // to: eventDateTo1,
                                               // lesson: 'Frontend Dev 1',
                                               // argument: 'AngularJS',
                                               // teacher: 'Fabio Fazio'
        });
        lesson.arguments.push({ //done
        title: "cicli for, do_while, while",   // from: eventDateFrom2,
        hours: 4,                              // to: eventDateTo2,
        description: "spiegazione e esercizio" // lesson: 'Frontend Dev 2',
                                               // argument: 'AngularJS',
                                               // teacher: 'Fabio Fazio'
        });
        vm.lessons.push(vm.getLesson(lesson)); //done
    };

    //done
    // pulizia lista di lesson in lessons
    vm.resetLessons = function(){
        vm.lessons.length = 0;
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
        if(vm.lesson.index == index)
            vm.resetLesson();
        vm.lessons.splice(index,1);
    };

    //done
    vm.deleteArgument = function(parent, index){
        var lesson = vm.lessons[parent];
        lesson.arguments.splice(index,1);
        vm.lessons.splice(parent,1,vm.getLesson(lesson));
    };

    vm.init();
}]);
