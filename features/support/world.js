const { setWorldConstructor } = require('@cucumber/cucumber');
const { executionMap } = require('./hooks'); // ✅ Import the shared map

class CustomWorld {
  constructor() {
    this.executionMap = executionMap;
    this.executionSummary = null;
  }
}

setWorldConstructor(CustomWorld);