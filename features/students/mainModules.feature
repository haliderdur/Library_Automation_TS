@lib-05
Feature: Main modules of the application

    As a student, I want to access to the main modules of the app.

    #* AC: students should see 2 modules: Books, Borrowing Books


    @lib-05-01
    Scenario Outline: Stundents can see 2 main modules
        Given user is already on the login page
        When user is already logged in as "student"
        Then user should see "<module-name>"
        Examples:
            | module-name     |
            | Books           |
            | Borrowing Books |

#? Should there be more scenarios for this user story? feel free to add more scenarios