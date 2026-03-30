@auth @authenticated
Feature: Sign in and sign out
  Scenario: Sign out from the apps console and land on the sign-in page
    Given I am signed in as the default E2E admin
    When I open the apps console
    And I open the account menu
    And I click the log-out option
    Then I should see the "Sign in" button

  Scenario: Navigate to the apps console while already authenticated
    Given I am signed in as the default E2E admin
    When I open the apps console
    Then I should stay on the apps console
    And I should see the "Create from Blank" button
