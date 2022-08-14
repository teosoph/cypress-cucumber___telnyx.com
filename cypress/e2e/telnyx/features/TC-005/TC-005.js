// TC-005
// Checking the visibility of the footer Products menu items

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

When('I check if all menu sections have the necessary tabs', () => {
  mainPage.checkFooterProductsMenuItemsName();
});

// Then('I see all the necessary tabs in footer menu', () => {});
