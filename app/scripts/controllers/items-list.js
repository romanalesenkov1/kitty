(function() {

  'use strict';

  angular.module('kittyApp')
    .controller('ItemsListCtrl', ItemsListCtrl);

  ItemsListCtrl.$inject = ['itemsService'];

  function ItemsListCtrl(itemsService) {

    var vm = this;

    activate();

    vm.searchCriteria = '';

    vm.orderBy = orderBy;

    vm.TYPE_LIST = [
      {value: 'title', title: 'Name'},
      {value: 'price', title: 'Price'},
      {value: 'year', title: 'Birth year'},
      {value: 'weight', title: 'Weight'}
    ];

    vm.type = vm.TYPE_LIST[0].value;
    vm.reverse = false;



    function activate(){
      itemsService.getItems().then(function(items){
        vm.items = items;
      });
    }



    function orderBy(type) {
      vm.reverse = (vm.type === type) ? !vm.reverse : false;
      vm.type = type;
    }

  }
})();