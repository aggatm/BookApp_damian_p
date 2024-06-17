const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 60000,
  e2e: {
    baseUrl: "http://localhost:3000",
  },
});
