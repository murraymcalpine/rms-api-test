const { Then } = require('@cucumber/cucumber');

Then('no entries have an Empty or Null ID field', function () {
  if (!this.executionSummary) {
    throw new Error("executionSummary is undefined. Make sure the Given step ran successfully.");
  }

  const failed = this.executionSummary.assertions.find(a =>
    a.assertion.toLowerCase().includes('id field is never empty or null') && a.error
  );

  if (failed) {
    throw new Error(`Postman test failed: ${failed.assertion}`);
  }
});

Then('only one entry has TRUE next to "now_playing"', function () {
  if (!this.executionSummary) {
    throw new Error("executionSummary is undefined. Make sure the Given step ran successfully.");
  }

  const failed = this.executionSummary.assertions.find(a =>
    a.assertion.toLowerCase().includes("only one track has 'true' next to 'now_playing'") && a.error
  );

  if (failed) {
    throw new Error(`Postman test failed: ${failed.assertion}`);
  }
});