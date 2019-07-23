
describe('Multiform e2e automation', function() {
	it('e2e flow', function() {
		browser.get('http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile');
		element(by.model('formData.name')).sendKeys('tekarch');
		element(by.model('formData.email')).sendKeys('tekarch@tekarch.com');
		element(by.partialLinkText('Next')).click();
	//	browser.sleep(3000);
		element.all(by.model('formData.type')).get(1).click();
		element(by.partialLinkText('Next')).click();
	//	browser.sleep(3000);
		element(by.partialButtonText('Submit')).click();
		browser.sleep(1000);
		browser.switchTo().alert().accept();
		browser.sleep(4000);
	});
});