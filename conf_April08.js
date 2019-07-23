// An example configuration file.
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    directConnect: true,
    // seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    // capabilities: {
    //   'browserName': 'internet explorer',
    //   'platform': 'ANY',
    //   'version': '11'
    // },

    capabilities: {
        'browserName': 'chrome',
        // marionette: false,
        shardTestFiles: true,
        maxInstances: 2,
    },
  
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
  
    // Spec patterns are relative to the current working directory when
    // protractor is called.

    //  specs:['spec_April08.js'],

    suites:{
        functional:['spec_April08.js','spec_April08_1.js']
    },

    // multiCapabilities:[
    //     {
    //         'browserName': 'firefox',
    //         marionette: false,
    //         specs: ['spec_April08.js']
    //     },
    //     {
    //         'browserName': 'chrome',
    //         specs: ['spec_April08_1.js']
    //     }
    // ],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    },

    onPrepare: function(){
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target/screenshots',
                takeScreenshots: true
                // takeScreenshotsOnlyOnFailers: true
        })
        );
    }

    // onPrepare: function() {
    //     var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
    //     browser.getProcessedConfig().then(function(config) {
    //       var capabilities = config.capabilities;
    //       jasmine.getEnv().addReporter(
    //         new Jasmine2HtmlReporter({
    //           savePath: 'target/screenshots',
    //           docTitle: 'Test Calculator Operation',
    //           takeScreenshots: true,
    //         //   screenshotsFolder: '/screenshots',
    //           fileName: 'html-' + '-' + capabilities.browserName,
    //           consolidateAll: true,
    //           consolidate: true,
    //         //   takeScreenshotsOnlyOnFailures: true
    //         })
    //       );
    //     });
    //   }

  };