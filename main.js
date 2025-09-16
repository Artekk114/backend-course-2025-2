const currency = "JPY";
const exact_dime = "20240127"; 

const myURL = new URL('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange');

myURL.searchParams.append("valcode", currency);
myURL.searchParams.append("date", exact_dime);

console.log(myURL.toString());