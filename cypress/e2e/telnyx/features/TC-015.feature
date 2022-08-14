Feature: Test case 015 (TС-015)  

Scenario: Checking the conformity of the "Facebook" share link 

Given I go to telnyx.com main page
And If the cookies modal window is opened I close it

Then Scroll-down to the footer
When I click on the "Follow on Facebook" link
Then Check that The "Facebook.com" page is opened