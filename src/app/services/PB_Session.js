'use strict';

class PB_Session {
  constructor() {
    this.expiresIn = null;
    this.sessionId = null;

    this.setExpiresIn = (ts) => {
      this.expiresIn = ts;
    };

    this.getExpiresIn = () => {
      return this.expiresIn;
    };

    this.setSessionId = (ssid) => {
      this.sessionId = ssid;
    };

    this.getSessionId = () => {
      return this.sessionId;
    }
  }
}

PB_Session.$inject = [];

export default PB_Session;
