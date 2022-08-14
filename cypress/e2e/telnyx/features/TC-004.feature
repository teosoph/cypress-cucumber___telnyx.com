Feature: Test case 004 (TС-004)  
Scenario: Check registration possibility through the "Sign Up" button with invalid credentials

Given I go to telnyx.com main page
And If the cookies modal window is opened I close it
When I click on the the "Sign Up" button in the header
And Check that the "Sign Up" page is opened

Then I fill all input fields with invalid credentials
And Check that the entered data is displayed and invalid
When I click the “Sign Up” button
Then Check that the redirection to the "Verify Email" page is happened
And Check that the message about inputed valid data is displayed

