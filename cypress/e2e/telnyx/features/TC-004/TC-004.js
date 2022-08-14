// TC-004
//  Check registration possibility through the "Sign Up" button with invalid credentials

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
When('I click on the the "Sign Up" button in the header', (email) => {
  mainPage.clickOnSignUpButton();
});
And('Check that the "Sign Up" page is opened', () => {
  signUpPage.checkSignUpPageOpened();
});
Then('I fill all input fields with invalid credentials', () => {
  signUpPage.fillInputsFieldsWithInvalidCredentials();
});
And('Check that the entered data is displayed and invalid', () => {
  signUpPage.checkEnteredInvalidData();
});
When('I click the “Sign Up” button', () => {
  signUpPage.clickSignUpButton();
});
Then(
  'Check that the redirection to the "Verify Email" page is happened',
  () => {
    signUpPage.checkRedirectionToVerifyEmailPage();
  }
);
And('Check that the message about inputed valid data is displayed', () => {
  signUpPage.checkMessageOnVerifyEmailPage();
});
