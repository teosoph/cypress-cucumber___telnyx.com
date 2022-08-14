Feature: Test case 013 (TС-013)  
Scenario:  Checking the ability of registration to Waiting List through the link "JOIN THE WAITING" with invalid credentials


Given I go to telnyx.com main page
And If the cookies modal window is opened I close it


When Click on the “JOIN THE WAITING” link in the header
And Check that the Waiting List page is opened
Then Click on the “JOIN THE WAITING” button
Then Fill invalid credentials to all fields
And Mark the “Receive Telnyx Marketing Emails” check-box
When Click the “Apply Now” button
Then Check the message about submitting to the Waiting List
