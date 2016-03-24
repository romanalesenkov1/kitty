(function () {

  'use strict';

  angular
    .module('kittyApp')
    .service('itemsService', ItemsService);

  ItemsService.$inject = ['$http'];

  function ItemsService($http) {

    var service = this;

    service.getItems = getItems;
    service.getItemById = getItemById;

    function getItems(){

      return $http({
          method: 'GET',
          url: window.baseUrl + '/items',
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true,
          apiMock: true
        }
      ).then(
        function (data) {
          return data.data;
        },
        function () {
          console.error('can\'t get items');
        }
      );

    }

    function getItemById(id){

      return $http({
          method: 'GET',
          url: window.baseUrl + '/items/' + id,
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true,
          apiMock: true
        }
      ).then(
        function (data) {
          return data.data;
        },
        function () {
          console.error('can\'t get item with id =' + id);
        }
      );

    }

  }
})();

