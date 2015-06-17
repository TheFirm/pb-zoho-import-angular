'use strict';

class PB_Session {
  constructor() {
    this.expiresIn = null;

    this.setExpiresIn = (ts) => {
      this.expiresIn = ts;
    }
  }
}

PB_Session.$inject = [];

export default PB_Session;
