Feature: Test case 1 (TС-001)  

Scenario: Check registration possibility through `Try for free ->` field with valid credentials

Given I go to telnyx.com main page
And If the cookies modal window is opened I close it
When  I fill the email input field with valid data test123@ua.com
And Check if the entered email is valid
Then Click the “Try for free ->” button
And Check if the entered data in email field is displayed
And Check the redirection to SignUp page

