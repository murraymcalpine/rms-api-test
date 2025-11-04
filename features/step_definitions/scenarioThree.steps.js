const { Then } = require('@cucumber/cucumber');

Then('The header date field has been populated', function () {
  if (!this.executionSummary) {
    throw new Error("executionSummary is undefined. Make sure the Given step ran successfully.");
  }

  const assertion = this.executionSummary.assertions.find(a =>
  a.assertion.toLowerCase().includes('response has a valid date header')
);

  if (!assertion) {
    throw new Error("Postman test for 'Response has a valid date header' not found");
  }

  if (assertion.error) {
    throw new Error(`Postman test failed: ${assertion.assertion}`);
  }
});

Then('the header date field is valid', function () {
  if (!this.executionSummary || !Array.isArray(this.executionSummary.assertions)) {
    throw new Error("executionSummary.assertions is undefined. Make sure the Given step ran successfully.");
  }

  const assertion = this.executionSummary.assertions.find(a =>
    a.assertion.toLowerCase().includes('response has a valid date header')
  );

  if (!assertion) {
    throw new Error("Postman test for 'response has a valid date header' not found");
  }

  if (assertion.error) {
    throw new Error(`Postman test failed: ${assertion.assertion}`);
  }
});