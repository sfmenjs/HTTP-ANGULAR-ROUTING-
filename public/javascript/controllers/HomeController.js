angular.module('app').controller('HomeController', function(AnimalFactory, $mdToast) {
  var vm = this;
  vm.animals = [];

  AnimalFactory.getAllAnimals().then(function(animals) {
    vm.animals = animals;
    console.log(animals);
  }, function() {
    $mdToast.show(
      $mdToast.simple()
      .content('Error getting animals')
      .position('top right')
      .hideDelay(2250)
    );
  });

  vm.deleteAnimal = function(index) {
    AnimalFactory.deleteAnimal(vm.animals[index]._id).then(function() {
        $mdToast.show(
          $mdToast.simple()
          .content(vm.animals[index].name + ' has been removed.')
          .position('top right')
          .hideDelay(2250)
        );
        vm.animals.splice(index, 1);
      },
      function() {
        $mdToast.show(
          $mdToast.simple()
          .content('Could not delete the animal.')
          .position('top right')
          .hideDelay(2250)
        );
      });
  }
});
