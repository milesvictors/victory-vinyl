'use strict';

angular.module('victoryVinylApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('products', {
        url: '/products',
        templateUrl: 'app/products/products.html',
        controller: 'ProductsCtrl',
        controllerAs: 'PCtrl'
      });
  });