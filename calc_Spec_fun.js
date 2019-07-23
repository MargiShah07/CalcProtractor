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
        console.log('Testcase Executed.')
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

    xit('Subtraction Testing', () => {
        browser.get('http://way2automation.com/angularjs-protractor/calc/');
        browser.manage().window().maximize();
    
        calculator(6,3,4);

        let sum = element(by.binding('latest'));
        expect(sum.getText()).toBe('3');

        browser.sleep(3000)
    
    });

    it('Division Testing', () => {
        browser.get('http://way2automation.com/angularjs-protractor/calc/');
        browser.manage().window().maximize();
    
        calculator(6,3,1)
        
        let sum = element(by.binding('latest'));
        expect(sum.getText()).toBe('2');

        browser.sleep(3000)
    
    });

    it('Multiplication Testing', () => {
        browser.get('http://way2automation.com/angularjs-protractor/calc/');
        browser.manage().window().maximize();
    
        calculator(6,3,3)
        
        let sum = element(by.binding('latest'));
        expect(sum.getText()).toBe('18');

        browser.sleep(3000)
    
    });

    xit('Modulo Testing', () => {
        browser.get('http://way2automation.com/angularjs-protractor/calc/');
        browser.manage().window().maximize();
    
        calculator(6,3,2)
        
        let sum = element(by.binding('latest'));
        expect(sum.getText()).toBe('0');

        browser.sleep(3000)
    
    });
        
    });