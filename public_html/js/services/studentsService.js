app.service('StudentsService', [ '$http', 'URL', function( $http, URL ){
    
    var onError = function(response)
        {console.log("Errore di chiamata: ", response)};

    var getStudents = function(request, onReady){
        var data = request? request.data : {};
        $http({
            url : URL.REST + '/students.json',
            method : "GET",
            data : data,
            dataType : "json"
        }).then(onReady, onError);
    }
    
    return {
        getStudents : getStudents
    };
}]);

