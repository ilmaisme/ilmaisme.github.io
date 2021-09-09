$(document).ready(function () {
    /* web story slider */
    let story = $('#slide_story');
    let storyLength = story.find('.storyItem').length;

    function getStoryLength() {
        //count story item to pass on slideToShow
        // console.log(storyLength);
        return storyLength;
    }

    function killStory() {
        setTimeout(function () {
            story.slick('unslick');
            $('#pop_story').modal('hide');
        }, 4000);
    }

    //initial progress bar
    let time = 4;
    let $bar,
        isPause,
        tick,
        percentTime;

    $bar = $('.storyProgress .progress');

    function resetProgressbar() {
        $bar.css({
            width: 0 + '%'
        });
        clearTimeout(tick);
    }

    story.slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        pauseOnFocus: true,
        appendDots: $('#dots_story')
    });

    $('.-js-slick-story').click(function () {
        resetProgressbar();
        let items = getStoryLength();

        function initializeDotsWidth() {
            let dots = $('#dots_story .slick-dots');
            let dotsItem = $('#dots_story .slick-dots li');
            let widthImage = $('.storyImg').width();
            dots.css({
                width: widthImage
            });
            dotsItem.css({
                width: 'calc((' + widthImage + 'px - (10 * ' + items + 'px)) /' + items + ')'
            });
            console.log('width image : ', widthImage);
            console.log('items : ', items);
        }

        //disabled slick-arrow
        $('.slick-prev').addClass('disabled');
        // autoplay and set slide position 
        setTimeout(function () {
            // story.slick('slickPlay');
            story.slick('setPosition');
            initializeDotsWidth();
        }, 300);

        //progress bar

        $('.storyImg').on({
            mouseenter: function () {
                isPause = true;
            },
            mouseleave: function () {
                isPause = false;
            }
        })

        function startProgressbar() {
            resetProgressbar();
            percentTime = 0;
            isPause = false;
            tick = setInterval(interval, 10);
        }

        function interval() {
            if (isPause === false) {
                percentTime += 1 / (time + 0.1);
                $bar.css({
                    width: percentTime + "%"
                });
                if (percentTime >= 100) {
                    story.slick('slickNext');
                    startProgressbar();
                    //close when last slide was hit
                    story.on('afterChange', function (event, slick, currentSlide) {
                        if (slick.$slides.length == currentSlide + slick.options.slidesToScroll) {
                            //console.log("Last slide");
                            //close when last slide was hit
                            setTimeout(function () {
                                // story.slick('unslick');
                                $('#pop_story').modal('hide');
                                resetProgressbar();
                            }, 3400);
                        }
                    })
                    if (storyLength == 1) {
                        // story.slick('unslick');
                        $('#pop_story').modal('hide');
                        resetProgressbar();
                    }
                } else if (percentTime < 100) {
                    $('.slick-arrow').click(function () {
                        percentTime += 1 / (time + 0.1);
                        $bar.css({
                            width: percentTime + "%"
                        });
                    })
                }
            }
        }

        startProgressbar();
    })

    // On after slide change
    story.on('afterChange', function (event, slick, currentSlide) {
        //disabled or enabled slick-arrow
        if (currentSlide !== 0) {
            $('.slick-prev').removeClass('disabled');
        } else if (currentSlide == 0) {
            $('.slick-prev').addClass('disabled');
        }
        //loader dots
        if (slick.$slides.length == currentSlide + slick.options.slidesToScroll) {
            $('.slick-next').addClass('disabled');
        } else {
            //enabled slick-arrow
            $('.slick-next').removeClass('disabled');
        }
    });
    $('.storyClose').click(function () {
        // destroy slide
        // story.slick('unslick');
        resetProgressbar();
    })
})