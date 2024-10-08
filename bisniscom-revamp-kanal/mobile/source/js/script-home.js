$(document).ready(function () {
    if ($('.-js-hl-big').length > 0) {
        // slider headline
        $('.-js-hl-big').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            swipe: true,
            infinite: true,
            // autoplay: 1,
        });
    }

    if ($('.-js-igrafis').length > 0) {
        // slider infografis
        $('.-js-igrafis').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            swipe: true,
            infinite: true,
            autoplay: 1,
        });
    }

    if ($('.-js-photo-slider').length > 0) {
        // slider photo
        $('.-js-photo-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            swipe: true,
            infinite: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 2000,
            accessibility: false,
            asNavFor: '.-js-photo-slider-nav',
        });
        $('.-js-photo-slider-nav').slick({
            dots: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            focusOnSelect: true,
            centerMode: false,
            speed: 1000,
            accessibility: false,
            asNavFor: '.-js-photo-slider',
        });
    }
})

//cta trigger active
function triggerActiveButton(el, target, parent) {
    let elemtarget = document.getElementsByClassName(target)[0],
        elemparent = document.getElementsByClassName(parent)[0],
        tgHeight = elemtarget.scrollHeight;

    elActive = el.classList.contains('-active');
    el.classList.toggle('-active');

    if (!!parent) {
        elemparent.classList.toggle('-active');
    }

    if (!!elActive) {
        elemtarget.style.maxHeight = 0;
    } else {
        elemtarget.style.maxHeight = tgHeight + 'px';
    }
}