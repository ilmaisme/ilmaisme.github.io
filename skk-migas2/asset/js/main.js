var is_mobile = false;
$(document).ready(function () {

    if ($('#some-element').css('display') == 'none') {
        is_mobile = true;
    }

    if (is_mobile == true) {
        // mobile
        console.log('mobile true')
    } else {
        // desktop
        console.log('desktop true')
    }
})