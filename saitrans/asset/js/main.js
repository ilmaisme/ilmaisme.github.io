$(document).ready(function () {
    //slider mitra
    if ($('.-smitra').is(':visible')) {
        $('.-smitra').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            responsive: [{
                    breakpoint: 1220,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    }

    //toggle mobile menu
    $('#menuToggle').on('click', function () {
        $(this).toggleClass('active')
        $('#nav').toggleClass('active')
    })
    $('.navOpen').hover(function () {
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

    //floating button mobile
    $('#floatingToggle').on('click', function () {
        $(this).toggleClass('active')
        $('.floatingMenu').toggleClass('active')
    })
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
        $('.floating').removeClass('mobile');
        changeGoogleStylesDesktop()
    } else {
        //console.log("mobile")
        $('.navList').addClass('mobile');
        $('.floating').addClass('mobile');
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
            'font-style: normal !important;' +
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
            'font-style: normal !important;' +
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
            'margin: auto !important;' +
            '}' +
            '</style>';
        $goog.prepend(stylesHtml);
    } else {
        setTimeout(changeGoogleStylesDesktop, 50);
    }
}

//close popup
function closePopup() {
    $(".popup").removeClass('active')
}
//open popup
function openPopup() {
    $(".popup").addClass('active')
}

//show hide content
var accItem = document.getElementsByClassName('dropBox');
var accHD = document.getElementsByClassName('-js-show');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {
    var itemClass = this.parentNode.className;

    if (itemClass == 'dropBox close mt2') {
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'dropBox close mt2';
        }
        this.parentNode.className = 'dropBox open active mt2';
    } else {
        this.parentNode.className = 'dropBox close mt2';
    }
}

// alert
function alertStatus(msg, link) {
    // console.log(btn)
    let ts = document.querySelector('[data-alert]')
    if (ts) {
        // btn.setAttribute('disabled','disabled')
        ts.firstElementChild.innerHTML = msg
        ts.classList.remove('-hide')
        ts.classList.add('-show')
        let tsk = ts.getElementsByTagName('a')[0]
        if (tsk) {
            if (link) {
                tsk.innerHTML = 'Kembali'
                tsk.href = link
            } else {
                tsk.innerHTML = 'Oke'
                tsk.href = '#'
            }
            tsk.addEventListener('click', function (e) {
                e.preventDefault()
                if (link) {
                    window.location.href = link
                } else {
                    ts.classList.add('-hide')
                }
                console.log('i')
            })
        }
        //alertAutoDismiss(ts)
    }
}