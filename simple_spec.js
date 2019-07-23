//http://way2automation.com/angularjs-protractor/calc/
//import { by, browser } from "protractor";

describe('Angular HomePage', () => {
it('Loads the homepage', () => {
    browser.get('http://www.angularjs.org');
    browser.manage().window().maximize();

    element(by.model('yourName')).sendKeys('Margi');
    let greeting = element(by.binding('yourName'));
    //expect(greeting.getText().toEqual('Hello Nilay')
    browser.sleep(3000)

});
    
});