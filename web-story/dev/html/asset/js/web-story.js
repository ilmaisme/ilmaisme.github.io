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
        // console.log(storyLength);
        if (storyLength > 3) {
            item = (storyLength - 1)
        } else if (storyLength = 3) {
            item = 3
        } else if (storyLength <= 2) {
            item = 1
        }
        return item;
    }

    function hidePrevStory() {
        //hide prev story
        let storySlide = story.find('.slick-slide');
        storySlide.filter(function () {
            return $(this).attr('data-slick-index') < '0';
        }).addClass('is-hidden');
    }

    function appendSingleDot() {
        $("#dots_story").append('<ul class = "slick-dots" role = "tablist"\
        style = "display: block;"> <li class = "slick-active"\
        role = "presentation"\
        > <button type = "button"\
        role = "tab"\
        id = "slick-slide-control00"\
        aria-controls = "slick-slide00"\
        aria-label = "1"\
        tabindex = "0"\
        aria-selected = "true" ></button></li ></ul>')
    }

    $('.-js-slick-story').click(function () {
        let items = getStoryLength();
        let fullitems = items + 1;

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
            dots.css({width: widthImage});
            dotsItem.css({
                width: 'calc(('+widthImage+'px - (10 * ' + fullitems + 'px)) /' + fullitems + ')'
            });
            console.log('width image : ', widthImage);
            console.log('full items : ', fullitems);
            console.log('items : ', items);
        }

        story.slick({
            dots: true,
            arrows: true,
            infinite: true,
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
            initializeDotsWidth()
        }, 300);

        hideNextStory()

    })

    story.on('init', function (event, slick, currentSlide, nextSlide) {
        hidePrevStory()
    });
    // story.on('afterChange', function (event, slick, currentSlide) {      
    //     $('.slick-arrow').click(function () {
    //         // animation dura 0
    //         // $('.slick-dots .slick-active').addClass('next');
    //     })
    // });
    // On after slide change
    story.on('afterChange', function (event, slick, currentSlide) {
        //loader dots
        $('.slick-dots .slick-active').addClass('loaded');

        if (slick.$slides.length == currentSlide + slick.options.slidesToScroll) {
            // if ($('.slick-active').last()) {
            //console.log("Last slide");
            //close when last slide was hit
            setTimeout(function () {
                story.slick('unslick');
                $('#pop_story').css("display", "none");
                $('#pop_story').modal('hide');
            }, 3100);
            // story.find('.slick-next').css("display", "none");
        } else {
            // story.find('.slick-next').removeAttr();
        }
    });
    $('.storyClose').click(function () {
        // destroy slide
        story.slick('unslick');
    })
})