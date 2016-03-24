(function () {

  'use strict';

  angular
    .module('kittyApp')
    .filter('propertiesFilter', function () {

      return function (items, input, fields) {
        var result = [];
        if (input) {
          angular.forEach(items, function (item) {
            angular.forEach(fields, function (field) {

              var stringToSearchIn;

              if (item[field]) {
                stringToSearchIn = item[field].toLowerCase();
                if (stringToSearchIn.toLowerCase().indexOf(input.toLowerCase()) !== -1) {
                  result.push(item);
                }
              }
            });
          });

          var uniqueResult = [];

          angular.forEach(result, function (resultItem) {
            if(uniqueResult.indexOf(resultItem) === -1){
              uniqueResult.push(resultItem);
            }
          });

          return uniqueResult;
        } else {
          return items;
        }
      };

    });
})();