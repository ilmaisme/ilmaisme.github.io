$(window).on('load', function () {
    /*setTimeout(function () {
        $('.preloader').addClass("done");
        $(".cover").addClass("active");
        $(".coverTitle__top").velocity({
            top: "0"
        }, {
            delay: 0,
            duration: 300
        });
        $(".coverTitle__bottom").velocity({
            top: "0"
        }, {
            delay: 300,
            duration: 300
        });
    }, 3000);*/
    //console.log('loaded');
})

$(document).ready(function () {
    $('.base-layer').addClass('active');
    
    // 1. Animation Intro
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('introAnim'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/husni-ismail.json',
        name: 'myAnimation',
    });
    /*
    // 7. Animation bifast
    var paramBifast = {
        container: document.getElementById('bifastAnim'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/bi-fast.json',
        name: 'myAnimation',
    };
    var playBifast;
    playBifast = bodymovin.loadAnimation(paramBifast);
    // playBifast.play();*/
})

//close modal popup 
let mdl = $('.popup');
$('.buttonClose').on('click', function (e) {
    closePopup()
})

$('.popup').on("click", function () {
    closePopup()
})

$('.ecosystemPop__wrap').on('click', function (e) {
    e.stopPropagation();
})

function closePopup() {
    if (mdl.length) {
        mdl.removeClass('active')
    }
}

//open modal popup
function openPopup(type) {
    let popupnum = type;
    if (mdl.length) {
        fullpage_api.setAllowScrolling(false);
        fullpage_api.setKeyboardScrolling(false);
        $('.ecosystemClick').addClass('opac0')

        $('#popup' + popupnum).addClass('active')
        // console.log()
    }
}

/* s: Get HEIGHT Device */
const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener("resize", appHeight)
appHeight()
/* e: Get HEIGHT Device */