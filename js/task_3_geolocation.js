//геолокація місцезнахлдженя

const getCurrentPositionSucces = function (position) {
    console.log(position)
}

const onGetPositionError = function (error) {
    console.log(error)
}

window.navigator.geolocation.getCurrentPosition(getCurrentPositionSucces, onGetPositionError)