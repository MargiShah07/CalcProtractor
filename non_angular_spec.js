

describe('Salesforce HomePage', () => {
    it('visit salesforce homepage website', () => {
        //to run non angular application sync code is there
        //browser.ignoreSynchronization=true;
        // this line will make sync feature of protractor to be disable.
        browser.get('https://login.salesforce.com/');
        element(by.id('username')).sendKeys('abc@gmail.com');
        browser.sleep(3000);
    });
});