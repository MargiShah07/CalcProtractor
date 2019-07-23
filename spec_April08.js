let winston = require('winston');
const logger = winston.createLogger({
    level: 'error',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write to all logs with level `info` and below to `combined.log` 
      // - Write all logs error (and below) to `error.log`.
      //
      new winston.transports.File({ filename: './reports/winstonBasicLog.log', level: 'info' }),
      
    ]
  });

  //this will give log into console
  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple()
    }));
  }
// winston.add(winston.transports.File,{ filename: './reports/winstonBasicLog.log'});

function calculator(Avalue,Bvalue,index)
{
    element(by.model('first')).sendKeys(Avalue);

    element.all(by.options('value for (key, value) in operators')).then( (items) => {
        console.log('inside call back');
        items[index].click();
    })
    console.log('outside call back')
    element(by.model('second')).sendKeys(Bvalue);
    element(by.buttonText('Go!')).click();
}

describe('Basic Calculation', () => {

    beforeEach(function(){
        browser.get('http://way2automation.com/angularjs-protractor/calc/');
        browser.manage().window().maximize();
    })
    afterEach(function(){
        //console.log('Testcase Executed.')
        // winston.info("Testcase Executed")
        logger.info("Testcase Executed")
        logger.error("This is very bad error")
    })

    it('Addition Testing', () => {
        calculator(2,3,0)
        
        let sum = element(by.binding('latest'));
        expect(sum.getText()).toBe('5');

        // element(by.model('first')).sendKeys('5');
        // element(by.model('second')).sendKeys('9');
        // element(by.buttonText('Go!')).click();

        browser.sleep(3000)
    
    });

});