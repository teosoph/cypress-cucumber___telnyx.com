// TC-011
//  Check the ability to changer information in the “Switch + Save with Telnyx” block
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
And('Make the screenshot of the “Compare Costs” block at the begging', () => {
  mainPage.makeCompareCostBlockScreenshot();
});
When('Click on the “Voice” button', () => {
  mainPage.clickOnVoiceButton();
});
And('Click on the “Toll-free numbers” button', () => {
  mainPage.clickOnTollFreeNumbersRadioButton();
});
And('Make changing to the “Make outbound calls” slider', () => {
  mainPage.shiftMakeOutboundCallsSlider(commonPage.mathRandom);
});
And('Make changing to the “Receive inbound calls” slider', () => {
  mainPage.shiftReceiveInboundCallsSlider(commonPage.mathRandom);
});
Then('Make screenshot of the “Compare Costs” after slider shifting', () => {
  mainPage.makeCompareCostBlockScreenshot();
});
