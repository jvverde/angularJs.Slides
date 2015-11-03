'use strict';

/**
 * @ngdoc function
 * @name ex1.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ex1
 */
angular.module('ex1',[])
  .controller('MainCtrl', function () {
    var scope = this;
    scope.names = ['Rita','Rui'];
    scope.add = function(){
      scope.names.push('');
    }
  });
