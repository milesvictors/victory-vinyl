'use strict';

angular.module('victoryVinylApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    this.navbarLinks = [
      {
        'title': 'Home',
        'link': '/'
      },
      {
        'title': 'Products',
        'link': '/products'
      },
      {
        'title': 'About Us',
        'link': '/about'
      }
    ]

    this.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });