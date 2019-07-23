
var data=require(process.cwd()+'/utility/MultiFormData.json')
var profile=require(process.cwd()+'/POM pages/ProfilePage.js')

describe('Multiform e2e automation', function() {
	it('e2e flow', function() {
        browser.get(data.url);
		profile.enterId(data.userData.id);
		profile.enterEmail(data.userData.email);
		let interest=profile.clickNext();
        
        interest.SelectRadio(1);
        let payment = interest.clickNext();

        payment.clickNext();
		payment.acceptAlert();
	
		browser.sleep(4000);
    });
});