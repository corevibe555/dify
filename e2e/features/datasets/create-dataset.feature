@datasets @authenticated
Feature: Create dataset
  Scenario: Create a new empty dataset and land on its documents page
    Given I am signed in as the default E2E admin
    When I navigate to the datasets page
    And I click the new dataset card
    Then I should land on the dataset creation page
