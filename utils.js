console.log('utils.js')

const name = 'Mike'

const add = function (a, b) {
    return a + b
}

module.exports = name  // return value

module.exports = add // return function