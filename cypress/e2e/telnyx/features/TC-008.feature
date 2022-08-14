Feature: Test case 008 (TС-008)  
Scenario:  Check the ability to do search in the Support Center page with random data

Given I go to telnyx.com main page
And If the cookies modal window is opened I close it

When Click on the “Support Center” link in the header
Then Check the existence of the title "Support Center"
When Fill in the search field with random data
And Press the "Enter" button
Then Check the search result for searched random data
