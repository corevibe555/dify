@apps @authenticated
Feature: Delete app
  Scenario: Create a blank app then delete it from the apps list
    Given I am signed in as the default E2E admin
    When I open the apps console
    And I start creating a blank app
    And I enter a unique E2E app name with prefix "E2E-Delete"
    And I confirm app creation
    Then I should land on the app editor
    When I open the apps console
    And I delete the app with prefix "E2E-Delete"
    Then I should not see the "E2E-Delete" app card
