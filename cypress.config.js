const { defineConfig } = require('cypress')

module.exports = {
  'projectId': '4b7344',
  e2e: {
    baseUrl: "http://localhost:8080/",
    env: {
      navbartText: "cypress.io"
    }
},
}
