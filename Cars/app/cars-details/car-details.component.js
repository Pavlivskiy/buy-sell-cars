angular.module("carDetails").component("carDetails", {
    templateUrl: "cars-details/car-details.template.html",
    controller: ["$http", "$routeParams", function carDetailsController($http, $routeParams) {
        var self = this;
        // self.Name = "";
        // self.response = "";
        self.selectedLanguage = "ua";
        self.submitResponse = function submitResponse(valueName, valueText) {
            if(valueName == '' || valueName == ' '){
                alert("Enter please your name");
                //console.log("Hello");
            }
                
            else if(valueText == '' || valueText == ' '){
                alert("Enter please your text");
                //console.log("Hello2");
            }
                
            else {
                //console.log("3");
                self.txt = { 
                    userName: valueName,
                    text: valueText
                };
                self.carDetail.responses.unshift(self.txt);  
                this.Name = "";
                this.response = "";
            }
        }
        //self.languade = function languade()
        this.translate = function translate(value) {
            //console.log(value);
            $http.get('cars/' + $routeParams.carsId + '/' + value + '.json').then(function(response) {
                self.carDetail = response.data;
            });
        }
        $http.get('cars/' + $routeParams.carsId + '/' + 'ua.json').then(function(response) {
            self.carDetail = response.data;
        });
    }]
});