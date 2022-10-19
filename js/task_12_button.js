const counter = {
    value: 0,
    increment(value) {
        console.log('increment -> this', this)
        this.value += 1
    },
    decrement(value) {
        console.log('decrement -> this', this)
        this.value -= 1
    },
}

const decrementBtn = document.querySelector('.js-decrement')
const incrementBtn = document.querySelector('.js-increment')
const valueEl = document.querySelector('.js-value')

decrementBtn.addEventListener('click', function () {
    console.log('клік по декременту');

    counter.decrement()
    console.log(counter)
    valueEl.textContent=counter.value
})
incrementBtn.addEventListener('click', function () {
    console.log('клік по інкрименту');

    counter.increment()
    console.log(counter)
    valueEl.textContent=counter.value
})