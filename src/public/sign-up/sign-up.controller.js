(function () {
"use strict";

angular.module('public')
.controller('signUpController', signUpController);

signUpController.$inject = ['userService', 'MenuService'];
function signUpController(userService, MenuService) {
  var $ctrl = this;
  $ctrl.info = {};

  $ctrl.signUp = function() {
      MenuService.getMenuItem($ctrl.user.favouriteDish)
        .then(function(response) {
          $ctrl.invalidFavorite = false;
          $ctrl.submitted = true;
          userService.setUser($ctrl.user);
        })
        .catch(function() {
          $ctrl.invalidFavourite = true;
        });


    }

    $ctrl.validateFavorite = function() {
      MenuService.getMenuItem($ctrl.user.favouriteDish)
        .then(function () {
          $ctrl.invalidFavorite = false;
        })
        .catch(function() {
          $ctrl.invalidFavorite = true;
        });
    }

}

})();
