// TC-002
// Check registration possibility through `Try for free ->` field with invalid credentials

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
When('I fill the email input field with invalid data {}', (email) => {
  console.log(email);
  mainPage.enterEmailIntoSighUpInput(email);
  this.testEmail = email;
});
And('Check if the entered email is valid', () => {
  mainPage.checkEnteredEmailInSighUpInput(this.testEmail);
});
Then('Click the “Try for free ->” button', () => {
  mainPage.clickOnTryForFreeButton();
});
And('Check if the entered data in email field is displayed', () => {
  signUpPage.checkEnteredDataIntoEmailInput(this.testEmail);
});
And('Check the redirection to SignUp page', () => {
  signUpPage.checkRedirectionToSignUpPage();
});
