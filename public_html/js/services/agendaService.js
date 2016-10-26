app.service('AgendaService', ['$http', 'URL', function( $http, URL){
    
    var onError = function(response)
    {console.log("Errore di chiamata: ", response);};

    
    var getAgenda = function(request, onReady){
        var data = request? request.data : {};
        $http({
            url : URL.REST + '/agenda.json',
            method : "GET",
            data : data,
            dataType : "json"
        }).then(onReady, onError);
    };
    
    return {
        getAgenda : getAgenda
    };
}]);

