angular.
  module('carsApp').
        config(['$locationProvider' ,'$routeProvider', 
            function config($locationProvider, $routeProvider) {
                $locationProvider.hashPrefix('!');
                $routeProvider.
                    when('/cars', {
                        template: '<main-page></main-page>' + 
                                    '<h1></h1>'
                    }).
                    when('/cars/:carsId', {
                      template: '<car-details></car-details>'
                    }).
                    when('/cars/photo/:carsId', {
                      template: '<car-photo></car-photo>'
                    }).
                    otherwise('/cars');
                }]);