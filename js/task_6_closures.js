//замикання: можливість отримувати доступ до локальних змінних в батьківській ф-ції

const fnA = function (parametr) {
    const innerVar = 'Значення внутрішньої змінної ф-ції innerVar'

    const innerFunction = function () {
        console.log(parametr)
        console.log(innerVar)
        console.log('Це виклик ф-ції innerFunction')
    }
    return innerFunction
}

const fnB = fnA(555)
console.log(fnB())
