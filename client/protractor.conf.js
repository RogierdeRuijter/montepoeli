// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
const executeOnMongo = require('./e2e/start-up-scripts/exec-on-mongo');
const setUp = require('./e2e/start-up-scripts/set-up');

const dbParams = {
  url: 'mongodb://root:example@mongodb-e2e',
  dbName: 'admin',
};

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/src/**/*.e2e-spec.ts',
  ],
  capabilities: {
    'browserName': 'chrome',
  },
  baseUrl: 'http://client-e2e:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  beforeLaunch: () => {
    return executeOnMongo(dbParams, setUp);
  },
  onPrepare: function() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json'),
    });
    jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));
  }
};


