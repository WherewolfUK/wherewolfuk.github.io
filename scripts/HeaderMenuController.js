(function() {
  'use strict';

  angular
    .module('WherewolfApp')
	.controller('HeaderController', HeaderController);

  HeaderController.$inject = ['$scope', '$location'];

  function HeaderController ($scope, $location) {
    $scope.menuClass = function(page) {
      var current = $location.path().substring(1);
	  return page === current ? 'active' : ''
    }
  };
  
})();