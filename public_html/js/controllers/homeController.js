app.controller('HomeController', ['$scope', function($scope) {
   var vm = $scope;
   
   vm.parameters = {};
   vm.form = {};
    
    vm.showHide = function() {
        vm.myVar = !vm.myVar;
        vm.showData();
    };
   
   vm.init = function(){
        vm.myVar = false;
        vm.parameters = {
           logo: "img/logo_villaggio.jpg",
           scuola: 'Villaggio del Ragazzo',
           decreto: 'Riconoscimento Giuridico con decreto del Presidente della Repubblica N. 1364 del first Ottobre 1951',
           sottotitolo: 'centro formazione professionale',
           centroPagina: 'Registro presenza allievi',
           codice: '',
           title: ' PROGRAMMATORE SVILUPPATORE SOFTWARE',
           start: '',
           end:  ''
       };
    };
    
    // apertura in modifica dei dati
    vm.showData = function(){
        vm.form = vm.getData(vm.parameters);
    };
    
    // apertura in modifica dei dati
    vm.saveData = function(){
        console.log(vm.parameters);
        vm.setData(vm.parameters, vm.form);
        console.log(vm.parameters);
    };
    
    // apertura in modifica dei dati
    vm.getData = function(p){
        var parameters = {};
        parameters.logo = p?p.logo:null;
        parameters.scuola =  p?p.scuola:null;
        parameters.decreto =  p?p.decreto:null;
        parameters.sottotitolo =  p?p.sottotitolo:null;
        parameters.centroPagina =  p?p.centroPagina:null;
        parameters.codice =  p?p.codice:null;
        parameters.title =  p?p.title:null;
        parameters.start =  p?p.start:null;
        parameters.end =  p?p.end:null;
        return parameters;
    };
    
    vm.setData = function(target, source){
        var parameters = target;
        parameters.logo = source?source.logo:null;
        parameters.scuola =  source?source.scuola:null;
        parameters.decreto =  source?source.decreto:null;
        parameters.sottotitolo =  source?source.sottotitolo:null;
        parameters.centroPagina =  source?source.centroPagina:null;
        parameters.codice =  source?source.codice:null;
        parameters.title =  source?source.title:null;
        parameters.start =  source?source.start:null;
        parameters.end =  source?source.end:null;
    }
    
    vm.init();
}
]);

