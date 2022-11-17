let hd = $(".header");
let jno = $(".js-nav-offset");
let mTg = $('#menuToggle');

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
    uncheckedMenu()
    hideMenuMobile()
    updateMenu()
});

$(document).ready(function () {
    // sticky menu
    $(window).scroll(function () {
        var a = $(window).scrollTop(),
            b = hd.outerHeight();
        a > b + 40 ? (hd.addClass("fixed"),
                jno.addClass("active")) :
            (hd.removeClass("fixed"),
                jno.removeClass("active"))

        a > $(window).height() ? $(".buttonWhatsapp").show() : $(".buttonWhatsapp").hide()
    })

    //toggle mobile menu
    mTg.on('click', function () {
        isChecked = $(this).is(':checked')

        if (isChecked) {
            $('.menuMob').addClass('active');
            $('.menu').addClass('active');
            $('body').addClass('o-false');
        } else {
            hideMenuMobile()
        }
    })

    //back to top
    $(".buttonBacktop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow")
    });

    //open category child menu
    $(".dropItem__parent").on('click', function () {
        if ($(this).hasClass('active')) {
            $(".dropItem__parent").removeClass('active');
        } else {
            $(".dropItem__parent").removeClass('active');
            $(this).addClass('active');
        }
    });
});

//update mobile menu
function updateMenu() {
    $(".dropItem__parent>.dropLink").find("span").remove();
    
    if ($('#menu').css('display') == 'none') {
        //console.log("desktop")        
        $('.menuMob').removeClass('mobile');
        hd.removeClass('mobile');
        /* move nav position in desktop */
        $('.nav').appendTo('.headerWrap');
        $('.drop').appendTo('#dropDesk');
        $('#search').attr('placeholder','Cari judul buku, author, atau illustrator');
    } else {
        //console.log("mobile")
        $('.menuMob').addClass('mobile');
        hd.addClass('mobile');
        /* move nav position in mobile */
        $('.nav').appendTo('#navMob');
        $('.drop').appendTo('#dropMob');
        $(".dropItem__parent>.dropLink").append("<span class='icon-chevron'></span>");
        $('#search').attr('placeholder','Cari disini');
    }
    $('.menuTab__content').removeClass('active').css("display", "none");
    $('#utama').addClass('active').css("display", "block");
    $('.headerWrap').removeClass('hidden');
}

function uncheckedMenu() {
    mTg.prop('checked', false);
}

function hideMenuMobile() {
    $('.menuMob').removeClass('active');
    $('.menu').removeClass('active');
    $('.menu').removeClass('active');
    $('body').removeClass('o-false');
}

//open category menu
function openCategory(e) {
    let drop = $('.drop');
    jQuery(e).toggleClass('active');
    drop.toggleClass('visible');
}

//open user menu
function openUserMenu(e) {
    let drop = $('.userDrop');
    jQuery(e).toggleClass('active');
    drop.toggleClass('visible');
}

//tab menu
function openTabMenu(evt, cityName) {
    var i, tablinkcontent, tabbutton;
    tablinkcontent = document.getElementsByClassName("menuTab__content");
    for (i = 0; i < tablinkcontent.length; i++) {
        tablinkcontent[i].style.display = "none";
    }
    tabbutton = document.getElementsByClassName("menuTab__btn");
    for (i = 0; i < tabbutton.length; i++) {
        tabbutton[i].className = tabbutton[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}