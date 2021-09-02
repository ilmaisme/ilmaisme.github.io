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

    function getStoryLength() {
        //count story item to pass on slideToShow
        let storyLength = story.find('.storyItem').length;
        //console.log(storyLength);
        item = (storyLength - 1);
        return item;
    }
    $('.-js-slick-story').click(function () {
        let items = getStoryLength();
        story.slick({
            dots: true,
            arrows: true,
            infinite: true,
            // slidesToShow: 4,
            slidesToShow: items,
            centerMode: true,
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