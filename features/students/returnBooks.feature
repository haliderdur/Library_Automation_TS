@lib-04
Feature: Return Books Functionality

    As a student, I should be able to return the borrowed books on the "Borrowing Books" page.

    #* AC: Students should be able to return the books they borrowed on the Borrowing Books page by clicking Retun Book

#TODO: Verify that the Return Book button is displayed on the Borrowing Books page for the book(s) students have borrowed
@lib-04-01
    Scenario: Users see Return Book button for the borrowed books
        Given user is already on the login page
        When user is already logged in as "student"
        And user clicks the BorrowingBooks section
        Then user sees Return Book buttons displayed for the borrowed books


#TODO: Verify that the books will be retuned when the student clicks the Return Book button
@lib-04-02
    Scenario: Users see returned books displayed after clicking Return Book button
        When user clicks the BorrowingBooks section
        And user clicks on Return Book button
        Then user sees selected book returned


#TODO: Verify that the Return Book button of the book will be disabled after student returns the book

#TODO: Fell free to add more....