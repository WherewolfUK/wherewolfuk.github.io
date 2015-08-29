(function() {
  'use strict';
  angular
    .module('WherewolfApp', ['ngRoute'])
	.config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider
		  .when('/about', {
		    templateUrl: function() {
			  return 'views/About.html';
			}
		  })
		  .when('/calendar', {
		    templateUrl: function() {
			  return 'views/Calendar.html';
			}
		  })
		  .otherwise({
		    templateUrl: function() {
			  return 'views/Home.html';
			}
		  })
		  ;
	  }]);
})();
