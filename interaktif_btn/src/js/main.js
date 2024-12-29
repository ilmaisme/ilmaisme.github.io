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
    // 2. Animation Pie 1
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('panel-anim1'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/kpr-subsidi-2020.json',
        name: 'myAnimation',
    });
    // 3. Animation Pie 2
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('panel-anim2'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/kpr-subsidi-2021.json',
        name: 'myAnimation',
    });
    // 4. Animation Pie 3
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('panel-anim3'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/kpr-subsidi-2022.json',
        name: 'myAnimation',
    });
    // 5. Animation Pie 4
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('panel-anim4'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/kpr-subsidi-2023.json',
        name: 'myAnimation',
    });
    // 6. Animation Strategy 0
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('panel-strat-anim0'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/strategi-0.json',
        name: 'myAnimation',
    });
    // 7. Animation Strategy 2
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('panel-strat-anim2'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/strategi-2.json',
        name: 'myAnimation',
    });
    // 8. Animation Strategy 3
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('panel-strat-anim3'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/strategi-3.json',
        name: 'myAnimation',
    });
    // 9. Animation Strategy 4
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('panel-strat-anim4'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/strategi-4.json',
        name: 'myAnimation',
    });
    // 10. Animation Bar Chart 1
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('bar-anim1'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/grafik-perkembangan-aset.json',
        name: 'myAnimation',
    });
    // 11. Animation Bar Chart 2
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('bar-anim2'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/grafik-perkembangan-laba.json',
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