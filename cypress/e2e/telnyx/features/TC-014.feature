Feature: Test case 014 (TС-014)  
Scenario:  Check the registrartion ability by clicking  the "Create a free trial account" button in the “Switch + Save with Telnyx” block



Given I go to telnyx.com main page
And If the cookies modal window is opened I close it

When Scroll-down to the “Switch + Save with Telnyx” block
Then Click on the "Create Free Trial Account" button
And Check the redirection to the "Sign Up" page 