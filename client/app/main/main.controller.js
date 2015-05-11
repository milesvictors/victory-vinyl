'use strict';

angular.module('victoryVinylApp')
  .controller('MainCtrl', function ($scope, $http) {

  	var _this = this;

    _this.awesomeThings = [];


    $http.get('/api/things').success(function(awesomeThings) {
      _this.awesomeThings = awesomeThings;
    });

  });
