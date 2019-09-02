// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const {SpecReporter} = require('jasmine-spec-reporter');
const executeOnMongo = require('./start-up-scripts/exec-on-mongo');
const setUp = require('./start-up-scripts/set-up');

const dbParams = {
  url: 'mongodb://root:example@mongodb-e2e:27017',
  dbName: 'admin',
};

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts',
  ],
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: ['--window-size=800x600', 'no-sandbox', '--whitelisted-ips'],
    }
  },
  seleniumAddress: 'http://selenium-hub:4444/wd/hub',
  baseUrl: 'http://client-e2e:80/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {
    },
  },
  beforeLaunch: () => {
    return executeOnMongo(dbParams, setUp);
  },
  onPrepare: function() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json'),
    });
    jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));
  },
};


