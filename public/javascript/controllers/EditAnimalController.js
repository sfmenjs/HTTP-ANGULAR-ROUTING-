(function() {
  'use strict';
  angular.module('app').controller('EditAnimalController', function(AnimalFactory, $state, $stateParams, $mdToast) {
    var vm = this;
    var guid = $stateParams.dolphin;
    if(!guid) {
      $mdToast.show(
        $mdToast.simple()
          .content('Redirecting to the home page.')
          .position('top right')
          .hideDelay(2250)
      );
      $state.go('Home');
    } //end if!guid

    AnimalFactory.getAnimalById(guid).then(function(res) {
      //res will be null if the animal can't be found
      if(res) vm.animal = res;
      else {
        $mdToast.show(
          $mdToast.simple()
            .content('Could not find the animal.')
            .position('top right')
            .hideDelay(2000)
        );
        $state.go('Home');
      }
    }, function() {
      $mdToast.show(
        $mdToast.simple()
          .content('Could not get the animal from the database.')
          .position('top right')
          .hideDelay(2000)
      );
    }); //end of getAnimalById

    vm.editAnimal = function() {
      AnimalFactory.editAnimal(vm.animal, guid).then(function() {
        $mdToast.show(
          $mdToast.simple()
            .content('Your changes have been saved.')
            .position('top right')
            .hideDelay(2000)
        );
        $state.go('Home');
      }, function() {
        $mdToast.show(
          $mdToast.simple()
            .content('Could not save your changes.')
            .position('top right')
            .hideDelay(2000)
        );
      });
    };
  }); //end of controller
})();
