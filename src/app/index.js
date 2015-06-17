'use strict';

import MainCtrl from './main/main.controller';
import NavbarCtrl from '../app/components/navbar/navbar.controller';
import PbLoginCtrl from '../app/components/pb_login/pb_login.controller';
import SelectMobNumCtrl from '../app/components/selectMobNum/select_mob_num.controller';

import PB_API from '../app/services/API';
import PB_Session from '../app/services/PB_Session';

angular.module('fbZoho', ['ngAnimate', 'ngSanitize', 'ui.router'])
  .controller('MainCtrl', MainCtrl)
  .controller('NavbarCtrl', NavbarCtrl)

  .controller('PbLoginCtrl', PbLoginCtrl)
  .controller('SelectMobNumCtrl', SelectMobNumCtrl)

  .service('PB_API', PB_API)
  .service('PB_Session', PB_Session)

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/components/pb_login/login.html',
        controller: 'PbLoginCtrl'
      })
      .state('selectMobNum', {
        url: '/select-mobile-number',
        templateUrl: 'app/components/selectMobNum/selectMobileNum.html',
        controller: 'SelectMobNumCtrl',
        params: {mobAccs: null}
      })
    ;

    $urlRouterProvider.otherwise('/');
  })
;
