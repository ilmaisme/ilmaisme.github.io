$(document).ready(function () {
    //toggle popup read image
    $(".-bPrev").on("click", function () {
        $('.-pPrev').addClass('active');
    });
    //toggle popup read aloud
    $(".-bVideo").on("click", function () {
        $('.-pVideo').addClass('active');
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
});

//tab read books
function openTab(evt, cityName) {
    var i, tablinkcontent, tabbutton;
    tablinkcontent = document.getElementsByClassName("readTab__content");
    for (i = 0; i < tablinkcontent.length; i++) {
        tablinkcontent[i].style.display = "none";
    }
    tabbutton = document.getElementsByClassName("readTab__btn");
    for (i = 0; i < tabbutton.length; i++) {
        tabbutton[i].className = tabbutton[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

    //tab scroll mobile
    let act = $('.readTab__btn.active');
    if (act.length > 0) {
        let msp = act.position().left;
        $('.readTab__list').animate({
            scrollLeft: msp - 10
        });
    }
}

//tab books detail
function openTabdetails(evt, cityName) {
    var details = document.querySelector('.readDetail');
    var i, tablinkcontent, tabbutton;
    tablinkcontent = details.querySelectorAll(".tabcontent");
    for (i = 0; i < tablinkcontent.length; i++) {
        // tablinkcontent[i].style.display = "none";
        tablinkcontent[i].classList.remove("-active");
    }
    tabbutton = details.querySelectorAll(".tabbutton");
    for (i = 0; i < tabbutton.length; i++) {
        tabbutton[i].className = tabbutton[i].className.replace(" active", "");
    }
    // document.getElementById(cityName).style.display = "block";
    document.getElementById(cityName).classList.add("-active");
    evt.currentTarget.className += " active";
}