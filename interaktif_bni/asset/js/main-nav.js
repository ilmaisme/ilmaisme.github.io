$(document).ready(function () {
    // 1. Animation Menu Digital
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationDigi'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '../asset/json/thumb-digi.json',
        name: 'myAnimation',
    });
    // 2. Animation Menu Green
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationGreen'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '../asset/json/thumb-green.json',
        name: 'myAnimation',
    });
    // 3. Animation Menu International
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationIntern'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '../asset/json/thumb-intern.json',
        name: 'myAnimation',
    });
});

//trigger menu
$('#menubtn').on('click', function () {
    $('.headerLogo').addClass('display-none');
    $('.bgColor__orange').removeClass('opac0');
    $('.bgColor__circle').removeClass('opac0');
    $('.cover').removeClass('opac0');
    $('.coverImg').removeClass('opac0');
    $('.menu').removeClass('opac0');
    $('.menuItem').addClass('active');
    setTimeout(function () {
        $('.menuItem').addClass('ease');
    }, 1400);
    $('.scroll-guide').addClass('opac0');
    $('.credit').addClass('opac0');
    $('.buttonCredit').removeClass('active');
    $('.digi').addClass('opac0');
    $('.green').addClass('opac0');
    $('.intern').addClass('opac0');
    $(this).addClass('opac0');
    fullpage_api.setAllowScrolling(false);
    fullpage_api.setKeyboardScrolling(false);
})

//trigger credit
$('#creditbtn').on('click', function () {
    $('.credit').removeClass('opac0');
    $('.buttonChampion').addClass('hide');
    $('.buttonClose').addClass('active');
    $('.buttonRestart').addClass('active');
    $('.creditTxt').addClass('active');
    $(this).removeClass('active');
    fullpage_api.setAllowScrolling(false);
    fullpage_api.setKeyboardScrolling(false);
})

//trigger close credit
$('#creditclose').on('click', function () {
    $('.credit').addClass('opac0');
    $('.buttonChampion').removeClass('hide');
    $('.buttonCredit').addClass('active');
    $('.creditTxt').removeClass('active');    
    $('.buttonRestart').removeClass('active');
    $(this).removeClass('active');
    fullpage_api.setAllowScrolling(true);
    fullpage_api.setKeyboardScrolling(true);
})