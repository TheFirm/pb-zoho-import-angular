'use strict';

class PB_API {
  constructor($http) {
    this.createSession = () => {
      let credentials = {
        "clientId": "5c6afd92-0612-4e27-aedf-3a182eb52435",
        "clientSecret": "67b9a571d8efbf048a4825742416d725"
      };
      return $http.post(API_HOST + '/api/createSession', credentials)
    };

    this.login = (data) => {
      let credentials = {
        "sessionId": data.sessionId,
        "login": data.login,
        "password": data.password
      };
      return $http.post(API_HOST + '/api/login', credentials)
    };

    this.requestSMSCode = (data) => {
      let credentials = {
        "sessionId": data.sessionId,
        "otpDev": data.monNumId
      };
      return $http.post(API_HOST + '/api/login', credentials)
    };
  }
}

PB_API.$inject = ['$http'];

export default PB_API;
