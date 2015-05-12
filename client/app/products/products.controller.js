'use strict';

angular.module('victoryVinylApp')
  .controller('ProductsCtrl', function ($scope) {
    var _this = this;
    
    _this.message = 'Hello';

    _this.products = [
    	{
    		id: 1,
    		name: 'Apple',
    		price: 1.95
    	},
    	{
    		id: 2,
    		name: 'Monkey',
    		price: 599.99
    	},
    	{
    		id: 3,
    		name: 'MacBook Pro',
    		price: 2499.00
    	}
    ];
  });
