$(document).ready(function () {
    if ($(window).load(function () {
            $("#preloader").fadeOut(500, function () {
                $(this).remove();
            })
        }))

        if ($(window).width() < 960) {
            $.jInvertScroll(['.scroll'], // an array containing the selector(s) for the elements you want to animate
                {
                    //height: 40000, // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
                    // height: 'auto',
                    onScroll: function (percent) { //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
                        //console.log(percent);

                    }
                });
        } else {

            $.jInvertScroll(['.scroll'], // an array containing the selector(s) for the elements you want to animate
                {
                    //height: 40000, // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
                    // height: 'auto',
                    onScroll: function (percent) { //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
                        console.log(percent);

                        // var theta = $(window).scrollTop() % Math.PI;
                        // theta = theta - 0.009;
                        // $('.mobil-roda img').css({
                        //     transform: 'rotate(' + theta + 'rad)'
                        // });
                        if (percent < 0.0955) {
                            $('#item1').addClass('active');
                            $('#item2').removeClass('active');
                            $('.underline1').addClass('active');
                            $('.underline2').removeClass('active');
                        }
                        if (percent > 0.0955) {
                            $('#item2').addClass('active');
                            $('.underline2').addClass('active');
                            $('.underline1').removeClass('active');
                        }
                        if (percent < 0.2548) {
                            $('#item3').removeClass('active');
                            $('.underline3').removeClass('active');
                        }
                        if (percent > 0.2548) {
                            $('#item3').addClass('active');
                            $('.underline3').addClass('active');
                            $('.underline2').removeClass('active');
                        }
                        if (percent < 0.4459) {
                            $('#item4').removeClass('active');
                            $('.underline4').removeClass('active');
                        }
                        if (percent > 0.4459) {
                            $('#item4').addClass('active');
                            $('.underline4').addClass('active');
                            $('.underline3').removeClass('active');
                        }
                        if (percent < 0.6051) {
                            $('#item5').removeClass('active');
                            $('.underline5').removeClass('active');
                        }
                        if (percent > 0.6051) {
                            $('#item5').addClass('active');
                            $('.underline5').addClass('active');
                            $('.underline4').removeClass('active');
                        }
                        if (percent < 0.7643) {
                            $('#item6').removeClass('active');
                            $('.underline6').removeClass('active');
                        }
                        if (percent > 0.7643) {
                            $('#item6').addClass('active');
                            $('.underline6').addClass('active');
                            $('.underline5').removeClass('active');
                        }
                        if (percent < 0.9682) {
                            $('#item7').removeClass('active');
                            $('.underline7').removeClass('active');
                        }
                        if (percent > 0.9987) {
                            $('#item7').addClass('active');
                            $('#item1').removeClass('active');
                            $('#item2').removeClass('active');
                            $('#item3').removeClass('active');
                            $('#item4').removeClass('active');
                            $('#item5').removeClass('active');
                            $('#item6').removeClass('active');
                            $('.underline7').addClass('active');
                            $('.underline1').removeClass('active');
                            $('.underline2').removeClass('active');
                            $('.underline3').removeClass('active');
                            $('.underline4').removeClass('active');
                            $('.underline5').removeClass('active');
                            $('.underline6').removeClass('active');
                        }
                    }
                });
        }


});