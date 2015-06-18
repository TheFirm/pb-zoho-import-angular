'use strict';

class PbLoginCtrl {
  constructor($scope, $state, PB_API, PB_Session, sessionInitData) {
    $scope.credentials = {
      phone: '',
      password: ''
    };

    this.init = () => {
      PB_Session.setSessionId(sessionInitData.data.id);
      PB_Session.setExpiresIn(sessionInitData.data.expiresIn);
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

    this.init();
  }
}

PbLoginCtrl.$inject = [
  '$scope'
  , '$state'
  , 'PB_API'
  , 'PB_Session'
  , 'sessionInitData'
];

export default PbLoginCtrl;
