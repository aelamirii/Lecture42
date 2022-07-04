(function () {
'use strict';

angular.module('SimpleFormsApps', [])
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['$scope'];
function RegistrationController() {

  var user = this;

  user.userName = "";
  user.Email = "";
  user.Phone = "";

  user.submit = function () {

    // user.userName = $scope.username

    user.completed = true;

  }



}

})();
