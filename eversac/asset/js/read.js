$(document).ready(function () {
    //slider product's images
    $('#prolist').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: true,
        asNavFor: '#pronav'
    });
    $('#pronav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '#prolist',
        dots: false,
        centerMode: false,
        infinite: true,
        focusOnSelect: true
    });
    //icon play toggle
    if ($('.videoPlay').is(':visible')) {
        $('.videoPlay').on('click', function () {
            $(this).find($('.icon-play')).toggle();
        });
    }

    //select product's color
    var pColor = $('#pColor').filter(':checked').val();
    $('.readColor__val').html(pColor)
    $(':radio[name="pColor"]').change(function () {
        var pColor = $(this).filter(':checked').val();
        $('.readColor__val').html(pColor)
    });

    //select product's number
    var n = 1;
    var n_place = $('#readNumb');
    disableSubstract(n)
    $('#add').on('click', function () {
        var n = parseInt(n_place.text(), 10);
        disableSubstract(n + 1)
        n_place.empty().append(n + 1);
    });
    $('#substract').on('click', function () {
        var n = parseInt(n_place.text(), 10);
        disableSubstract(n - 1)
        n_place.empty().append(Math.max(1, n - 1));
    });

    function disableSubstract(n) {
        if (n <= 1) {
            $('#substract').addClass('disable');
        } else {
            $('#substract').removeClass('disable');
        }
    }

    //click button Buy Now
    $('#buy').on('click', function () {
        $(this).parent().find($('.readBuy__list')).toggle();
    });
})