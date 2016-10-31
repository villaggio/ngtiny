app.controller('LessonsController', ['$scope', 'LessonsService', 'SessionService', function($scope, LessonsService, SessionService) {
    var vm = $scope;
    vm.studTot=[];
    vm.student={};
    
    vm.isAdmin = function(){
        return SessionService.isAdmin();
    };
    
    vm.init = function(){
        vm.resetStudTot();
        vm.resetStudent();
    };
//    vm.loadFakeData = function(){
//        var student = vm.getStudent({
//            name: "Super",
//            surname: "Pippo",
//            matr: 12345,
//            presTot: []
//        });
//        vm.studTot.push(vm.getStudent(student));
//        
//        student.presTot.push(vm.getPresence({
//            title: 'frontend development',
//            hours: 4,
//            description:'Angular js'
//        }));
//        vm.studTot.push(vm.getStudent(student));
//        student.presTot.push(vm.getPresence({
//            title: 'backend development',
//            hours: 4,
//            description:'Laravel PHP' 
//        }));
//        vm.studTot.push(vm.getStudent(student));
//    };
    var populateStudTot = function(response){
        var students = response.data.result.studTot;
        vm.studTot.length = 0;
        for(var i=0;i<students.length;i++){
           vm.studTot.push(students[i]);
           for(var j=0;j<students[i].presTot.length;j++)
                vm.student.presTot.push(students[i].presTot[j]);
        }
    };
    vm.resetStudTot = function(){
        LessonsService.getStudTot(null, populateStudTot);
    };
    vm.resetStudent = function(){
        vm.student = vm.getStudent();
        vm.student.index  = -1;
    };
    vm.resetPresence = function(){
       vm.presence = vm.getPresence();
       vm.presence.index  = -1; 
    };
    vm.resetPresTot = function(){
         vm.student.presTot.length  = 0; 
    };
    vm.getStudent = function(d){
        var student = {};
        student.name  = d?d.name: '';
        student.surname  = d?d.surname: '';
        student.matr  = d?d.matr: '';
        student.presTot = [];
        if(d && d.presTot.length)
            for(var i=0;i<d.presTot.length;i++)
                student.presTot.push(vm.getPresence(d.presTot[i]));
        return student;
    };
    vm.getPresence = function(e){
        var presence = {};
        presence.title= e?e.title:null;
        presence.hours=  e?e.hours:null;
        presence.description= e?e.description:null;
        return presence;        
    };
    vm.saveStudent = function(index){
        if(index>=0){
            vm.studTot.splice(index, 1, vm.getStudent(vm.student));
            vm.resetStudent();
        }else{
            vm.studTot.push(vm.getStudent(vm.student));
            vm.resetStudent();
        }
    };
    vm.savePresence = function(index){
        if(index>=0){
            vm.student.presTot.splice(index, 1, vm.getPresence(vm.presence));
            vm.resetPresence();
        }else{
            vm.student.presTot.push(vm.getPresence(vm.presence));
            vm.resetPresence();
        }
    };
    vm.showStudent = function(index){
        vm.student = vm.getStudent(vm.studTot[index]);
        vm.student.index = index;
    };
    vm.showPresence = function(index){
        vm.presence = vm.getPresence(vm.student.presTot[index]);
        vm.presence.index = index;
    };
    vm.deleteStudent = function(index){
        vm.resetStudent();
        vm.studTot.splice(index,1);
    };
    vm.deletePresence = function(key, index){
        vm.resetPresence();
        vm.studTot[key].presTot.splice(index,1);      
    }; 
    vm.init();
    
}]);
