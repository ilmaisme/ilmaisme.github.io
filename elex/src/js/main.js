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

    $('body').click(function () {
        //close menu
        $(this).removeClass('overlay');
        $('.menuBlock.desktop').removeClass('active');
        $('.headerCateg__btn').removeClass('active');

        //close product commerce        
        $('.productCommerce').removeClass('active');
    });
    $('.menuBlock').click(function (e) {
        e.stopPropagation();
    })
    $('.headerCateg__btn').click(function (e) {
        e.stopPropagation();
        $(this).toggleClass("active")
        if ($(this).hasClass("active")) {
            $('body').addClass('overlay');
        } else {
            $('body').removeClass('overlay');
        }
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
function triggerActiveButton(el, parent, classActive, btn, target) {
    if (!!el) {
        //activated element
        elem = document.querySelector(el)
        elem.classList.toggle('active');
    } else {
        //activated this button
        btn.classList.toggle('active');
        //activated target based on parent
        if (!!target) {
            tg = btn.closest(parent).querySelector(target)
            tg.classList.toggle('active');
        }
    }
    if (!!classActive) {
        //activated parent with class
        elActive = elem.classList.contains('active');
        if (elActive == false) {
            parent.classList.add(classActive);
        } else {
            parent.classList.remove(classActive);
        }
    }
}
//cta product
function triggerCtaProduct(btn, parent, target) {
    btn.classList.toggle('active');
    if (!!target) {
        tg = btn.closest(parent).querySelector(target)
        tg.classList.toggle('active');
        console.log(tg)
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