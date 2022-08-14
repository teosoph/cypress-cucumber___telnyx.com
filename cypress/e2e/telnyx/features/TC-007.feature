Feature: Test case 007 (TС-007)  
Scenario:  Checking the operation of the dropdown menu in the header

Given I go to telnyx.com main page
And If the cookies modal window is opened I close it

When I hover the cursor to the header drop-down menu
And Select each drop-down menu item in order
Then Take a screenshot of each sub-menu tab
