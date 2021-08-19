$(document).ready(function () {
    if ($(window).load(function () {
            // $("#preloader").fadeOut(500, function () {
            //     $(this).remove();
            // })
        }))


        if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $.jInvertScroll(['.scroll'], // an array containing the selector(s) for the elements you want to animate
                {
                    //height: 40000, // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
                    // height: 'auto',
                    onScroll: function (percent) { //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
                        console.log(percent);

                    }
                });
        } else {

            $.jInvertScroll(['.scroll'], // an array containing the selector(s) for the elements you want to animate
                {
                    //height: 40000, // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
                    // height: 'auto',
                    onScroll: function (percent) { //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
                        console.log(percent);

                        var theta = $(window).scrollTop() % Math.PI;
                        theta = theta - 0.009;
                        $('.mobil-roda img').css({
                            transform: 'rotate(' + theta + 'rad)'
                        });
                        if (percent < 0.1509) {
                            $('#item1').addClass('active');
                            $('#item2').removeClass('active');
                        }
                        if (percent > 0.1509) {
                            $('#item2').addClass('active');
                            $('#item1').removeClass('active');
                        }
                        if (percent < 0.3396) {
                            $('#item3').removeClass('active');
                        }
                        if (percent > 0.3396) {
                            $('#item3').addClass('active');
                            $('#item1').removeClass('active');
                        }
                        if (percent < 0.5283) {
                            $('#item4').removeClass('active');
                        }
                        if (percent > 0.5283) {
                            $('#item4').addClass('active');
                            $('#item1').removeClass('active');
                        }
                        if (percent < 0.7170) {
                            $('#item5').removeClass('active');
                        }
                        if (percent > 0.7170) {
                            $('#item5').addClass('active');
                            $('#item1').removeClass('active');
                        }
                        if (percent < 0.9057) {
                            $('#item6').removeClass('active');
                        }
                        if (percent > 0.9057) {
                            $('#item6').addClass('active');
                            $('#item1').removeClass('active');
                            $('#item2').removeClass('active');
                            $('#item3').removeClass('active');
                            $('#item4').removeClass('active');
                            $('#item5').removeClass('active');
                        }
                    }
                });
        }



});