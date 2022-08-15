import 'cypress-real-events/support';
import commonPage from './common.page';
require('cypress-xpath');

class MainPage {
  // TC-001, TC-002 Sign Up by OnTryForFree with valid and invalid credentials
  enterEmailIntoSighUpInput = (email) => {
    cy.get('input[name="email"]').type(email);
  };
  checkEnteredEmailInSighUpInput = (email) => {
    cy.get('input[name="email"]').should('have.value', email);
  };
  clickOnTryForFreeButton = () => {
    cy.get('[type="submit"]').click();
  };

  // TC-003, TC-004 Sign Up by click on the "Sign Up" button with valid and invalid credentials
  clickOnSignUpButton = () => {
    cy.get('li div a[href="/sign-up"]').click();
  };

  // enterInvalidEmailIntoSighUpInput = () => {
  //   cy.get('input[name="email"]').type(commonPage.invalidUserData['testEmail']);
  // };

  //   // Footer
  footerProductsMenuItems = [
    'Elastic SIP Trunking',
    'Call Control - Voice API',
    'Programmable SMS',
    'WhatsApp API',
    'Secure Faxing',
    'Wireless - Cellular IoT',
    'Number Lookup',
    'Global Numbers',
    'Verify API',
    'See all Products',
  ];
  checkFooterProductsMenuItemsName() {
    for (let i = 0; i < 9; i++) {
      cy.xpath(
        `(//p[text()='Products']/following-sibling::ul//span//span)[${i + 1}]`
      ).should('contain.text', `${this.footerProductsMenuItems[i]}`);
    }
  }

  //   Header menu
  mouseHoverOnHeaderMenuTabs(tabPosition) {
    cy.get(`header div>ul>li:nth-child(${tabPosition})>span`, {
      timeout: 30000,
    }).realHover({
      timeout: 30000,
    });
  }
  makeHoveredHeaderMenuTabsScreenshot(tabPosition) {
    cy.xpath(`//header/div[2]/div/div[2]/ul/li[1]/div/div/div[2]`, {
      timeout: 30000,
    }).screenshot(`my-screenshot_${tabPosition}`);
  }

  // Support center
  clickOnSupportCenterLink() {
    cy.get(`audio+a[href*='support']`, { timeout: 20000 }).realHover().click();
  }

  // Expert Talk page
  clickOnTalkToExpertButton() {
    cy.get(`li>div>a[href*='/contact-us']`, { timeout: 20000 }).click();
    cy.wait(5000);
  }

  // Voice Call Costs
  scrollDownToSwitchSaveWithTelnyxBlock() {
    cy.get('h2>a>span', { timeout: 30000 }).scrollIntoView();
  }
  makeCompareCostBlockScreenshot(index) {
    cy.xpath(`//h2/a/following::div[1]/div/div`, {
      timeout: 50000,
    }).screenshot(`CompareCosts-screenshot_${index}`);
  }
  clickOnVoiceButton() {
    cy.xpath(`//button[contains(text(),"Voice")]`).click();
  }
  clickOnTollFreeNumbersRadioButton() {
    cy.get(`[id="toll-free-numbers"]`).click();
  }
  shiftMakeOutboundCallsSlider(shiftIndex) {
    cy.get(`[role*='slider']`)
      .eq(0)
      .type('{rightarrow}'.repeat(shiftIndex), { force: true });
  }
  shiftReceiveInboundCallsSlider(shiftIndex) {
    cy.get(`[role*='slider']`)
      .eq(1)
      .type('{rightarrow}'.repeat(shiftIndex), { force: true });
  }
  makeCompareCostBlockScreenshot(index) {
    cy.xpath(`//h2/a/following::div[1]/div/div`, {
      timeout: 50000,
    }).screenshot(`CompareCosts-screenshot_${index}`);
  }
  // Registration through the “Switch+Save with Telnyx” block
  clickOnCreateFreeTrialAccountButton() {
    cy.xpath('//a[contains(text(),"Create")]').click();
  }
  checkRedirectedPageForLink() {
    cy.url({ timeout: 30000 }).should('include', 'sign-up');
  }

  // Wait List
  clickOnJoinWaitListLink() {
    cy.get('span>a[href="/products/storage"]').click();
  }

  // Footer social connections
  scrollDownToFooter() {
    cy.xpath('(//footer)[3]').scrollIntoView();
  }
  clickOnFacebookLink() {
    cy.get('[href="https://www.facebook.com/Telnyx/"]')
      .invoke('removeAttr', 'target')
      .click();
  }
  checkFacebookPageRedirection() {
    cy.url().should('contain.html', 'https://www.facebook.com/Telnyx/');
  }
}

module.exports = new MainPage();
