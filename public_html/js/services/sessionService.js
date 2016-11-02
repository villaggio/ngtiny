app.service('SessionService', [ '$http', 'URL', '$sessionStorage', function( $http, URL, $sessionStorage ){
    
    var onError = function(response)
        {console.log("Errore di chiamata: ", response)};

    var onSuccess = function(response)
        {
            var session = angular.toJson(response.data.result.session);
            $sessionStorage.session = session;
        }
        
    var signup = function(request, onSuccess){
        var data = request? request.data : {};
        var onReady = onSuccess;
        $http({
            url : URL.REST + '/signup.json',
            method : "GET",
            data : data,
            dataType : "json",
        }).then(onReady, onError);
    }
    
    var saveProfile = function(request, afterReady){
        var data = request? request.data : {};
        afterReady = afterReady?afterReady:function(){};
        var onReady = function(responce){onSuccess(responce); afterReady();}
        $http({
            url : URL.REST + '/save_profile.json',
            method : "GET",
            data : data,
            dataType : "json",
        }).then(onReady, onError);
    }

    var signin = function(request, afterReady){
        var data = request? request.data : {};
        afterReady = afterReady?afterReady:function(){};
        var onReady = function(responce){onSuccess(responce); afterReady();}
        $http({
            url : URL.REST + '/signin.json',
            method : "GET",
            data : data,
            dataType : "json",
        }).then(onReady, onError);
    }
    
    var get = function(){
        if('session' in $sessionStorage && $sessionStorage.session.length){
            return angular.fromJson($sessionStorage.session);
        }else
            return null;
    }
    
    var isAdmin = function(){
        return get()? (get().role == 'admin'): false;
    }
    
    var signout = function(afterReady){
        $sessionStorage.session = '';
        afterReady();
    }
    
    return {
        signin : signin,
        signout : signout,
        get: get,
        isAdmin : isAdmin,
        signup: signup
    };
}]);

