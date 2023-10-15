$(document).ready(function () {
    //initialize zoom image
    $('.-zoom').each(function () {
        var src = $(this).find('img').attr('data-zoom');
        $(this).zoom({
            url: src,
            on: 'mouseover',
            duration: 50
        });
    });
});

//select product's variant/*
$(':radio[name="type"]').change(function () {
    var type = $(this).filter(':checked').val();

    //go to slide with value
    let ractive = $('.slick-slide[value=' + type + ']:not(.slick-cloned)').eq(0);
    let nractive = ractive.attr('data-slick-index');
    $(".detailImageNav").slick('slickGoTo', nractive, true);
});

//tab product's detail
function openTabdetails(el, evt, cityName) {
    var details = document.querySelector('.detailContent');
    var i, tablinkcontent, tabbutton;
    tablinkcontent = details.querySelectorAll(".tabcontent");
    for (i = 0; i < tablinkcontent.length; i++) {
        // tablinkcontent[i].style.display = "none";
        tablinkcontent[i].classList.remove("active");
    }
    tabbuttonparent = el.parentNode;
    tabbutton = details.querySelectorAll(".tabItem");
    for (i = 0; i < tabbutton.length; i++) {
        tabbutton[i].className = tabbutton[i].className.replace(" active", "");
    }
    // document.getElementById(cityName).style.display = "block";
    document.getElementById(cityName).classList.add("active");
    //evt.currentTarget.className += " active";
    tabbuttonparent.className += " active";
}

//slider product's images
slickImg()

function slickImg() {
    $('.detailImageList').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: true,
        asNavFor: '.detailImageNav'
    });
    $('.detailImageNav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.detailImageList',
        arrows: true,
        dots: false,
        centerMode: false,
        infinite: true,
        focusOnSelect: true
    });
    //hide arrow if product img < 5
    if ($('.detailImage--small').length > 5) {
        $('.detailImageNav .slick-arrow').addClass('visible')
    } else {
        $('.detailImageNav .slick-arrow').addClass('hidden')
    }
}

//slider product's review @popup
function slickPopupRev() {
    $('.reviewPopupSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        infinite: true,
        centerMode: true
    });
}

function navSlickPopupRev(idx) {
    $('.reviewPopupSlider').slick('slickGoTo', idx, true);
}

//cart position on device
updateCartPos()
$(window).on('resize', function () {
    updateCartPos()
});

function updateCartPos() {
    if (viewport().width >= 1230) {
        /* move cta cart position in desktop */
        $('.summaryCtaWrap').appendTo('#cartDesk');
    } else {
        /* move cta cart position in mobile */
        $('.summaryCtaWrap').appendTo('#cartMob');
    }
}