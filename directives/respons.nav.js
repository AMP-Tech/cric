(function() {
  'use strict';
  angular.module('cric')
    .directive('responsiveNav', responsiveNav);
  function responsiveNav() {

    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'E',
      templateUrl: 'directives/template/responsive-nav.html',
      link: function(scope, elem, attrs, ctrl) {
      	elem.on('click', function(e) {
      		$('.responsive-wrapper').slideToggle( 150, 'swing');
          e.preventDefault();
      	});
      }
    };

    return directiveDefinitionObject;
  }


})();
