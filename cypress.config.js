const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: [
    "cypress\\e2e\\SignUp.cy.js",
    "cypress\\e2e\\Login.cy.js",
    "cypress\\e2e\\Products.cy.js",
    "cypress\\e2e\\DeleteUser.cy.js",
    ]
    
  },
  env:{
    URL : 'https://automationexercise.com/'
  }
});
