// TC-015
// Checking the conformity of the "Facebook" share link

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

Then('Scroll-down to the footer', () => {
  mainPage.scrollDownToFooter();
});
When('I click on the "Follow on Facebook" link', () => {
  mainPage.clickOnFacebookLink();
});
Then('Check that The "Facebook.com" page is opened', () => {
  mainPage.checkFacebookPageRedirection();
});
