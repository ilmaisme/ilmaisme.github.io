$(document).ready(function () {
    /* web story slider */
    let story = $('#slide_story');

    function getStoryLength() {
        //count story item to pass on slideToShow
        let storyLength = story.find('.storyItem').length;
        // console.log(storyLength);
        return storyLength;
    }
    $('.-js-slick-story').click(function () {
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
        //disabled slick-arrow
        $('.slick-prev').addClass('disabled');
        // autoplay and set slide position 
        setTimeout(function () {
            // story.slick('slickPlay');
            story.slick('setPosition');
            initializeDotsWidth();
        }, 300);
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
        $('.slick-dots .slick-active').addClass('loaded');
        if (slick.$slides.length == currentSlide + slick.options.slidesToScroll) {
            $('.slick-next').addClass('disabled');
            //console.log("Last slide");
            //close when last slide was hit
            setTimeout(function () {
                story.slick('unslick');
                $('#pop_story').css("display", "none");
                $('#pop_story').modal('hide');
            }, 3100);
        } else {
            //enabled slick-arrow
            $('.slick-next').removeClass('disabled');
        }
        var next = story.find('[data-slick-index="' + (currentSlide + 1) + '"]');
        var prev = story.find('[data-slick-index="' + (currentSlide - 1) + '"]');
        console.log(next, prev);
    });
    $('.storyClose').click(function () {
        // destroy slide
        story.slick('unslick');
    })
})