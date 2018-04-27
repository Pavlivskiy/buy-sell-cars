angular.module("mainPage").component("mainPage", {
    templateUrl: "main-page/main-page.template.html",
    controller: ["$http", function MainPageController($http) {
        
        var self = this;
        this.minValue = 1;
        this.maxValue = 1000000;
        this.minYear = 1900;
        this.maxYear = 2018; 
        this.date = new Date().getFullYear();
        self.newCars = function newCars() {
            this.language.limit = 5;
            if(self.carsList == undefined)
                self.carsList = self.language.cars;
            if(self.carsList5 == undefined)
                self.carsList5 = self.language.cars;
            console.log(self.carsList5);
            //var carsList2 = self.carsList5;
            self.language.cars = [];
            angular.forEach(self.carsList5, function(todo)  {
                if(todo.new == "новий" || todo.new == "новый") {
                    self.language.cars.unshift(todo); 
                }
            });
            return this.carsList;
        }
        self.allCars = function allCars(){
            this.language.limit = 5;
            self.firstMarks(self.language.markCars[0]);
            // if(this.carsList3 == undefined)
            //     this.carsList3 = self.language.cars;
            // var carsList2 = this.carsList3;
            console.log(this.carsList);
            this.language.cars = [];
            angular.forEach(this.carsList, function(todo)  {
                self.language.cars.unshift(todo); 
            });
        }
        self.caseBodyCars = function (value, carsList2){
            if(self.carsList == undefined)
                self.carsList = self.language.cars;
            angular.forEach(carsList2, function(todo)  {
                if(value == "Будь-який" || value == "Любой")
                    self.language.cars = self.carsList;
                else if(todo.bodyType == value) {
                    self.language.cars.unshift(todo); 
                }
            });
        }
        self.TypeBodyCar = function TypeBodyCar(value) {
            if(self.carsList == undefined)
                self.carsList = self.language.cars;
            var carsList2 = self.carsList;
            self.language.cars = [];
            switch(value){
                case value:{
                    self.caseBodyCars(value, carsList2);
                }break;
            }
            return self.carsList;
        }
        self.caseMarkCars = function(value, carsList2) {
            //self.modelCars = self.language.markCars[0];
            angular.forEach(carsList2, function(todo)  {
                if(todo.mark == value) {
                    self.language.cars.unshift(todo);
                }
            });
        }
        self.caseRegionCars = function(value, carsList2){
            if(self.carsList5 == undefined)
                self.carsList5 = self.carsList;
                console.log(value);
            angular.forEach(self.carsList5, function(todo)  {
                if(value == "Будь-який" || value == "Любой")
                    self.language.cars = self.carsList5;
                else if(todo.city == value) {
                    self.language.cars.unshift(todo); 
                }
            });
        }
        self.regionCar = function regionCar(value){
            if(self.carsList == undefined)
                self.carsList = self.language.cars;
            var carsList2 = self.carsList;
            self.language.cars = [];
            switch(value){
                case value:{
                    self.caseRegionCars(value, carsList2);
                }break;
            }
            return self.carsList;
        }
        self.changeMark = function changeMark(value) {
            if(self.carsList == undefined)
                self.carsList = self.language.cars;
            
            var carsList2 = self.carsList;
            self.language.cars = [];
            switch(value){
                case "Будь-який":{
                    self.language.cars = self.carsList;
                    self.chooseModel = [];
                }break;
                case "Любой":{
                    self.language.cars = self.carsList;
                    self.chooseModel = [];
                }break;
                case "Skoda":{
                    self.chooseModel = self.language.modelCars.Skoda;
                    self.caseMarkCars(value, carsList2);
                }break;  
                case "BMW":{
                    self.chooseModel = self.language.modelCars.BMW;
                    self.caseMarkCars(value, carsList2);
                }break;    
                case "Audi":{
                    self.chooseModel = self.language.modelCars.Audi;
                    self.caseMarkCars(value, carsList2);
                }break;   
                case "Citroen":{
                    self.chooseModel = self.language.modelCars.Citroen;
                    self.caseMarkCars(value, carsList2);
                }break;   
                case "Ford":{
                    self.chooseModel = self.language.modelCars.Ford;
                    self.caseMarkCars(value, carsList2);
                }break;   
                case "Geely":{
                    self.chooseModel = self.language.modelCars.Gelly;
                    self.caseMarkCars(value, carsList2);
                }break;   
                case "Honda":{
                    self.chooseModel = self.language.modelCars.Honda;
                    self.caseMarkCars(value, carsList2);
                }break;   
                case "Kia":{
                    self.chooseModel = self.language.modelCars.Kia;
                    self.caseMarkCars(value, carsList2);
                }break;   
                case "Lexus":{
                    self.chooseModel = self.language.modelCars.Lexus;
                    self.caseMarkCars(value, carsList2);
                }break;   
                case "Mazda":{
                    self.chooseModel = self.language.modelCars.Mazda;
                    self.caseMarkCars(value, carsList2);
                }break;   
                case "Mercedes-Benz":{
                    self.chooseModel = self.language.modelCars.MercedesBenz;
                    self.caseMarkCars(value, carsList2);
                }break;   
                case "Mitsubishi":{
                    self.chooseModel = self.language.modelCars.Mitsubishi;
                    self.caseMarkCars(value, carsList2);
                }break;   
                case "Nissan":{
                    self.chooseModel = self.language.modelCars.Nissan;
                    self.caseMarkCars(value, carsList2);
                }break;   
                case "Opel":{
                    self.chooseModel = self.language.modelCars.Opel;
                    self.caseMarkCars(value, carsList2);
                }break;   
                case "Renault":{
                    self.chooseModel = self.language.modelCars.Renault;
                    self.caseMarkCars(value, carsList2);
                }break;   
                case "Toyota":{
                    self.chooseModel = self.language.modelCars.Toyota;
                    self.caseMarkCars(value, carsList2);
                }break;   
                case "Volkswagen":{
                    self.chooseModel = self.language.modelCars.Volkswagen;
                    self.caseMarkCars(value, carsList2);
                }break;        
            }
            self.carsList5 = self.language.cars;
            return self.carsList, self.carsList5;
        }
        self.caseModelCars = function(value, carsList2) {
            console.log(this.carsList5);
            if(self.carsList == undefined)
                self.carsList = self.language.cars;
            angular.forEach(self.carsList5, function(todo)  {
                if(value == "Будь-яка" || value == "Любая"){
                    self.language.cars = self.carsList5; 
                }  
                else if(todo.model == value) {
                    self.language.cars.unshift(todo);
                }
            });
        }
        self.changeModel = function changeModel(value) {
            if(self.carsList == undefined)
                self.carsList = self.language.cars;
            var carsList2 = self.carsList;
            self.language.cars = [];
            switch(value){
                case value:{
                    self.caseModelCars(value, carsList2);
                }break;
            }
            return self.carsList;
        }
        self.caseFuelCars = function caseFuelCars(value, carsList2) {
            if(self.carsList5 == undefined)
                self.carsList5 = self.carsList;
            angular.forEach(self.carsList5, function(todo)  {
                if(value == "Будь-який" || value == "Любой")
                    self.language.cars = self.carsList5;
                else if(todo.engeen == value) {
                    self.language.cars.unshift(todo); 
                }
            });
        }
        self.changeFuel = function changeFuel(value){
            if(self.carsList5 == undefined)
                self.carsList5 = self.carsList;
            var carsList2 = self.carsList;
            self.language.cars = [];
            switch(value){
                case value:{
                    self.caseFuelCars(value, carsList2);
                }break;
            }
            return self.carsList;
        }
        self.usedCars = function usedCars() {
            this.language.limit = 5;
            if(self.carsList == undefined)
                self.carsList = self.language.cars;
            if(self.carsList5 == undefined)
                self.carsList5 = self.language.cars;
            console.log(self.carsList5);
            //var carsList2 = self.carsList5;
            self.language.cars = [];
            angular.forEach(self.carsList5, function(todo)  {
                if(todo.new == "вживані" || todo.new == "б/у") {
                    self.language.cars.unshift(todo); 
                }
            });
            return this.carsList;
        }
        self.price = function price(minVal, maxVal) {
            if(self.carsList == undefined)
                self.carsList = self.language.cars;
            var carsList2 = self.carsList;
            if(carsList2 === undefined) {
                carsList2 = self.language.cars;
            }
            self.language.cars = [];
            angular.forEach(carsList2, function(todo)  {
                if(todo.price >= minVal && todo.price <= maxVal) {
                    self.language.cars.unshift(todo); 
                }                
            });
        }
        self.year = function year(minY, maxY) {
            if(self.carsList == undefined)
                self.carsList = self.language.cars;
            var carsList2 = self.carsList;
            if(carsList2 === undefined) {
                carsList2 = self.language.cars;
            }
            self.language.cars = [];
            angular.forEach(carsList2, function(todo)  {
                if(todo.year >= minY && todo.year <= maxY) {
                    self.language.cars.unshift(todo); 
                }                
            });
        }
        self.caseColorCars = function caseColorCars(value, carsList2){
            if(self.carsList5 == undefined)
                self.carsList5 = self.carsList;
                //console.log(self.carsList);
            angular.forEach(self.carsList5, function(todo)  {
                if(value == "Будь-який" || value == "Любой")
                    self.language.cars = self.carsList5;
                else if(todo.color == value) {
                    self.language.cars.unshift(todo); 
                }
            });
        }
        self.colorCar = function colorCar(value) {
            if(self.carsList == undefined)
                self.carsList = self.language.cars;
            var carsList2 = self.carsList;
            self.language.cars = [];
            switch(value){
                case value:{
                    self.caseColorCars(value, carsList2);
                }break;
            }
            return self.carsList;
        }
        self.selectedLanguage = 'ua';
        //this.selectFuel = 'Будь-який';
        //this.selectCity = 'Будь-який';
        //this.selectColor = self.language.colorCars[0]; 

        //this.bodyType = 'Будь-який';
        // this.firstMarks = 'Будь-який';
        this.modelCars = 'Будь-який';
        this.categoryCars = 'Будь-який';
        self.loadMore = function loadMore() {
            this.language.limit += 5;
        }
        self.firstColor = function firstColor(value) {
            self.selectColor = value;
        }
        self.firstMarks = function firstMarks(value) {
            self.marks = value;
        }
        self.firstBodyType = function firstBodyType(value) {
            self.bodyType = value;
            //console.log(self.language.cars);
        }
        self.firstFuel = function firstFuel(value) {
            self.selectFuel = value;
        }
        self.firstCity = function firstCity(value) {
            self.selectCity = value;
        }
        this.translate = function translate(value) {
            $http.get('languages/translation_'+ value +'.json').then(function(response) {
                self.language = response.data;
                self.firstColor(self.language.colorCars[0]);
                self.firstMarks(self.language.markCars[0]);
                self.firstBodyType(self.language.bodyTypes[0]);
                self.firstFuel(self.language.fuelCars[0]);
                self.firstCity(self.language.cityCars[0]);
            });
        }
        
        $http.get('languages/translation_ua.json').then(function(response) {
            self.language = response.data;
            this.selectColor = self.language.colorCars[0];
            self.firstColor(self.language.colorCars[0]);
            self.firstMarks(self.language.markCars[0]);
            self.firstBodyType(self.language.bodyTypes[0]);
            self.firstFuel(self.language.fuelCars[0]);
            self.firstCity(self.language.cityCars[0]);
        });
        self.myInterval = 4000;
    }]
});