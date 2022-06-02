$(document).ready(function () {
    $('#header').removeClass('load');
    /* hover submenu */
    $('#navOpen').hover(
        function () {
            $('#hBottom').addClass('active');
        }
    );
    $('#hBottom').mouseleave(
        function () {
            $(this).removeClass('active');
        }
    );
    $('.navSub__item.open').hover(
        function () {
            $('#navSub').addClass('active');
        }
    );
    $('.navSub__item').mouseleave(
        function () {
            $('#navSub').removeClass('active');
        }
    )
    /* mobile open menu */
    $('#menuToggle').click(function () {
        if ($(this).prop('checked')) {
            $('.navWrap').addClass('active');
            $('.navList').addClass('show');
            $('.searchbox').addClass('active');
        } else {
            $('.navWrap').removeClass('active');
            $('.navList').removeClass('show');
            $('.searchbox').removeClass('active');
        }
    })

    // device detection
    let isMobile = window.matchMedia("only screen and (max-width: 1102px)").matches;

    if (isMobile) {
        //mobile
        /* move submenu position in mobile */
        $('#hBottom').appendTo('#navMob');
    } else {
        //desktop
        console.log('desktop')
    }

});