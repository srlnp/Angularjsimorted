app.service("homeService",homeService);
function homeService($http,$localStorage){

    this.getStaticData = function(){
        return $http.post("http://localhost:3000/static",
                         {'token':$localStorage.poc.data.token}).then(function(posRes){
                                return posRes;
                         },function(errRes){
                                return errRes;
                         });
    };

    this.getMySQLData = function(){
        return $http.post("http://localhost:3000/mysql",
                         {'token':$localStorage.poc.data.token}).then(function(posRes){
                                return posRes;
                         },function(errRes){
                                return errRes;
                         });
    };

    this.getMongoDBData = function(){
        return $http.post("http://localhost:3000/mongodb",
                         {'token':$localStorage.poc.data.token}).then(function(posRes){
                                return posRes;
                         },function(errRes){
                                return errRes;
                         });
    }

}