'use strict';

class SelectMobNumCtrl {
  constructor ($scope, $state, $stateParams, PB_API, PB_Session, toaster) {
    $scope.mobNums = $stateParams.mobAccs.message;
    $scope.mobNum = {
      id: null
    };

    $scope.selectMobNum = () => {
      let requestData = {
        "sessionId": PB_Session.getSessionId(),
        "monNumId": $scope.mobNum.id
      };
      PB_API.requestSMSCode(requestData).success((response)=>{
        toaster.pop('success', "Success", response.message);
        $state.go('sendSMScode');
        //console.log(response);
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
  , 'toaster'
];

export default SelectMobNumCtrl;
