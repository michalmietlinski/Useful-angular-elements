var app = angular.module('game', []);

app.controller('mainController', ['$scope',
    function($scope) {
        //required for dependency
        $scope.text = "fdfdfd"
        $scope.objects = {};
        $scope.currentPage = 1;
        $scope.fieldsPerPage = 10;
        for (var i = 0; i < 105; i++) {
            $scope.objects[i] = i;
        }



        //Pagination functions:
        Object.size = function(obj) {
            var size = 0,
                key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        };

        $scope.goright = function(model, fields, variable) {
            var temp = Math.ceil(Object.keys(model).length / fields);
            var temp2;
            if (variable < temp) {
                temp2 = variable + 1;
            } else {
                temp2 = temp;
            }
            return temp2;
        }
        $scope.goleft = function(variable) {
            var temp;
            if (variable > 1) {
                temp = variable - 1;
            } else {
                temp = 1;
            }
            return temp;
        }
        $scope.lengthof = function(model, fields) {
            var temp = Math.ceil(Object.keys(model).length / fields);
            return temp;
        }
        $scope.setindex = function(model, fields, variable) {
            var temp = Math.ceil(Object.keys(model).length / fields);
            var temp2 = variable;
            if (variable > temp) {
                temp2 = temp;
            }
            if (variable < 1) {
                temp2 = 1;
            }
            return temp2;
        }


        //Validator
        $scope.update = function() {
           alert("done!")
          };
    }
]);