//SERVICES
weatherApp.service('cityService', function(){
   
    this.city = "New York, NY";
    
});

weatherApp.service('weatherService', ['$resource', function($resource){
    
    this.GetWeather = function(city, days){
       var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=685ed96e4e91ba38787c55c481e948d0", {  callback: "JSON_CALLBACK" }, { get: {method: "JSONP"}});

        return weatherAPI.get({ q: city, cnt: days });
    };
}]);