@lib-09
Feature: Main Modules of the Application
    As an admin, I want to access the main modules of the app.

    #* AC: Admin users should see 3 modules: Dashboard, Users, Books

    @lib-09-01
    Scenario: Admins can see 3 main modules
        Given user is already on the login page
        When user is already logged in as "admin"
        Then user should see following modules
        | Dashboard   |
        | Users       |
        | Books       |
