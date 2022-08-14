Feature: Test case 010 (TС-010)  
Scenario:  Check the ability to talk to an expert with invalid credentials


Given I go to telnyx.com main page
And If the cookies modal window is opened I close it

When Click on the “Talk to an expert” button in the header
Then Check the existence of the title "Talk to an expert"
Then Fill invalid credentials to all fields
And Mark the “I want to receive emails from Telnyx” check-box 
When Click the “Submit” button
Then Check the message about submitting to the talk




