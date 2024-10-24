require("dotenv").config();

const { defineConfig } = require("cypress");
const { verifyDownloadTasks } = require("cy-verify-downloads");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, options) {
      require("cypress-terminal-report/src/installLogsPrinter")(on, {
        compactLogs:5,
      });
      on("task", verifyDownloadTasks);
      return options;
    },

    reporter: "cypress-qase-reporter",
    reporterOptions: {
      apiToken: "8193b747641f65eb546e234978477b1c072206ca0b57182956c5978d1440cb4c",
      projectCode: "GTU",
      screenshotFolder: "screenshots",
      sendScreenshot: true,
      logging: true,
      rootSuiteTitle: "Cypress tests",
    },

    defaultBrowser: "chrome",
    testIsolation: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    pageLoadTimeout: 150000,
    requestTimeout: 15000,
    defaultCommandTimeout: 12000,
    video: false,
    videoCompression: 20,
    experimentalOriginDependencies: false

    // Дополнительные попытки
    // retries: {
    //   "runMode": 1,
    //   // "openMode": 1
    // },
  },
});
