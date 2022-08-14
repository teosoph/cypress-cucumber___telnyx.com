// TC-007
// Checking the operation of the dropdown menu in the header

import {
  Given,
  When,
  Then,
  And,
} from '@badeball/cypress-cucumber-preprocessor';

import mainPage from '../../pages/main.page';

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

When('I hover the cursor to the header drop-down menu', () => {
  let tabPosition = ['1', '3', '6', '8', '10'];
  for (let i = 0; i < 5; i++) {
    mainPage.mouseHoverOnHeaderMenuTabs(tabPosition[i]);
    mainPage.makeHoveredHeaderMenuTabsScreenshot(tabPosition[i]);
  }
});

Then('Select each drop-down menu item in order', () => {});
And('Take a screenshot of each sub-menu tab', () => {});
