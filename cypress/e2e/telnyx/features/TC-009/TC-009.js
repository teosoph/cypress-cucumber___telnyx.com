// TC-009
//  Check the ability to talk to an expert with valid credentials

import {
  Given,
  When,
  Then,
  And,
} from '@badeball/cypress-cucumber-preprocessor';

import mainPage from '../../pages/main.page';
import expertPage from '../../pages/support.page';

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

When('Click on the “Talk to an expert” button in the header', () => {
  mainPage.clickOnTalkToExpertButton();
});
Then('Check the existence of the title "Talk to an expert"', () => {
  expertPage.checkExpertTalkPageTitle();
});
Then('Fill valid credentials to all fields', () => {
  expertPage.markChooseReasonContactDropMenu();
  expertPage.fillValidDataToInputFields();
});
And('Mark the “I want to receive emails from Telnyx” check-box', () => {
  expertPage.markSubscriptionCheckBox();
});
When('Click the “Submit” button', () => {
  expertPage.clickOnSubmitButton();
});
When('Check the message about submitting to the talk', () => {
  expertPage.checkValidDataEntering();
});
