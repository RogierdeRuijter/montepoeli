// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const {SpecReporter} = require('jasmine-spec-reporter');
const executeOnMongo = require('./start-up-scripts/exec-on-mongo');
const setUp = require('./start-up-scripts/set-up');

const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

const reporter = new HtmlScreenshotReporter({
  dest: '/root/target/screenshots/images/',
  filename: 'my-report.html'
});


const dbParams = {
  url: 'mongodb://mongodb-e2e:27017',
  dbName: 'admin',
};

exports.config = {
  allScriptsTimeout: 15000,
  specs: [
    './src/**/*.e2e-spec.ts',
  ],

  multiCapabilities: [
    {
      'browserName': 'chrome',
      trustAllSSLCertificates: true,
      acceptInsecureCerts: true,
      acceptSslCerts: true,
      'goog:chromeOptions': {
       'w3c': false,
        args: [
          '--ignore-certificate-errors',
          '--unsafely-treat-insecure-origin-as-secure=https://webserver-e2e/',
          '--window-size=800x600', 
          'no-sandbox', 
          '--whitelisted-ips'
        ],
      }
    },
    {
      'browserName': 'firefox',
      acceptInsecureCerts: true,
      marionette : true,
      'moz:firefoxOptions': {
        args: [
          '-accept_insecure_certs'
        ]
      }
    }
  ],
  seleniumAddress: 'http://selenium-hub:4444/wd/hub',
  baseUrl: 'https://webserver-e2e',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {},
  },
  beforeLaunch: () => {
    return Promise.all([
      executeOnMongo(dbParams, setUp),
      new Promise(function(resolve) {
        reporter.beforeLaunch(resolve);
      }),
    ]);
  },
  onPrepare: function() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json'),
    });

    jasmine.getEnv().addReporter(reporter);
    jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));
  },
  afterLaunch: function(exitCode) {
      return new Promise((resolve) => reporter.afterLaunch(resolve.bind(this, exitCode)));
  }
};


