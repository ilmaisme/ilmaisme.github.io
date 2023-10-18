//increment quantity product
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

//check cart item
function checkAllCart(el) {
    let checks = el.parentNode.querySelectorAll('[type="checkbox"]');

    checks.forEach((check) => {
        check.checked = el.checked ? false : true;
    })
    el.checked = !el.checked
}

//cart position on device
updateCartPos()
$(window).on('resize', function () {
    updateCartPos()
});

function updateCartPos() {
    if (viewport().width >= 1230) {
        /* move cta cart position in desktop */
        $('.summaryCtaWrap').appendTo('#cartDesk');
    } else {
        /* move cta cart position in mobile */
        $('.summaryCtaWrap').appendTo('#cartMob');
    }
}