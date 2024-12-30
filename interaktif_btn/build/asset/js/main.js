//Animation Pie 1
var param2020 = {
    container: document.getElementById('panel-anim1'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'asset/json/kpr-subsidi-2020.json',
    name: 'myAnimation',
};

var play2020 = bodymovin.loadAnimation(param2020)
function startplay2020() {
    play2020.play()
}
//Animation Pie 2
var param2021 = {
    container: document.getElementById('panel-anim2'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'asset/json/kpr-subsidi-2021.json',
    name: 'myAnimation',
};

var play2021 = bodymovin.loadAnimation(param2021)
function startplay2021() {
    play2021.play()
}
//Animation Pie 3
var param2022 = {
    container: document.getElementById('panel-anim3'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'asset/json/kpr-subsidi-2022.json',
    name: 'myAnimation',
};

var play2022 = bodymovin.loadAnimation(param2022)
function startplay2022() {
    play2022.play()
}
//Animation Pie 4
var param2023 = {
    container: document.getElementById('panel-anim4'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'asset/json/kpr-subsidi-2023.json',
    name: 'myAnimation',
};

var play2023 = bodymovin.loadAnimation(param2023)
function startplay2023() {
    play2023.play()
}

// Animation Bar Chart 1
var bar1 = {
    container: document.getElementById('bar-anim1'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'asset/json/grafik-perkembangan-aset.json',
    name: 'myAnimation',
};

var playbar1 = bodymovin.loadAnimation(bar1)
function startplaybar1() {
    playbar1.play()
}
// Animation Bar Chart 2
var bar2 = {
    container: document.getElementById('bar-anim2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'asset/json/grafik-perkembangan-laba.json',
    name: 'myAnimation',
};

var playbar2 = bodymovin.loadAnimation(bar2)
function startplaybar2() {
    playbar2.play()
}


$(document).ready(function () {
    $('.base-layer').addClass('active');

    // Animation Intro
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('introAnim'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/husni-ismail.json',
        name: 'myAnimation',
    });

    // Animation Strategy 0
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('panel-strat-anim0'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/strategi-0.json',
        name: 'myAnimation',
    });
    // Animation Strategy 1
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('panel-strat-anim1'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/strategi-1.json',
        name: 'myAnimation',
    });
    // Animation Strategy 2
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('panel-strat-anim2'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/strategi-2.json',
        name: 'myAnimation',
    });
    // Animation Strategy 3
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('panel-strat-anim3'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/strategi-3.json',
        name: 'myAnimation',
    });
    // Animation Strategy 4
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('panel-strat-anim4'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/strategi-4.json',
        name: 'myAnimation',
    });
    // Animation Construction
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('construction-anim'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/construction.json',
        name: 'myAnimation',
    });
})

//close modal popup 
let mdl = $('.popup'),
    vid = $('#videocov')[0]
$('.buttonClose').on('click', function (e) {
    closePopup()
})

$('.popup').on("click", function () {
    closePopup()
})

$('.popupWrap').on('click', function (e) {
    e.stopPropagation();
})

function closePopup() {
    if (mdl.length) {
        mdl.removeClass('active')
    }
    vid.pause();
}

//open modal popup
function openPopup(type) {
    let popupnum = type;
    if (mdl.length) {
        $('#popup' + popupnum).addClass('active')
    }
    vid.play();
}

function addActive(target, disactive) {
    $(target).addClass('active')
    if (disactive) {
        $(disactive).removeClass('active')
    }
}

function addActiveFunction(target, disactive, startplaybar) {
    $(target).addClass('active')
    if (disactive) {
        $(disactive).removeClass('active')
    }
    if (startplaybar == 1) {
        startplaybar1()
        console.log("bar 1")
    } else if (startplaybar == 2){
        startplaybar2()
        console.log("bar 2")
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