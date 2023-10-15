//increament quantity product
function inc(el, max) {
    let number = el.parentNode.querySelector('[name="number"]'),
        buttons = el.parentNode.querySelectorAll('button');
    number.value = parseInt(number.value) + 1;
    buttons.forEach((button) => {
        button.classList.remove('disable')
    })
    if (number.value >= parseInt(max)) {
        number.value = max;
        el.classList.add('disable')
    }
}

function dec(el, min) {
    let number = el.parentNode.querySelector('[name="number"]'),
    buttons = el.parentNode.querySelectorAll('button');
    number.value = parseInt(number.value) - 1;
    buttons.forEach((button) => {
        button.classList.remove('disable')
    })
    if (number.value <= parseInt(min)) {
        number.value = min;
        el.classList.add('disable')
    }
}