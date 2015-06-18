'use strict';

class SendSMScode {
  constructor ($scope, $state, $stateParams, PB_API, PB_Session, toaster) {
    $scope.smsCode = '';

    $scope.sendSMScode = () => {
      let requestData = {
        "sessionId": PB_Session.getSessionId(),
        "smsCode": $scope.smsCode
      };
      PB_API.sendSMSCode(requestData).success((response)=>{
        $state.go('statements_overview');
        console.log('statements_overview');
        toaster.pop('success', "Success", response.message);
        //console.log(response);
      });
    };
  }

}

SendSMScode.$inject = [
  '$scope'
  , '$state'
  , '$stateParams'
  , 'PB_API'
  , 'PB_Session'
  , 'toaster'
];

export default SendSMScode;
