// TC-013
//  Checking the ability of registration to Waiting List through the link "JOIN THE WAITING" with invalid credentials

import {
  Given,
  When,
  Then,
  And,
} from '@badeball/cypress-cucumber-preprocessor';

import mainPage from '../../pages/main.page';
import waitListPage from '../../pages/waitList.page';

Given('I go to telnyx.com main page', () => {
  cy.viewport(1920, 1080);
  cy.visit('https://telnyx.com');
});
And('If the cookies modal window is opened I close it', () => {
  cy.get('body').then(($body) => {
    if ($body.find('[aria-label="close and deny"]').length > 0) {
      cy.get('[aria-label="close and deny"]').click();
    }
  });
});

When('Click on the “JOIN THE WAITING” link in the header', () => {
  mainPage.clickOnJoinWaitListLink();
});

And('Check that the Waiting List page is opened', () => {
  waitListPage.checkWaitListPageDisplayed();
});
Then('Click on the “JOIN THE WAITING” button', () => {
  waitListPage.clickOnJoinWaitListButton();
});
Then('Fill valid credentials to all fields', () => {
  waitListPage.fillWaitListUserInalidData();
});
And('Mark the “Receive Telnyx Marketing Emails” check-box', () => {
  waitListPage.markReceiveTelnyxMarketingEmailsCheckbox();
});
When('Click the “Apply Now” button', () => {
  waitListPage.clickOnSubmitButton();
});
Then('Check the message about submitting to the Waiting List', () => {
  waitListPage.checkSubmitPageTitle();
});
