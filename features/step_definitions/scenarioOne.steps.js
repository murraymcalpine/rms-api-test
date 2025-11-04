const { Then } = require('@cucumber/cucumber');

Then('the response returned is 200', function () {
  if (!this.executionSummary || !Array.isArray(this.executionSummary.assertions)) {
    throw new Error("executionSummary.assertions is undefined. Make sure the Given step ran successfully and assertions were executed.");
  }

  const assertion = this.executionSummary.assertions.find(a =>
    a.assertion.toLowerCase().includes('status code is 200')
  );

  if (!assertion) {
    throw new Error("Postman test for 'status code is 200' not found");
  }

  if (assertion.error) {
    throw new Error(`Postman test failed: ${assertion.assertion}`);
  }
});

Then('the response time is under 1000 miliseconds', function () {
  if (!this.executionSummary || !Array.isArray(this.executionSummary.assertions)) {
    throw new Error("executionSummary.assertions is undefined. Make sure the Given step ran successfully and assertions were executed.");
  }

  const assertion = this.executionSummary.assertions.find(a =>
    a.assertion.toLowerCase().includes('response time is less than 1000ms')
  );

  if (!assertion) {
    throw new Error("Postman test for 'response time is less than 1000ms' not found");
  }

  if (assertion.error) {
    throw new Error(`Postman test failed: ${assertion.assertion}`);
  }
});