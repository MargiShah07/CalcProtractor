

describe('Basic Calculation', () => {
    it('Addition Testing', () => {
        browser.get('http://way2automation.com/angularjs-protractor/calc/');
        browser.manage().window().maximize();
    
        element(by.model('first')).sendKeys('2');
        element(by.model('second')).sendKeys('3');
        element(by.buttonText('Go!')).click();
        
        let sum = element(by.binding('latest'));
        expect(sum.getText()).toBe('5');

        // element(by.model('first')).sendKeys('5');
        // element(by.model('second')).sendKeys('9');
        // element(by.buttonText('Go!')).click();

        browser.sleep(3000)
    
    });

    it('Subtraction Testing', () => {
        browser.get('http://way2automation.com/angularjs-protractor/calc/');
        browser.manage().window().maximize();
    
        element(by.model('first')).sendKeys('6');
        element.all(by.options('value for (key, value) in operators')).then( (items) => {
            console.log('inside call back');
            items[4].click();
        })
        console.log('outside call back')
        element(by.model('second')).sendKeys('3');
        element(by.buttonText('Go!')).click();
        
        let sum = element(by.binding('latest'));
        expect(sum.getText()).toBe('3');

        browser.sleep(3000)
    
    });

    it('Division Testing', () => {
        browser.get('http://way2automation.com/angularjs-protractor/calc/');
        browser.manage().window().maximize();
    
        element(by.model('first')).sendKeys('6');
        element.all(by.options('value for (key, value) in operators')).then( (items) => {
            console.log('inside call back');
            items[1].click();
        })
        console.log('outside call back')
        element(by.model('second')).sendKeys('3');
        element(by.buttonText('Go!')).click();
        
        let sum = element(by.binding('latest'));
        expect(sum.getText()).toBe('2');

        browser.sleep(3000)
    
    });

    it('Multiplication Testing', () => {
        browser.get('http://way2automation.com/angularjs-protractor/calc/');
        browser.manage().window().maximize();
    
        element(by.model('first')).sendKeys('6');
        element.all(by.options('value for (key, value) in operators')).then( (items) => {
            console.log('inside call back');
            items[3].click();
        })
        console.log('outside call back')
        element(by.model('second')).sendKeys('3');
        element(by.buttonText('Go!')).click();
        
        let sum = element(by.binding('latest'));
        expect(sum.getText()).toBe('18');

        browser.sleep(3000)
    
    });

    it('Modulo Testing', () => {
        browser.get('http://way2automation.com/angularjs-protractor/calc/');
        browser.manage().window().maximize();
    
        element(by.model('first')).sendKeys('6');
        element.all(by.options('value for (key, value) in operators')).then( (items) => {
            console.log('inside call back');
            items[2].click();
        })
        console.log('outside call back')
        element(by.model('second')).sendKeys('3');
        element(by.buttonText('Go!')).click();
        
        let sum = element(by.binding('latest'));
        expect(sum.getText()).toBe('0');

        browser.sleep(3000)
    
    });
        
    });