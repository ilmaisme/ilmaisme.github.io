$(document).ready(function () {
    //sort header product
    var content = $('.menuProduct');

    $(".menuItem").hover(function () {
        var customType = $(this).data('menu'); // category
        $(".menuItem").removeClass('active')
        $(this).addClass('active')

        content
            .removeClass('active')
            .filter(function () {
                return $(this).data('categ') === customType;
            })
            .addClass('active')
    });

    $(".menuItem.mobile").click(function () {
        var customType = $(this).data('menu'); // category
        $(".menuItem").removeClass('active')
        $(this).addClass('active')

        content
            .removeClass('active')
            .filter(function () {
                return $(this).data('categ') === customType;
            })
            .addClass('active')
    });

    //close menu
    $('body').click(function () {
        $(this).removeClass('overlay');
        $('.menuBlock.desktop').removeClass('active');
    });
    $('.menuBlock').click(function (e) {
        e.stopPropagation();
    })
});

//update mobile menu
updateMenu()
window.addEventListener('unload', function (event) {
    document.getElementById('hamburgToggle').reset();
}, false);

$(window).on('resize', function () {
    updateMenu()
});

function updateMenu() {
    if (viewport().width >= 1102) {
        // console.log("desktop")
        $('.navWrap').removeClass('mobile');
        /* move nav position in desktop */
        $('.nav').appendTo('#navDesk');
        $('.headerSearch').appendTo('.headerLeft');
        $('.headerBil').appendTo('.headerCta');
        $('.menuItem').removeClass('mobile');
        $('.menuBlock').addClass('desktop');
    } else {
        // console.log("mobile")
        $('.navWrap').addClass('mobile');
        /* move nav position in mobile */
        $('.nav').appendTo('#navMob .navWrap').after($('.navMob__bottom'));
        $('.headerSearch').appendTo('#navMob .navMob__bottom');
        $('.headerBil').appendTo('#navMob .navMob__bottom');
        $('.menuItem').addClass('mobile');
        $('.menuBlock').removeClass('desktop');
    }
}

//cta trigger active
function triggerActiveButton(el, parent, classActive) {
    elem = document.querySelector(el)
    elActive = elem.classList.contains('active');
    elem.classList.toggle('active');
    if (!!parent) {
        if (elActive == false) {
            parent.classList.add(classActive);
        } else {
            parent.classList.remove(classActive);
        }
    }
}

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