(function() {

  'use strict';
  angular
    .module('cric')
    .directive('mainNav', tinMainNav);

  function tinMainNav() {

    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'E',
      templateUrl: 'directives/template/main-nav.html'
    };

    return directiveDefinitionObject;
  }

})();
