Feature: Test case 2 (TС-002)  

Scenario: Check registration possibility through `Try for free ->` field with invalid credentials

Given I go to telnyx.com main page
And If the cookies modal window is opened I close it
When I fill the email input field with invalid data test123@ua
And Check if the entered email is valid
Then Click the “Try for free ->” button
# And Check if the entered data in email field is displayed
# And Check the redirection to SignUp page

