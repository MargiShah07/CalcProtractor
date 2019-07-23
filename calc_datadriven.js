let XLSX = require('xlsx')

describe('Calculator Reading data from Excel file', () => {
    beforeEach(function(){
        browser.get('https://www.way2automation.com/angularjs-protractor/calc/');
        browser.manage().window().maximize();
    });
    afterEach(function(){
        console.log('Test case Executed');
    });

    it('Addition', () => {
        let workbook = XLSX.readFile('./utilities/ReadExcel.xlsx');
        let sheetName = workbook.SheetNames[0];
        let worksheet1 = workbook.Sheets[sheetName];
        let cellA1 = worksheet1['A1'];
        let cellvalueA = cellA1.v;
        let cellB1 = worksheet1['B1'];
        let cellvalueB = cellB1.v;

        element(by.model('first')).sendKeys(cellvalueA);
    //element.all(by.options('value for (key, value) in operators')).then( (items) => {
    element.all(by.options('value for (key, value) in operators')).then( function(items) {
            console.log('inside call back;')
        items[0].click();
    })
    console.log('outside call back');
    element(by.model('second')).sendKeys(cellvalueB);

    element(by.buttonText('Go!')).click();

    let sum = element(by.binding('latest'));
    // expect(sum.getText()).toBe('3');
    sum.getText().then(function(Text){
    worksheet1['A1'].v = Text;
    console.log(Text);
})
// worksheet1['A2'].v = sum.getText();
    XLSX.writeFile(workbook, './utilities/WriteExcel.xlsx');
    });

    it('Subtraction', () => {
        let workbook = XLSX.readFile('./utilities/ReadExcel.xlsx');
        let sheetName = workbook.SheetNames[0];
        let worksheet1 = workbook.Sheets[sheetName];
        let cellA1 = worksheet1['A2'];
        let cellvalueA = cellA1.v;
        let cellB1 = worksheet1['B2'];
        let cellvalueB = cellB1.v;

        element(by.model('first')).sendKeys(cellvalueA);
    //element.all(by.options('value for (key, value) in operators')).then( (items) => {
    element.all(by.options('value for (key, value) in operators')).then( function(items) {
            console.log('inside call back;')
        items[4].click();
    })
    console.log('outside call back');
    element(by.model('second')).sendKeys(cellvalueB);

    element(by.buttonText('Go!')).click();

    let sub = element(by.binding('latest'));
    // sub.getText().then(function(Text){
    //     worksheet1['A2'].v = Text;
    //     console.log(Text);
    // })
    worksheet1['A2'].v = sub.getText();
    XLSX.writeFile(workbook, './utilities/WriteExcel.xlsx');

    });

    xit('Division', () => {
        let workbook = XLSX.readFile('./utilities/ReadExcel.xlsx');
        let sheetName = workbook.SheetNames[0];
        let worksheet1 = workbook.Sheets[sheetName];
        let cellA1 = worksheet1['A3'];
        let cellvalueA = cellA1.v;
        let cellB1 = worksheet1['B3'];
        let cellvalueB = cellB1.v;

        element(by.model('first')).sendKeys(cellvalueA);
    //element.all(by.options('value for (key, value) in operators')).then( (items) => {
    element.all(by.options('value for (key, value) in operators')).then( function(items) {
            console.log('inside call back;')
        items[1].click();
    })
    console.log('outside call back');
    element(by.model('second')).sendKeys(cellvalueB);

    element(by.buttonText('Go!')).click();

    let div = element(by.binding('latest'));
    // expect(sum.getText()).toBe('3');
    worksheet1['A3'].v = div.getText();
    XLSX.writeFile(workbook, './utilities/WriteExcel.xlsx');

    });

    xit('Multiplication', () => {
        let workbook = XLSX.readFile('./utilities/ReadExcel.xlsx');
        let sheetName = workbook.SheetNames[0];
        let worksheet1 = workbook.Sheets[sheetName];
        let cellA1 = worksheet1['A4'];
        let cellvalueA = cellA1.v;
        let cellB1 = worksheet1['B4'];
        let cellvalueB = cellB1.v;

        element(by.model('first')).sendKeys(cellvalueA);
    //element.all(by.options('value for (key, value) in operators')).then( (items) => {
    element.all(by.options('value for (key, value) in operators')).then( function(items) {
            console.log('inside call back;')
        items[3].click();
    })
    console.log('outside call back');
    element(by.model('second')).sendKeys(cellvalueB);

    element(by.buttonText('Go!')).click();

    let mul = element(by.binding('latest'));
    // expect(sum.getText()).toBe('3');
    worksheet1['A4'].v = mul.getText();
    XLSX.writeFile(workbook, './utilities/WriteExcel.xlsx');

    });

    xit('Modulo', () => {
        let workbook = XLSX.readFile('./utilities/ReadExcel.xlsx');
        let sheetName = workbook.SheetNames[0];
        let worksheet1 = workbook.Sheets[sheetName];
        let cellA1 = worksheet1['A5'];
        let cellvalueA = cellA1.v;
        let cellB1 = worksheet1['B5'];
        let cellvalueB = cellB1.v;

        element(by.model('first')).sendKeys(cellvalueA);
    //element.all(by.options('value for (key, value) in operators')).then( (items) => {
    element.all(by.options('value for (key, value) in operators')).then( function(items) {
            console.log('inside call back;')
        items[2].click();
    })
    console.log('outside call back');
    element(by.model('second')).sendKeys(cellvalueB);

    element(by.buttonText('Go!')).click();

    let mod = element(by.binding('latest'));
    // expect(sum.getText()).toBe('3');
    worksheet1['A5'].v = mod.getText();
    XLSX.writeFile(workbook, './utilities/WriteExcel.xlsx');

    });
});