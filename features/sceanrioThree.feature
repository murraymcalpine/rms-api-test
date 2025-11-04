Feature: Verify the date in the response header

Scenario: Scenario 3 response header checks
  Given I send a GET request to the API for "Scenario 3"
  Then The header date field has been populated
  And the header date field is valid