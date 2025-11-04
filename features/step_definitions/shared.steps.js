const { Given } = require('@cucumber/cucumber');

Given('I send a GET request to the API for {string}', function (scenarioName) {
  const execution = this.executionMap?.[scenarioName];

  if (!execution) {
    throw new Error(`Execution result for '${scenarioName}' not found. Make sure the scenario name matches the Postman item name.`);
  }

  this.executionSummary = execution;
});