Feature: Test case 014 (TС-014)  
Scenario:  Checking the ability of registration to Waiting List through the link "JOIN THE WAITING" with invalid credentials

Given I go to telnyx.com main page
And If the cookies modal window is opened I close it

When Scroll-down to the “Switch + Save with Telnyx” block
Then Click on the "Create Free Trial Account" button
And Check the redirection to the "Sign Up" page 