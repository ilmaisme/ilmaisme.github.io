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
            dots.css({width: widthImage});
            dotsItem.css({
                width: 'calc(('+widthImage+'px - (10 * ' + items + 'px)) /' + items + ')'
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
            pauseOnHover: false,
            pauseOnFocus: false,
            appendDots: $('#dots_story')
        });
        // autoplay and set slide position 
        setTimeout(function () {
            story.slick('slickPlay');
            story.slick('setPosition');
            initializeDotsWidth();
        }, 300);
    })
    // On before slide change
    story.on('afterChange', function (event, slick, currentSlide) {
        //loader dots
        $('.slick-dots .slick-active').addClass('loaded');
        if (slick.$slides.length == currentSlide + slick.options.slidesToScroll) {
            //console.log("Last slide");
            //close when last slide was hit
            setTimeout(function () {
                story.slick('unslick');
                $('#pop_story').css("display", "none");
                $('#pop_story').modal('hide');
            }, 3100);
        }
    });
    $('.storyClose').click(function () {
        // destroy slide
        story.slick('unslick');
    })
})