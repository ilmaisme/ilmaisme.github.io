$(document).ready(function () {
    //tab scroll mobile
    let act = $('.profileNav__item.active');
    if (act.length > 0) {
        let msp = act.position().left - 15;
        $('.profileNav').animate({
            scrollLeft: msp
        });
    }
})