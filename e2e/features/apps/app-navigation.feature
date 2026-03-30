@apps @authenticated
Feature: App detail navigation
  Scenario: Create a blank app and navigate through its tabs
    Given I am signed in as the default E2E admin
    When I open the apps console
    And I start creating a blank app
    And I enter a unique E2E app name
    And I confirm app creation
    Then I should land on the app editor
    When I click the "Monitoring" nav link in the app sidebar
    Then I should see the "Overview" text
