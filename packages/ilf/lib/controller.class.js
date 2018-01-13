'use strict';

class Controller {
  static getDependencies() {
    return [];
  }

  run() {
    throw new Error('Missing implementation of run method');
  }
}

module.exports = Controller;
