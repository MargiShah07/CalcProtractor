
//let Interest = require('./InterestPage.js');

var Profile = function () {

    var id = element(by.model('formData.name'));
    var email = element(by.model('formData.email'));
    var next = element(by.partialLinkText('Next'));

    this.enterId = function (userId) {
        id.sendKeys(userId);
        return this;
    }

    this.enterEmail = function (emailValue) {
        email.sendKeys(emailValue);
        return this;
    }

    this.clickNext = function () {
        next.click();
        return require('./InterestPage.js');
    }

}
module.exports = new Profile();