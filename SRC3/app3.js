(function () {

'use strict';

angular.module('SimpleFormsApps', [])
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['$scope'];
function RegistrationController($scope) {

  var user = this;

  user.UserName = "";
  user.Email = "";
  user.Phone = "";

  user.submit = function () {

    // user.UserName = $scope.username;

    user.completed = true;

  }


}


})();
