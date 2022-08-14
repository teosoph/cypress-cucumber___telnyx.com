Feature: Test case 011 (TС-011)  
Scenario:  Check the ability to changer information in the “Switch + Save with Telnyx” block


Given I go to telnyx.com main page
And If the cookies modal window is opened I close it

Then Scroll-down to the “Switch + Save with Telnyx” block
And Make the screenshot of the “Compare Costs” block at the begging
When Click on the “Voice” button
And Click on the “Toll-free numbers” button
And Make changing to the “Make outbound calls” slider
And Make changing to the “Receive inbound calls” slider
Then Make screenshot of the “Compare Costs” after slider shifting
