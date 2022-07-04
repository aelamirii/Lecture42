(function () {

'use strict';


angular.module('SimpleFormsApps', [])
.controller('RegistrationController', RegistrationController);



RegistrationController.$inject = ['$scope'];
function RegistrationController($scope)
{

  var list = this;

  list.userName = "";
  list.Email = "";
  list.Phone = "";

  list.submit = function (){

    // list.userName = $scope.userName;

    list.completed = true;






  }




}


})();
