app.controller('StudentsController', ['$scope', 'StudentsService', function($scope, StudentsService) {
    var vm = $scope;
    
    vm.students = [];
    vm.student = {};
    
    vm.init = function(){
        vm.resetStudent();
        vm.resetStudents();
    };
    
    var populateStudents = function(response){
        var students = response.data.result.students;
        vm.students.length = 0;
        for(var i=0;i<students.length;i++){
           vm.students.push(students[i]); 
        }
    }
    
    vm.resetStudents = function(){
        StudentsService.getStudents(null, populateStudents);
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
        //console.log(JSON.stringify(vm.students));
    };
    
    vm.showStudent = function(index){
        vm.student = vm.getStudent(vm.students[index]);
        vm.student.index = index;
    };
    
    vm.deleteStudent = function(index){
        if(vm.student.index == index)
            vm.resetStudent();
        vm.students.splice(index,1);
    };
    
    vm.init();
}]);
