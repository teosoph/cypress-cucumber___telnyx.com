// TC-014
//  Check the registrartion ability by clicking  the "Create a free trial account" button in the “Switch + Save with Telnyx” block

import {
  Given,
  When,
  Then,
  And,
} from '@badeball/cypress-cucumber-preprocessor';

import mainPage from '../../pages/main.page';
import commonPage from '../../pages/common.page';

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

Then('Scroll-down to the “Switch + Save with Telnyx” block', () => {
  mainPage.scrollDownToSwitchSaveWithTelnyxBlock();
});
Then('Click on the "Create Free Trial Account" button', () => {
  mainPage.clickOnCreateFreeTrialAccountButton();
});
When('Check the redirection to the "Sign Up" page', () => {
  mainPage.checkRedirectedPageForLink();
});
