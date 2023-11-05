let hd = $(".header"),
    mTg = $('#menuToggle');

uncheckedMenu()
hideMenuMobile()
updateMenu()
if (window.history && window.history.pushState) {
    window.history.pushState('forward', null, '');
    $(window).on('popstate', function () {
        uncheckedMenu()
        hideMenuMobile()
    });
}

$(window).on('resize', function () {
    updateMenu()
    if (viewport().width >= 1230) {
        uncheckedMenu()
        hideMenuMobile()
    }
});

$(document).ready(function () {
    //toggle mobile menu
    mTg.on('click', function () {
        isChecked = $(this).is(':checked')

        if (isChecked) {
            $('.menuMob').addClass('active');
            $('.menu').addClass('active');
        } else {
            hideMenuMobile()
        }
    })
});

//calc width window
function viewport() {
    var e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
    };
}

//update mobile menu
elObserve = '';

function updateMenu(elem) {
    if (viewport().width >= 1230) {
        // console.log("desktop")
        $('.menuMob').removeClass('mobile');
        hd.removeClass('mobile');
        /* move nav position in desktop */
        $('.nav').appendTo('#navDesk');
        $('.headerAccess').appendTo('#accessDesk');
        $('.searchbox').appendTo('.searchboxWrap');
        $('.buttonLang').insertAfter('#accessDesk');
        //help observer
        const elem = document.querySelector('.footerBottom')
        return elem
    } else {
        // console.log("mobile")
        $('.menuMob').addClass('mobile');
        hd.addClass('mobile');
        /* move nav position in mobile */
        $('.nav').appendTo('#navMob');
        $('.headerAccess').appendTo('#accessMob');
        $('.searchbox').insertBefore('#accessMob');
        $('.buttonLang').insertBefore('.searchbox');
        //help observer
        const elem = document.querySelector('footer')
        return elem
    }
}

function uncheckedMenu() {
    mTg.prop('checked', false);
}

function hideMenuMobile() {
    $('.menuMob').removeClass('active');
    $('.menu').removeClass('active');
}

// bilingual button
function changeLanguage(el) {
    lang = el.getAttribute('value');
    if (lang == "id") {
        el.setAttribute('value', 'eng');
    } else {
        el.setAttribute('value', 'id');
    }
}

//  deteksi viewport
let settings = {
    root: null,
    rootMargin: '0px',
    threshold: 0
}
const footer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            $('.help').addClass('hide')
        } else {
            $('.help').removeClass('hide')
        }
    });
}, settings);

//console.log(updateMenu(elObserve))
if (!!updateMenu(elObserve)) {
    footer.observe(updateMenu(elObserve));
}

//cta trigger active
function triggerActiveButton(el, txt, txtrev) {
    elActive = el.classList.contains('active');
    el.classList.toggle('active');
    if (!!txt) {
        if (elActive == false) {
            el.innerHTML = txt;
        } else {
            el.innerHTML = txtrev;
        }
    }
}

//popover
let popover = document.querySelector('.popover'),
    popovers = document.querySelectorAll('.popover');

function triggerPopover(el) {
    target = el.parentNode.getElementsByClassName('popover')[0];
    target.classList.add('visible')
}

function hidePopover() {
    popovers.forEach((item) => {
        item.classList.remove('visible')
    })
}

document.getElementsByTagName("body")[0].addEventListener("click", function (event) {
    if (!!popover) {
        //hide all popover
        hidePopover()
    }
}, false);

if (!!popover) {
    popovers.forEach(function(elem) {
        elem.addEventListener("click", function(e) {
            e.stopPropagation()
        });
    })
}