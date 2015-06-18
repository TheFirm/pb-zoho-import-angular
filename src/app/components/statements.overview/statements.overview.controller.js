'use strict';

class StatementsOverview {
  constructor ($scope, $state, $stateParams, PB_API, PB_Session, toaster) {
    $scope.date_range = {
      start: '',
      end: ''
    };

    $scope.statements = [];

    $scope.getStatements = () => {
      let requestData = {
        "sessionId": PB_Session.getSessionId()
        ,"start_date": $scope.date_range.start
        ,"end_date": $scope.date_range.end
      };
      PB_API.getStatements(requestData).success((response)=>{
        $scope.statements = response;
      });
    };
  }

}

StatementsOverview.$inject = [
  '$scope'
  , '$state'
  , '$stateParams'
  , 'PB_API'
  , 'PB_Session'
  , 'toaster'
];

export default StatementsOverview;
