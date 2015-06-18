'use strict';

class PB_Session {
  constructor() {
    this.expiresIn = localStorage['expiresIn'];
    this.sessionId = localStorage['sessionId'];

    this.setExpiresIn = (ts) => {
      this.expiresIn = ts;
    };

    this.getExpiresIn = () => {
      return this.expiresIn;
    };

    this.setSessionId = (ssid) => {
      this.sessionId = ssid;
      localStorage['sessionId'] = ssid;
    };

    this.getSessionId = () => {
      return this.sessionId;
    }
  }
}

PB_Session.$inject = [];

export default PB_Session;
