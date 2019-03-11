const validator = require('validator');
const fs = require('fs');
fs.writeFileSync('hello.txt','First application');
fs.appendFileSync('hello.txt',' Added content');

console.log(validator.isEmail('6723672@gmail.com'))

console.log(validator.isURL('www.6723672.com'))