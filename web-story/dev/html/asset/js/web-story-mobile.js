$(document).ready(function () {
    /* web story slider */
    let story = $('#slide_story');
    $('.-js-slick-story').click(function () {
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