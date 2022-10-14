// функція filter, яка відфільтровує масив за допомогою колбеку
const filter = function (array, test) {
    const filterArray = []

    for (const el of array) {
        const passed = test(el)

        if (passed) {
            filterArray.push(el)
        }
    }
        return filterArray
}

const callback = function (value) {
    return value >= 3;
}

const arr = [1, 2, 54, 2, 30, 5, 18]

const resultOne = filter(arr, callback)
console.log(resultOne)

const resultTwo = filter(arr, function (value) {return value >=15 })
console.log(resultTwo)

const fruits = [
    { name: 'apples', quantity: 200, isfresh: true },
    { name: 'grapes', quantity: 150, isfresh: false },
    { name: 'bananas', quantity: 100, isfresh: true },
]

const getFruitsWithQuantity = function (fruit) {
    return fruit.quantity >= 120
}

const resultThree = filter(fruits, getFruitsWithQuantity)
console.log(resultThree)