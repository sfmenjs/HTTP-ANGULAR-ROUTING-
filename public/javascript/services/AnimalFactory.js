angular.module('app').factory('AnimalFactory', function($http, $q) {
  var o = {}; //THIS IS ANIMAL FACTORY
  var firebase = 'https://jd93-moviesnacks.firebaseio.com/';

  o.getAllAnimals = function() {
    var q = $q.defer();
    $http.get(firebase + '.json').then(function(res) {
      var animals = [];
      for(var prop in res.data) {
        res.data[prop]._id = prop;
        animals.push(res.data[prop]);
      }
      q.resolve(animals);
    }, function(err) {
      console.error(err);
      q.reject();
    });
    return q.promise;
  }

  o.getAnimalById = function(id) {
    var q = $q.defer();
    $http.get(firebase + id + '/.json').then(function(res) {
      q.resolve(res.data);
    }, function(err) {
      q.reject(err);
    });
    return q.promise;
  };

  o.createAnimal = function(animal) {
    var q = $q.defer();
    $http.post(firebase + '.json', animal).then(function(res) {
      //success cb
      console.log(res);
      q.resolve();
    }, function(err) {
      //error cb
      console.log(err);
      q.reject();
    });
    return q.promise;
  };

  o.editAnimal = function(animal, id) {
    var q = $q.defer();
    $http.put(firebase + id + '/.json', animal).then(function(res) {
      q.resolve();
    }, function(err) {
      q.reject();
    });
    return q.promise;
  };

  o.deleteAnimal = function(id) {
    var q = $q.defer();
    $http.delete(firebase + id + '/.json').then(function() {
      q.resolve();
    }, function() {
      q.reject();
    });
    return q.promise;
  };

  return o;
});
