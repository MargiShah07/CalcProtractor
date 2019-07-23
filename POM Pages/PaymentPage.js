
var Payment=function(){

    var button=element(by.partialButtonText('Submit'));
        
    this.clickNext=function(){
        button.click();
    };

    this.acceptAlert=function(){
        browser.switchTo().alert().accept();
    };
};
module.exports=new Payment();