Feature: Check Response behaviour

Scenario: Scenario 1 response checks
  Given I send a GET request to the API for "Scenario 1"
  Then the response returned is 200
  And the response time is under 1000 miliseconds