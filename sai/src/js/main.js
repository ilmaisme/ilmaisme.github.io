$(document).ready(function () {
    //toggle mobile menu
    $('#menuToggle').on('click', function () {
        $(this).toggleClass('active')
        $('#nav').toggleClass('active')
    })
    $('#navOpen').hover(function () {
        $(this).toggleClass('active')
    })

    //back to top
    $(window).scroll(function () {
        var a = $(window).scrollTop();
        a > $(window).height() ? ($(".buttonBacktop").show(),
            $(".floating").addClass('active')) : ($(".buttonBacktop").hide(),
            $(".floating").removeClass('active'))
    })
    $(".buttonBacktop").on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow")
    });
});

$(window).on('resize', function () {
    updateMenu()
});

//update mobile menu
updateMenu()

function updateMenu() {
    if ($('#menu').css('display') == 'none') {
        //console.log("desktop")        
        $('.navList').removeClass('mobile');
        changeGoogleStylesDesktop()
    } else {
        //console.log("mobile")
        $('.navList').addClass('mobile');
        changeGoogleStyles();
    }
    $('.headerWrap').removeClass('hidden');
}

//google translate
function changeGoogleStyles() {    
    if (($goog = $('.goog-te-menu-frame').contents().find('body')).length) {
        var stylesHtml = '<style>' +
            '.goog-te-menu2 {' +
            'max-width:100% !important;' +
            'overflow:scroll !important;' +
            'box-sizing:border-box !important;' +
            'height:auto !important;' +
            'border:0 !important;' +
            'padding: 8px 10px !important;' +
            '}' +
            '.goog-te-menu2-item {' +
            'font-family: "Titillium Web", sans-serif; !important;' +
            'font-size: 16px !important;' +
            'font-weight: 400 !important;' +
            'line-height: 1.55 !important;' +
            'color: #2D2D2D !important;' +
            '}' +
            '.goog-te-menu2-item div,.goog-te-menu2-item:link div,.goog-te-menu2-item:visited div,.goog-te-menu2-item:active div {' +
            'color: #2D2D2D !important;' +
            '}' +
            '.goog-te-menu2-item-selected div, .goog-te-menu2-item-selected:link div, .goog-te-menu2-item-selected:visited div, .goog-te-menu2-item-selected:hover div, .goog-te-menu2-item-selected:active div {' +
            'color: #FF3115 !important;' +
            '}' +
            '.goog-te-menu2 * {' +
            'font-family: "Titillium Web", sans-serif; !important;' +
            '}' +
            '</style>';
        $goog.prepend(stylesHtml);
    } else {
        setTimeout(changeGoogleStyles, 50);
    }
}

function changeGoogleStylesDesktop() {
    if (($goog = $('.goog-te-menu-frame').contents().find('body')).length) {
        var stylesHtml = '<style>' +
            '.goog-te-menu2 {' +
            'max-width: unset !important;' +
            'width: unset !important;' +
            'border:0 !important;' +
            'padding: 20px 20px !important;' +
            'font-family: "Titillium Web", sans-serif; !important;' +
            '}' +
            '.goog-te-menu2-item {' +
            'font-family: "Titillium Web", sans-serif; !important;' +
            'font-size: 16px !important;' +
            'font-weight: 400 !important;' +
            'line-height: 1.55 !important;' +
            'color: #2D2D2D !important;' +
            '}' +
            '.goog-te-menu2-item div,.goog-te-menu2-item:link div,.goog-te-menu2-item:visited div,.goog-te-menu2-item:active div {' +
            'color: #2D2D2D !important;' +
            '}' +
            '.goog-te-menu2-item-selected div, .goog-te-menu2-item-selected:link div, .goog-te-menu2-item-selected:visited div, .goog-te-menu2-item-selected:hover div, .goog-te-menu2-item-selected:active div {' +
            'color: #FF3115 !important;' +
            '}' +
            '.goog-te-menu2-item:hover div{' +
            'background: #FFD912; !important;' +
            '}' +
            '.goog-te-menu2 * {' +
            'font-family: "Titillium Web", sans-serif !important;' +
            'margin: auto; !important;' +
            '}' +
            '</style>';
        $goog.prepend(stylesHtml);
    } else {
        setTimeout(changeGoogleStylesDesktop, 50);
    }
}