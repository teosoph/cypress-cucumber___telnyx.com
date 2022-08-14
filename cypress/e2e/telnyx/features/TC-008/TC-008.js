// TC-008
// Check the ability to do search in the Support Center page with random data

import {
  Given,
  When,
  Then,
  And,
} from '@badeball/cypress-cucumber-preprocessor';

import mainPage from '../../pages/main.page';
import supportPage from '../../pages/support.page';

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

When('Click on the “Support Center” link in the header', () => {
  mainPage.clickOnSupportCenterLink();
});

Then('Check the existence of the title "Support Center"', () => {
  supportPage.checkSupportPageTitle();
});
When('Fill in the search field with random data', () => {
  supportPage.fillSearchInput();
});
And('Press the "Enter" button', () => {
  supportPage.pushEnterButton();
});
When('Check the search result for searched random data', () => {
  supportPage.checkSearchInputData();
});
