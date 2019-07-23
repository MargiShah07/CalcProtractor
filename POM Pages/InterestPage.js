
var Interest=function(){

    var radioOptions=element.all(by.model('formData.type'));
    var next=element(by.partialLinkText('Next'));
    var back=element(by.partialLinkText('Back'));

    this.SelectRadio=function(index){
        radioOptions.get(index).click();
    };

    this.clickNext=function(){
        next.click();
        return require('./PaymentPage.js');
    };

    // this.clickBack=function(){
    //     back.click();
    //     return require('./ProfilePage.js');
    // }
    
};

module.exports=new Interest();