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
})

//cta trigger active
let elemtarget = document.getElementsByClassName('streamBlock')[0],
    tgHeight = elemtarget.scrollHeight;
if (!!elemtarget) {
    elemtarget.style.maxHeight = tgHeight + 'px';
}

function triggerActiveButton(el, target, parent) {
    elActive = el.classList.contains('-active');
    el.classList.toggle('-active');
    let elemparent = el.parentNode.parentNode.parentNode;
    if (!!parent) {
        elemparent.classList.toggle('-active');
    }
    if (!!target) {
        // console.log(tgHeight)
        elemtarget.style.maxHeight = elemtarget.style.maxHeight ? null : tgHeight + 'px';
    }
}