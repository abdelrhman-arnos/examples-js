const { Then } = require('@cucumber/cucumber');
const { ReportingApi } = require('@reportportal/agent-js-webdriverio');
const assert = require('assert');

Then('I want change FAILED step status to PASSED', () => {
  ReportingApi.setStatusPassed();

  assert.strictEqual(true, false);
});
