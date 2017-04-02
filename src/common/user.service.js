(function () {
"use strict";

angular.module('common')
.service('userService', userService);


userService.$inject = [];
function userService() {
  var service = this;

  service.setUser = function (user) {
    service.user = user;
  };

  service.getUser = function() {
    return service.user;
  }

}



})();
