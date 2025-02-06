const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'r5ps32',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    video: true,
    
  },
});
