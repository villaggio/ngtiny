app.controller('LessonsController', ['$scope', function($scope) {
    var vm = $scope;
    var studTot=[];
    var student={};
    
     vm.init = function(){
        vm.resetStudTot();
        vm.resetStudent();
        vm.loadFakeData();
    };
    vm.loadFakeData = function(){
        var student = vm.getStudent();
        vm.studTot.push(vm.getStudent(student));
        student.presTot.push({
            title: 'frontend development',
            hours: 4,
            description:'Angular js'
        });
    };
    vm.resetStudTot = function(){
        vm.studTot.length = 0;
    };
     vm.resetStudent = function(){
        vm.student.index  = -1;
        vm.student.matr  = '';
        if(vm.student.presTot)
            vm.student.presTot.length = 0;
        else
            vm.student.presTot = [];
    };
    vm.getStudent = function(d){
        var student = {};
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
        }else{
            vm.studTot.push(vm.getStudent(vm.student));
            vm.resetStudent();
        }
    };
    
    vm.showStudent = function(index){
        vm.student = vm.getStudent(vm.studTot[index]);
        vm.student.index = index;
    };
    
    vm.deleteStudent = function(index){
        if(vm.student.index == index)
            vm.resetStudent();
        vm.studTot.splice(index,1);
    };
    
    vm.init();
    
}]);
