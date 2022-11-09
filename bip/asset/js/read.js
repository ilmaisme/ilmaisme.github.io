$(document).ready(function () {
    //toggle popup read image
    $(".-bRimg").on("click", function () {
        $('.-pRimg').addClass('active');
    });
    //toggle popup read aloud
    $(".-bRaloud").on("click", function () {
        $('.-pRaloud').addClass('active');
    });
    //toggle popup report comment
    $(".-bReport").on("click", function () {
        $('.-pReport').addClass('active');
    });
    $(".-btnCl").on("click", function () {
        closePopup()
    });
    $('.popup').on("click", function () {
        closePopup()
    })
    $('.popupBox').on('click', function (e) {
        e.stopPropagation();
    })

    function closePopup() {
        $('.popup').removeClass('active');
    }

    //button buy from
    $('#buy').on('click', function (e) {
        e.stopPropagation();
        $(this).siblings('button').toggleClass('active')
    });
    $('#buy').hover(function () {
        $(this).siblings('button').toggleClass('hover')
    });
    $(document).on("click", function () {
        $('#buy').prop('checked', false);
        $('#buy').siblings('button').removeClass('active')
    });

    //more synopsis
    $('.-more').click(function () {
        $('.readSinopsis__content').toggleClass('show');
        if ($(this).html() == 'Baca Selanjutnya<span class="icon-chevron"></span>') {
            $(this).html('Baca Lebih Sedikit<span class="icon-chevron"></span>')
        } else {
            $(this).html('Baca Selanjutnya<span class="icon-chevron"></span>')
        }
    });

    //slider read image
    $('.-simage').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
    });
});

//tab read books
function openTab(evt, cityName) {
    var i, tablinkcontent, tabbutton;
    tablinkcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tablinkcontent.length; i++) {
        tablinkcontent[i].style.display = "none";
    }
    tabbutton = document.getElementsByClassName("tabbutton");
    for (i = 0; i < tabbutton.length; i++) {
        tabbutton[i].className = tabbutton[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

    //tab scroll mobile
    let act = $('.listTab__label.active');
    if (act.length > 0) {
        let msp = act.position().left;
        $('.listTab__list').animate({
            scrollLeft: msp
        });
    }
}