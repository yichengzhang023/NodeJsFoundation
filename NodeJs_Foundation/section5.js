const book = {
    title: 'Ego',
    author: 'Holiday'
}

const bookJson = JSON.stringify(book)

console.log(bookJson)

const parseData = JSON.parse(bookJson)
console.log(parseData.title)

const fs = require('fs')
fs.writeFileSync('section5.json',bookJson)

const dataBuffer = fs.readFileSync('section5.json')
console.log(dataBuffer.toString())