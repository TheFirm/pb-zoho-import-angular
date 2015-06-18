'use strict';

import MainCtrl from './main/main.controller';
import NavbarCtrl from '../app/components/navbar/navbar.controller';
import PbLoginCtrl from '../app/components/pb_login/pb_login.controller';
import SelectMobNumCtrl from '../app/components/selectMobNum/select_mob_num.controller';
import SendSMScode from '../app/components/sendSMScode/sendSMS.controller';
import StatementsOverview from '../app/components/statements.overview/statements.overview.controller';

import PB_API from '../app/services/API';
import PB_Session from '../app/services/PB_Session';

angular.module('fbZoho', ['ngAnimate', 'ngSanitize', 'ui.router', 'toaster'])
  .controller('MainCtrl', MainCtrl)
  .controller('NavbarCtrl', NavbarCtrl)

  .controller('PbLoginCtrl', PbLoginCtrl)
  .controller('SelectMobNumCtrl', SelectMobNumCtrl)
  .controller('SendSMScode', SendSMScode)
  .controller('StatementsOverview', StatementsOverview)

  .service('PB_API', PB_API)
  .service('PB_Session', PB_Session)

  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/components/pb_login/login.html',
        controller: 'PbLoginCtrl',
        resolve: {
          sessionInitData: (PB_API) => {
            return PB_API.createSession();
          }
        }
      })
      .state('selectMobNum', {
        //url: '/select-mobile-number',
        templateUrl: 'app/components/selectMobNum/selectMobileNum.html',
        controller: 'SelectMobNumCtrl',
        params: {mobAccs: null}
      })
      .state('sendSMScode', {
        url: '/verify-sms-code',
        templateUrl: 'app/components/sendSMScode/sendSMScode.html',
        controller: 'SendSMScode'
      })
      .state('statements_overview', {
        url: '/statements-overview',
        templateUrl: 'app/components/statements.overview/statements.overview.html',
        controller: 'StatementsOverview'
      })
    ;

    $urlRouterProvider.otherwise('/');
  })

//.run(($state) => {
//    console.log(111111111);
//    $state.go('home');
//  })
;
