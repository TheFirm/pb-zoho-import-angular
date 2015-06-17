'use strict';

class SelectMobNumCtrl {
  constructor ($scope, $state, $stateParams, PB_API, PB_Session) {
    $scope.mobNums = $stateParams.mobAccs.message;
    $scope.bobNumId = null;

    $scope.selectMobNum = () => {
      let requestData = {
        "sessionId": PB_Session.getSessionId(),
        "monNumId": $scope.credentials.phone
      };
      PB_API.requestSMSCode(requestData).success((response)=>{
        $state.go('selectMobNum', {mobAccs: response});

        //console.log(response);
      });
    };

    $scope.startSession = () => {
      PB_API.createSession().success((response)=>{
        PB_Session.setSessionId(response.id);
        PB_Session.setExpiresIn(response.expiresIn);
      });
    };
  }
}

SelectMobNumCtrl.$inject = [
  '$scope'
  , '$state'
  , '$stateParams'
  , 'PB_API'
  , 'PB_Session'
];

export default SelectMobNumCtrl;
