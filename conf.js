// An example configuration file.
exports.config = {
    directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'chrome'
    },
  
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
  
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    //specs: ['calc_spec.js'],
     specs:['calc_Spec_fun.js'],
    // specs: ['non_angular_spec.js'],
  
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    },

    // OnPrepare: function()
    // {
    //   //to run non angular application
    //   browser.ignoreSynchronization=true;
    // }
  };