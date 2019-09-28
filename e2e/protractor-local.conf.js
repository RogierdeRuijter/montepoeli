// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const {SpecReporter} = require('jasmine-spec-reporter');
const executeOnMongo = require('./start-up-scripts/exec-on-mongo');
const setUp = require('./start-up-scripts/set-up');

const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

const reporter = new HtmlScreenshotReporter({
  dest: './reports/images/',
  filename: 'my-report.html',
});


const dbParams = {
  url: 'mongodb://localhost:27019',
  dbName: 'admin',
};

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts',
  ],

  capabilities: {
    'browserName': 'chrome'
  },
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {
    },
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
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }
};


