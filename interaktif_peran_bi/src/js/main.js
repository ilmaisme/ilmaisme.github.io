$(window).on('load', function () {
    // setTimeout(function () {
    //     $('.preloader').addClass("done");
    //     $(".buttonCover").addClass("enable");
    // }, 3000);
    //console.log('loaded');
})

$(document).ready(function () {
    // 1. Animation Ekspor
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationExport'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/koperasi-anim.json',
        name: 'myAnimation',
    });
    // 2. Animation Acceleration
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('accelAnim'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/accel-anim.json',
        name: 'myAnimation',
    });
    // 3. Animation Quote 1
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('quote1'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/perry-anim.json',
        name: 'myAnimation',
    });
    // 4. Animation Quote 2
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('quote2'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/tarmizi-anim.json',
        name: 'myAnimation',
    });
    // 5. Animation Pull
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('pullAnim'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/pull-anim.json',
        name: 'myAnimation',
    });
    // 6. Animation Push
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('pushAnim'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/push-anim.json',
        name: 'myAnimation',
    });
    // 7. Animation bifast
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('bifastAnim'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/bi-fast.json',
        name: 'myAnimation',
    });
    // 8. Animation qris
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('qrisAnim'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/qris-anim.json',
        name: 'myAnimation',
    });
    // 9. Animation ecom
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('ecomAnim'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/ecom-anim.json',
        name: 'myAnimation',
    });
    // 10. Animation efin
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('efinAnim'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/efin-anim.json',
        name: 'myAnimation',
    });
    // 11. Animation efarm
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('efarmAnim'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/efarm-anim.json',
        name: 'myAnimation',
    });

    // var animation = bodymovin.loadAnimation({
    //     container: document.getElementById('globalImg'),
    //     renderer: 'svg',
    //     loop: true,
    //     autoplay: true,
    //     path: 'asset/json/ekspor.json',
    //     name: 'myAnimation',
    // });

    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        //navigation: true,
        anchors: ['cover', 'intro'],
        lockAnchors: true,
        //scrollOverflow: true,

        onLeave: function (origin, destination, direction) {
            var leavingSection = this;

            if (origin.index == 0 && direction == 'down') {}
            if (origin.index == 1 && direction == 'up') {
                fullpage_api.setAllowScrolling(false);
                fullpage_api.setKeyboardScrolling(false);
                $('.cover').addClass('active')
                $(".coverTitle").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.intro').removeClass('active')
                        $('.cover').removeClass('left')
                    }
                });
                $(".intro").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 1 && direction == 'down') {
                $(".introArticle").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $('.intro').addClass('fly')
                    }
                });
            }
            if (origin.index == 2 && direction == 'up') {
                $(".introArticle").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 300
                });
            }
            if (origin.index == 2 && direction == 'down') {}
        }
    })

    fullpage_api.setAllowScrolling(false);
    fullpage_api.setKeyboardScrolling(false);
})

function startIntro() {
    fullpage_api.moveTo('intro', 1);
    fullpage_api.setAllowScrolling(true);
    fullpage_api.setKeyboardScrolling(true);
    $('.cover').removeClass('active')
    $(".coverTitle").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 300,
        complete: function () {
            $('.intro').addClass('active')
            $('.cover').addClass('left')
        }
    });
    $(".intro").velocity({
        opacity: "1"
    }, {
        delay: 300,
        duration: 300
    });
}

//close modal popup 
let mdl = $('.popup');
$('.buttonClose').on('click', function (e) {
    if (mdl.length) {
        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);

        mdl.removeClass('active')
    }
})

//open modal popup
function openPopup(type) {
    let popupnum = type;
    if (mdl.length) {
        fullpage_api.setAllowScrolling(false);
        fullpage_api.setKeyboardScrolling(false);
        $('.ecosystemClick').addClass('opac0')

        $('#popup' + popupnum).addClass('active')
        console.log()
    }
}

//slider journey
var boxMd = new Swiper(".boxSwiper", {
    effect: 'slide',
    slidesPerView: 1.1,
    // autoplay: {                         
    //     delay: 2000,  
    // },  
    spaceBetween: 0,
    grabCursor: true,
    loop: false,
    breakpoints: {
        // 768: {
        //     slidesPerView: 3.5
        // },
        1270: {
            slidesPerView: 2.6,
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
                // dragSize: dragSize
            },
        },
    }
});
boxMd.on('slideChange', function () {
    $('.kkiTimelineClick').addClass('opac0')
});

/* s: Get HEIGHT Device */
const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener("resize", appHeight)
appHeight()
/* e: Get HEIGHT Device */