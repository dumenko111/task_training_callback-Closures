const buttonRef = document.querySelector('.js-button');


const handleClick = function () {
    console.log('Клік по кнопці' + Date.now())
}

buttonRef.addEventListener('click', handleClick)



