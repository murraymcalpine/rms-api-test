Feature: Check the contents of the response

Scenario: Scenario 2 response content checks
  Given I send a GET request to the API for "Scenario 2"
  Then no entries have an Empty or Null ID field
  And only one entry has TRUE next to "now_playing"