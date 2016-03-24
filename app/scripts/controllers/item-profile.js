(function() {

  'use strict';

  angular.module('kittyApp')
    .controller('ItemProfileCtrl', ItemProfileCtrl);

  ItemProfileCtrl.$inject = ['$routeParams', 'itemsService'];

  function ItemProfileCtrl($routeParams, itemsService) {

    var vm = this;

    activate();

    function activate(){

      itemsService.getItemById($routeParams.itemId).then(function(item){
        vm.item = item;
      });
    }

  }
})();