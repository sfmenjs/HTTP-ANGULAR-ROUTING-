angular.module('app').controller('CreateController', function(AnimalFactory, $state, $mdToast) {
  var vm = this;
  vm.animal = {};

  vm.createAnimal = function() {
    vm.isDiabled = true; //disables the submit button
    AnimalFactory.createAnimal(vm.animal).then(function() {
      //q.resolve() //=> success cb
      $mdToast.show(
        $mdToast.simple()
          .content('Successfully created your animal!')
          .position('top right')
          .hideDelay(2250)
      );
      $state.go('Home'); //redirect to the home state
    }, function() {
      //q.reject() //=> error cb
      $mdToast.show(
        $mdToast.simple()
          .content('Could not create your animal =(')
          .position('top right')
          .hideDelay(2250)
      );
    });
  };
});
