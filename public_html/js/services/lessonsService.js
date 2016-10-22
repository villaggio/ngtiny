app.service('LessonsService', ['$http', 'URL', function( $http, URL ){

  var onError = function(response)
      {console.log("Errore di chiamata: ", response)};

  var getLessons = function(request, onReady){
    var data = request? request.data : {};
    $http({
      url : URL.REST + '/lessons.json',
      method : "GET",
      data : data,
      dataType : "json"
    }).then(onReady, onError);
  }

  return {
    getLessons : getLessons
  };
}]);
