'use strict';

class PbLoginCtrl {
  constructor ($scope, PB_API) {
    $scope.credentials = {
      phone: '',
      password: ''
    };

    $scope.login = () => {
      console.log(PB_API);
    };

    $scope.startSession = () => {
      PB_API.createSession().success((response)=>{

      });
    };
  }
}

PbLoginCtrl.$inject = ['$scope', 'PB_API'];

export default PbLoginCtrl;
