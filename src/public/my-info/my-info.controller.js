(function () {
"use strict";

angular.module('public')
.controller('myInfoController', myInfoController);

myInfoController.$inject = ['user', 'MenuService'];
function myInfoController(user, MenuService) {
  var $ctrl = this;

  if (user) {
    $ctrl.user = user;
    MenuService.getMenuItem(user.favouriteDish)
      .then(function(response) {
        $ctrl.menuItem = response;
      })
      .catch(function(response) {
        console.log(response);
      });
  }
}

})();
