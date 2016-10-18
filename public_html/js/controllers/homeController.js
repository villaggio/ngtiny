app.controller('HomeController', ['$scope', function($scope) {
   var vm = $scope;
   vm.init = function(){
       vm.a = 123;
        vm.parameters = {
           logo: 'img/logo.png',
           scuola: 'Villaggio del Ragazzo',
           decreto: 'Riconoscimento Giuridico con decreto del Presidente della RepVubblica N. 1364 del first Ottobre 1951',
           sottotitolo: 'Centro formazione professionale',
           centroPagina: 'Registro presenza allievi'
       };
    }
    vm.init();
}
]);
    
     /*
    vm.
    
    
    vm.students = [];
    vm.student = {};
    
    vm.init = function(){
        vm.resetStudent();
        vm.resetStudents();
    };
    
    vm.resetStudents = function(){
        vm.students.length = 0;
    };
    
    vm.resetStudent = function(){
        vm.student.name  = '';
        vm.student.surname  = '';
        vm.student.sex = 'Uomo';
        vm.student.borndate = new Date();
        vm.student.index = -1;
    };
    
    vm.getStudent = function(s){
        var student = {};
        student.name  = s.name;
        student.surname  = s.surname;
        student.sex = s.sex;
        student.borndate = s.borndate;
        return student;
    };
    
    vm.saveStudent = function(index){
        if(index>=0){
            vm.students.splice(index, 1, vm.getStudent(vm.student));
        }else{
            vm.students.push(vm.getStudent(vm.student));
            vm.resetStudent();
        }
    };
    
    vm.showStudent = function(index){
        vm.student = vm.getStudent(vm.students[index]);
        vm.student.index = index;
    };
    
    vm.deleteStudent = function(index){
        vm.students.splice(index,1);
    };
    
    vm.init();
}]);*/
