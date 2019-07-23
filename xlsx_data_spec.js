let XLSX = require('xlsx')

describe('XLSX demo', () => {
    it('reading and writing xlsx', () => {
        let workbook = XLSX.readFile('./utility/ExcelData1.xlsx');
        let sheetName = workbook.SheetNames[0];
        let worksheet1 = workbook.Sheets[sheetName];
        let cellA1 = worksheet1['A1'];
        let cellvalue = cellA1.v;

        console.log('demo data from excel ' + cellvalue);

        worksheet1['A1'].v = 'Hi Margi, How Are you?'

        XLSX.writeFile(workbook, './utility/ExcelData2.xlsx');

    });
});