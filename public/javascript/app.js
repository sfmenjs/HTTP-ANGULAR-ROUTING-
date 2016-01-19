(function() {
  "use strict";
  angular.module('app', ['ngMaterial', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('Home', { //when we ask for the "Home" state, show this
        url: '/', //if someone goes to this url, go to that state
        //just / means localhost:3000/
        templateUrl: '/templates/home.html',
        controller: 'HomeController as vm'
      }).state('Create', {
        url: '/Create',
        templateUrl: '/templates/create.html',
        controller: 'CreateController as vm'
      }).state('EditAnimal', {
        url: '/Animal/Edit/:dolphin',
        templateUrl: '/templates/edit_animal.html',
        controller: 'EditAnimalController as vm'
      }).state('404', {
        url: '/404',
        templateUrl: '/templates/404.html'
      });
      $urlRouterProvider.otherwise('/404');
    });
})();
