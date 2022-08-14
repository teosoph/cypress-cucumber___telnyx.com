// TC-006
// Checking the redirection to the "Terms & Conditions" page`

import {
  Given,
  When,
  Then,
  And,
} from '@badeball/cypress-cucumber-preprocessor';

import mainPage from '../../pages/main.page';
import signUpPage from '../../pages/signUp.page';

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

When('I click on the “SighUp” button in the header', () => {
  mainPage.clickOnSignUpButton();
});

Then('I check the redirection to the “Terms and Conditions” page', () => {
  signUpPage.checkRedirectionToTermsPage();
});
And(
  'Checking the "TELNYX TERMS AND CONDITIONS OF SERVICE" message is displayed',
  () => {
    signUpPage.checkMessagePresenceOnPage();
  }
);
