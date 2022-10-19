// метод call для примусового виклику ф-ції в контексті якогось об'єкту

const showThis = function () {
    console.log(this)
}

const objA = {
    a: 5,
    b:10,
} 

showThis.call(objA) //викликаємо ф-цію showThis в контексті objA
/////////////////////////////////////////////////////////////////////////

const changeColor = function (color) {
    this.color = color
}

const hat = {
    color: 'black',
}

const sweater = {
    color: 'green',
}

const changeHatColor = changeColor.bind(hat) //bind робить копію ф-ції і в цій змінній назавжди прив'язує її до об'єкту
const changeSweaterColor = changeColor.bind(sweater)

changeHatColor('silver') 
console.log(hat)

changeSweaterColor('brown')
console.log(sweater)

