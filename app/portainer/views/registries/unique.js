angular.module('portainer.app').directive('unique', [
  function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, attrs, ctrl, ngModel) {
        ngModel.$validators.unique = function (modelValue) {
          return scope.isUnique(modelValue);
        };
      },
    };
  },
]);
