# cypress+cucumber\_\_\_telnyx.com

This is a tutorial project for learning the Cypress and Cucumber frameworks.

# Test Telnix

The purpose of this project is to test the Telnyx website: https://telnyx.com/

This project is for e2e testing the functionality of the Telnyx website.

## Requirement

- Download and install [VS Code] (https://code.visualstudio.com/) or any other IDE of your choice.

- Download and install [at least Node.js 14](https://nodejs.org/uk/download/)

### Usage

### How to open and run a project

- Download or clone project from repository

- Open the project folder in VSCode or another IDE

The test scripts are located at:
cypress\e2e\telnyx\features\TC-0\*/\*.cy.js

The page objects are in:
cypress\e2e\telnyx\pages/\*.page.js

- In terminal type:
  git clone

`cd /your/project/path`

`npm init -y`

`npm install`

`npm install cypress --save-dev`

`npm install --save-dev @cucumber/cucumber`

- To make Xpath be working is needed to be installed:

`npm i cypress-xpath`

- To make mouseHover be working is needed to be installed RealHover by Dmitriy Kovalenko:

`npm install cypress-real-events`

- And register new commands by adding this to your cypress/support/e2e.js file:

`import "cypress-real-events/support";`

#

##### Run

- Launch Cypress with the following commands in the terminal:

`./node_modules/.bin/cypress open` or `npx cypress open`

- After a while, the cypress will open.
- In the window that opens, click on any of the tests: \*.feature
