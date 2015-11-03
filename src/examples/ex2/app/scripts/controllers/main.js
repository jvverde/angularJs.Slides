'use strict';

/**
 * @ngdoc function
 * @name ex1.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ex1
 */
angular.module('ex2',[])
  .controller('MainCtrl', function () {
    var scope = this;
    scope.persons = [
      {
        name:'Ana',
        phone: '969 100 300'
      },{
        name:'Rui',
        phone: '939 100 300'
      },{
        name:'Pedro',
        phone: '919 100 300'
      },{
        name:'Paula',
        phone: '919 100 301'
      },{
        name:'Rita',
        phone: '919 100 302'
      }
    ];
  });
