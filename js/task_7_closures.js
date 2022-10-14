// використовуємо ф-цію з іменем повара в замиканні
// визначення(замикання це функція, яка вертається із ф-ції і має доступ до всіх 
// змінних батьківської ф-ції)

const makeSheff = function (name) { //name в замиканні
    const makeDish = function (dish) {
        console.log(`${name} готовить ${dish}`)
    }
    return makeDish
}

const mango = makeSheff('Mango')
const poly = makeSheff('Poly') // ім'я повара записується в ф-цію makeSheff(name)

mango('котлетку')
poly('борщ')
poly('вареники') // назва страви записується в ф-цію makeDish(dish)

console.dir(mango)