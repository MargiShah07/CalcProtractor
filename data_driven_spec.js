var data=require('./utility/data.json');

function calculate(Avalue, Bvalue,index)
{
    element(by.model('first')).sendKeys(Avalue);
    //element.all(by.options('value for (key, value) in operators')).then( (items) => {
    element.all(by.options('value for (key, value) in operators')).then( function(items) {
            console.log('inside call back;')
        items[index].click();
    })
    console.log('outside call back');
    element(by.model('second')).sendKeys(Bvalue);

    element(by.buttonText('Go!')).click();
}

describe('Basic Caculations', () => {
    
    beforeEach(function(){
        browser.get('https://www.way2automation.com/angularjs-protractor/calc/');
        browser.manage().window().maximize();
    });
    afterEach(function(){
        console.log('Test case Executed');
    });

    it('Addition Testing', () => {
        

        console.log('data from json  is ' + data.add.a);
        console.log('data from json  is ' + data.add.b);

        calculate(data.add.a,data.add.b,0);
        let sum = element(by.binding('latest'));
        expect(sum.getText()).toBe('40');
        //browser.sleep(3000);
        
    });

    it('Subtraction Testing', () => {
        

        console.log('data from json  is ' + data.sub.a);
        console.log('data from json  is ' + data.sub.b);

        calculate(data.add.a,data.add.b,0);
        let sum = element(by.binding('latest'));
        expect(sum.getText()).toBe('5');
        //browser.sleep(3000);
        
    });

});