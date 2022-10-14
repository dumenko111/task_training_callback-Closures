//ф-ція відкладеного виклику setTimeout
const callback = function () {
    console.log('відобразиться в коді після таймаут')
}

console.log('відобразиться перед таймаутом')

setTimeout(callback, 2000)

console.log('відобразиться після таймаут')