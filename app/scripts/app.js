(function() {

  'use strict';

angular
  .module('kittyApp', [
    'ngRoute',
    'ngSanitize',
    'apiMock'
  ])

  .config(['$routeProvider', 'apiMockProvider',
    function ($routeProvider, apiMockProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts.html'
      })
      .when('/items', {
        templateUrl: 'views/items-list.html',
        controller: 'ItemsListCtrl',
        controllerAs: 'itemsList'
      })
      .when('/items/:itemId', {
        templateUrl: 'views/item-profile.html',
        controller: 'ItemProfileCtrl',
        controllerAs: 'itemProfile'
      })
      .otherwise({
        redirectTo: '/'
      });


    apiMockProvider.config({
      mockDataPath: '/mocks',
      apiPath: window.baseUrl
    });


  }]);


})();