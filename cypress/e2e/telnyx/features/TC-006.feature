Feature: Test case 006 (TС-006)  
Scenario:  Checking the redirection to the "Terms & Conditions" page`

Given I go to telnyx.com main page
And If the cookies modal window is opened I close it

When I click on the “SighUp” button in the header
Then I check the redirection to the “Terms and Conditions” page
And Checking the "TELNYX TERMS AND CONDITIONS OF SERVICE" message is displayed

