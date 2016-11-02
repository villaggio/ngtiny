app.service('GlobalService', [ '$http', 'URL', function( $http, URL ){
    
    var onError = function(response)
        {console.log("Errore di chiamata: ", response)};

    
    var getData = function(request, onReady){
        var data = request? request.data : {};
        $http({
            url : URL.REST + '/global_info.json',
            method : "GET",
            data : data,
            dataType : "json"
        }).then(onReady, onError);
    }
    
    return {
        getData : getData
    };
}]);

