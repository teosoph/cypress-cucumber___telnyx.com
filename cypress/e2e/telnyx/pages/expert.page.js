import commonPage from '../pages/common.page';

class ExpertPage {
  checkExpertTalkPageTitle = () => {
    cy.get('header>h1>span').should('contain.text', 'Talk to an expert');
  };

  markChooseReasonContactDropMenu() {
    cy.get('[id = "Reason_for_Contact__c"]').select('Sales-Inquiry');
  }
  // Fill valid data
  fillValidDataToInputFields() {
    cy.get('[id="FirstName"]').type(commonPage.validUserData['firstName']);
    cy.get('[id="LastName"]').type(commonPage.validUserData['lastName']);
    cy.get('[id="Email"]').type(commonPage.validUserData['testEmail']);
    cy.get('[id="Phone_Number_Extension__c"]').select('+380');
    cy.get('[id="Phone_Number_Base__c"]').type(
      commonPage.validUserData['phoneNumber']
    );
    cy.get('[id="Website"]').type(commonPage.validUserData['companyWebsite']);
    cy.get('[id="Use_Case_Form__c"]').select('Video');
    // cy.get(['id="Form_Additional_Information__c"']).type(commonPage.getRandomData());
  }
  // Fill invalid data
  fillInvalidDataToInputFields() {
    cy.get('[id="FirstName"]').type(commonPage.invalidUserData['firstName']);
    cy.get('[id="LastName"]').type(commonPage.invalidUserData['lastName']);
    cy.get('[id="Email"]').type(commonPage.invalidUserData['testEmail']);
    cy.get('[id="Phone_Number_Extension__c"]').select('+380');
    cy.get('[id="Phone_Number_Base__c"]').type(
      commonPage.invalidUserData['phoneNumber']
    );
    cy.get('[id="Website"]').type(commonPage.invalidUserData['companyWebsite']);
    cy.get('[id="Use_Case_Form__c"]').select('Video');
    // cy.get('[id="Form_Additional_Information__c"]').type(commonPage.getRandomData());
  }

  markSubscriptionCheckBox() {
    cy.get('[name="Subscription_Opt_In__c"]').click();
  }

  clickOnSubmitButton() {
    cy.get('[type="submit"]').click();
  }

  checkValidDataEntering = () => {
    cy.get(`main>div>h1`).should('contain.text', 'Thanks for Reaching Out!');
  };
  checkInvalidDataEntering = () => {
    cy.get(`[id="ValidMsgEmail"]`).should(
      'contain.text',
      'Must be valid email.'
    );
  };
}

module.exports = new ExpertPage();
