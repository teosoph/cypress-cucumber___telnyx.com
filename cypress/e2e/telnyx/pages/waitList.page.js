require('cypress-xpath');

import commonPage from '../pages/common.page';

class WaitListPage {
  checkWaitListPageDisplayed() {
    cy.get(`div>span>span`).should('contain.text', `STORAGE`);
  }
  clickOnJoinWaitListButton() {
    cy.xpath('(//div/div/a[@href="#form"])[1]').click();
  }
  fillWaitListUserValidData = () => {
    cy.get('[id="FirstName"]').type(commonPage.validUserData['firstName']);
    cy.get('[id="LastName"]').type(commonPage.validUserData['lastName']);
    cy.get('[id="Email"]').type(commonPage.validUserData['workEmail']);
    cy.get('[id="Form_Additional_Information__c"]').type(
      commonPage.getRandomData()
    );
  };
  fillWaitListUserInvalidData = () => {
    cy.get('[id="FirstName"]').type(commonPage.invalidUserData['firstName']);
    cy.get('[id="LastName"]').type(commonPage.invalidUserData['lastName']);
    cy.get('[id="Email"]').type(commonPage.invalidUserData['workEmail']);
    cy.get('[id="Form_Additional_Information__c"]').type(
      commonPage.getRandomData(500)
    );
  };
  markReceiveTelnyxMarketingEmailsCheckbox() {
    cy.xpath('(//label[@for="Subscription_Opt_In__c"])[2]').click();
  }
  clickOnSubmitButton() {
    cy.get('button[type="submit"]').click();
  }
  checkSubmitPageTitle() {
    cy.xpath('//span[contains(text(), "You")]').should(
      'not.contain',
      `You're on the waitlist!`
    );
  }
}

module.exports = new WaitListPage();
