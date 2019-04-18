quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }
    var pivotIndex = Math.floor(arr.length / 2)
    var pivot = arr.splice(pivotIndex, 1)[0]
    var left = []
    var right = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot], quickSort(right))
}

var arr = [14, 3, 15, 7, 2, 76, 11]
console.log(quickSort(arr))

const promise = new Promise((resolve, reject) => {
    i = Math.random() * 10
    console.log(i)
    if (i <= 2) {
        setTimeout(() => {
            resolve('Success')
        }, i * 1000)
    } else if (i < 5 && i > 2) {
        setTimeout(() => {
            reject('Failed')
        }, i * 1000)
    } else {
        setTimeout(() => {
            throw new Error('error!')
        }, i * 1000)
    }
}).then((res) => {
    console.log('res', res)
}).catch((rej) => {
    console.log('rej', rej)
})
quickSort1 = (arr) => {
    if (arr.length <= 1) {
        return arr
    }
    var pivotIndex = Math.floor(arr.length / 2)
    var pivot = arr.splice(pivotIndex, 1)[0]
    var left = []
    var right = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot], quickSort(right))
}

var arr = [14, 3, 15, 7, 2, 76, 11]
console.log(quickSort1(arr))