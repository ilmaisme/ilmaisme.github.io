$(document).ready(function () {
    $(window).scroll(function () {
        /* web story in fix header */
        if ($(this).scrollTop() > 175) {
            $("#icon_story").addClass("active");
        } else {
            $("#icon_story").removeClass("active");
        }
    })

    /* web story slider */
    let story = $('#slide_story');
    let storyLength = story.find('.storyItem').length;
    if (storyLength > 3) {
        story.slick({
            dots: true,
            arrows: true,
            infinite: true,
            slidesToShow: 3,
            centerMode: true,
            slidesToScroll: 1,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            pauseOnFocus: true,
            appendDots: $('#dots_story')
        });
    } else if (storyLength <= 3) {
        story.slick({
            dots: true,
            arrows: true,
            infinite: true,
            slidesToShow: 1,
            centerMode: true,
            slidesToScroll: 1,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            pauseOnFocus: true,
            appendDots: $('#dots_story')
        });
    }

    function hidePrevStory() {
        //hide prev story
        let storySlide = story.find('.slick-slide');
        storySlide.filter(function () {
            return $(this).attr('data-slick-index') < '0';
        }).addClass('is-hidden');
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
    
    hidePrevStory()
    
    $('.-js-slick-story').click(function () {
        let items = (storyLength - 1);
        let fullitems = (storyLength);
        resetProgressbar();

        function hideNextStory() {
            //hide next story
            let storySlide = story.find('.slick-slide');
            storySlide.filter(function () {
                return $(this).attr('data-slick-index') > items;
            }).addClass('is-hidden');
        }

        function initializeDotsWidth() {
            let dots = $('#dots_story .slick-dots');
            let dotsItem = $('#dots_story .slick-dots li');
            let widthImage = $('.storyImg').width();
            dots.css({
                width: widthImage
            });
            dotsItem.css({
                width: 'calc((' + widthImage + 'px - (10 * ' + fullitems + 'px)) /' + fullitems + ')'
            });
            // console.log('width image : ', widthImage);
            console.log('full items : ', fullitems);
            console.log('items : ', items);
        }

        //disabled slick-arrow
        $('.slick-prev').addClass('disabled');
        // autoplay and set slide position 
        setTimeout(function () {
            // story.slick('slickPlay');
            story.slick('setPosition');
            initializeDotsWidth()
        }, 300);

        hideNextStory()

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
                    // story.slick('slickNext');
                    startProgressbar();
                    //close when last slide was hit
                    story.on('afterChange', function (event, slick, currentSlide) {
                        if (slick.$slides.length == currentSlide + slick.options.slidesToScroll) {
                            // console.log("Last slide hit");
                            //close when last slide was hit
                            setTimeout(function () {
                                // story.slick('unslick');
                                $('#pop_story').modal('hide');
                                resetProgressbar();
                            }, 3800);
                        }
                    })

                    if (storyLength == 1) {
                        // story.slick('unslick');
                        $('#pop_story').modal('hide');
                        resetProgressbar();
                    }
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