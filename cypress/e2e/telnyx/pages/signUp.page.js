import commonPage from './common.page';

class SignUpPage {
  // TC-001, TC-002
  checkEnteredDataIntoEmailInput = (email) => {
    cy.get('[id="email"]').should('have.value', email);
  };
  checkRedirectionToSignUpPage = () => {
    cy.url({ timeout: 20000 }).should('include', 'sign-up');
  };

  // TC-003, TC-004
  checkSignUpPageOpened = () => {
    cy.url({ timeout: 20000 }).should('include', 'sign-up');
    cy.contains("button[type='submit']", 'Create Account').should('be.visible');
  };

  fillInputsFieldsWithValidCredentials = () => {
    cy.get('[id="email"]').type(commonPage.validUserData['workEmail']);
    cy.get('[id="full_name"]').type(commonPage.validUserData['fullName']);
    cy.get('[id="password"]').type(commonPage.validUserData['password']);
    cy.get('[aria-labelledby="terms-label"] rect').click();
  };

  checkEnteredValidData = () => {
    cy.get('[id="email"]')
      .should('be.visible')
      .should('have.value', commonPage.validUserData['workEmail']);
    cy.get('[id="full_name"]')
      .should('be.visible')
      .should('have.value', commonPage.validUserData['fullName']);
    cy.get('[id="password"]')
      .should('be.visible')
      .should('have.value', commonPage.validUserData['password']);
  };

  clickSignUpButton = () => {
    cy.get('button[type="submit"]').scrollIntoView().click({ force: true });
    // cy.get('button[type="submit"]').trigger("mouseover");
    cy.wait(5000);
  };

  checkRedirectionToVerifyEmailPage = () => {
    cy.url({ timeout: 20000 }).should('include', '/verify-email');
  };

  checkMessageOnVerifyEmailPage = () => {
    cy.get('div>h1').should(
      'have.text',
      "We've sent you an email to activate your account"
    );
  };

  // TC-00....................
  checkRedirectionToTermsAndConditionsPage = () => {
    cy.get('[href="/terms-and-conditions-of-service"]')
      .invoke('removeAttr', 'target')
      .click();
    cy.get('h1[class*="Text"]').should(
      'have.text',
      'TELNYX TERMS AND CONDITIONS OF SERVICE'
    );
  };
}

module.exports = new SignUpPage();
