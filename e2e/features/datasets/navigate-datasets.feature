@datasets @authenticated
Feature: Navigate datasets
  Scenario: Open the datasets page from the header navigation
    Given I am signed in as the default E2E admin
    When I open the apps console
    And I click the "Knowledge" header navigation link
    Then I should be on the datasets page
