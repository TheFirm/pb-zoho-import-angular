'use strict';

class PB_API {
  constructor($http) {

    /**
     *
     * @param data object {"sessionId": sessionId, "clientSecret": clientSecret}
     * @returns {HttpPromise}
     */
    this.createSession = () => {
      let credentials = {
        "clientId": "5c6afd92-0612-4e27-aedf-3a182eb52435",
        "clientSecret": "67b9a571d8efbf048a4825742416d725"
      };
      return $http.post(API_HOST + '/api/createSession', credentials)
    };

    /**
     *
     * @param data object {"sessionId": sessionId, "login": login, "password": password}
     * @returns {HttpPromise}
     */
    this.login = (data) => {
      let credentials = {
        "sessionId": data.sessionId,
        "login": data.login,
        "password": data.password
      };
      return $http.post(API_HOST + '/api/login', credentials)
    };

    /**
     *
     * @param data object {"sessionId": sessionId, "monNumId": monNumId}
     * @returns {HttpPromise}
     */
    this.requestSMSCode = (data) => {
      let reqData = {
        "sessionId": data.sessionId,
        "otpDev": data.monNumId
      };
      return $http.post(API_HOST + '/api/requestSMSCode', reqData)
    };

    /**
     *
     * @param data object {"sessionId": sessionId, "smsCode": smsCode}
     * @returns {HttpPromise}
     */
    this.sendSMSCode = (data) => {
      let reqData = {
        "sessionId": data.sessionId,
        "otp": data.smsCode
      };
      return $http.post(API_HOST + '/api/confirmSMSCode', reqData)
    };

    /**
     *
     * @param data object {"sessionId": sessionId, "start_date": start_date, "end_date": end_date}
     * @returns {HttpPromise}
     */
    this.getStatements = (data) => {
      let reqData = {
        "sessionId": data.sessionId
        , "stdate": data.start_date
        , "endate": data.end_date
      };
      return $http.post(API_HOST + '/api/getStatements', reqData)
    };
  }
}

PB_API.$inject = ['$http'];

export default PB_API;
