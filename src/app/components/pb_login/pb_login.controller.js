'use strict';

class PbLoginCtrl {
  constructor($scope, $state, PB_API, PB_Session) {
    $scope.credentials = {
      phone: '',
      password: ''
    };

    $scope.login = () => {
      let requestData = {
        "sessionId": PB_Session.getSessionId(),
        "login": $scope.credentials.phone,
        "password": $scope.credentials.password
      };
      PB_API.login(requestData).success((response)=> {
        $state.go('selectMobNum', {mobAccs: response});
      });
    };

    $scope.startSession = () => {
      PB_API.createSession().success((response)=> {
        PB_Session.setSessionId(response.id);
        PB_Session.setExpiresIn(response.expiresIn);
      });
    };
  }
}

PbLoginCtrl.$inject = [
  '$scope'
  , '$state'
  , 'PB_API'
  , 'PB_Session'
];

export default PbLoginCtrl;
