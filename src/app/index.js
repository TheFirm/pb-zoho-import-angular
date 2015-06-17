'use strict';

import MainCtrl from './main/main.controller';
import NavbarCtrl from '../app/components/navbar/navbar.controller';
import PbLoginCtrl from '../app/components/pb_login/pb_login.controller';

import PB_API from '../app/services/PB_API';

angular.module('fbZoho', ['ngAnimate', 'ngSanitize', 'ui.router'])
  .controller('MainCtrl', MainCtrl)
  .controller('NavbarCtrl', NavbarCtrl)
  .controller('PbLoginCtrl', PbLoginCtrl)

  .service('PB_API', PB_API)

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/components/pb_login/login.html',
        controller: 'PbLoginCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
