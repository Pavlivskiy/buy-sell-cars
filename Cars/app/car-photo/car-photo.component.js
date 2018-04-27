angular.module('carPhoto').component("carPhoto", {
    templateUrl: "car-photo/car-photo.template.html",
    controller: ["$http", "$routeParams", function carPhotoController($http, $routeParams) {
        var self = this;
        $http.get('cars/photo/' + $routeParams.carsId + '.json').then(function(response) {
            self.carPhoto = response.data;
        });

    }]
});