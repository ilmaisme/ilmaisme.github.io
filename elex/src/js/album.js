//album slider
$(document).ready(function () {
    var swiper = new Swiper(".albumNav", {
        loop: true,
        speed: 1000,
        slidesPerView: 3,
        spaceBetween: 20,
        watchSlidesProgress: true
    });
    var swiper2 = new Swiper(".albumBig", {
        loop: true,
        effect: "fade",
        thumbs: {
            swiper: swiper,
        },
        speed: 1000,
        navigation: {
            nextEl: ".albumArrow__next",
            prevEl: ".albumArrow__prev"
        }
    });
});

'use strict';

/* global jQuery, PhotoSwipe, PhotoSwipeUI_Default, console */

(function ($) {

    // Init empty gallery array
    var container = [];

    // Loop over gallery items and push it to the array
    $('#album').find('figure').each(function () {
        var $link = $(this).find('a'),
            item = {
                src: $link.attr('href'),
                w: $link.data('width'),
                h: $link.data('height'),
                title: $link.data('caption')
            };
        container.push(item);
    });

    // Define click event on gallery item
    $('a.albumSource').click(function (event) {

        // Prevent location change
        event.preventDefault();

        // Define object and gallery options
        var $pswp = $('.pswp')[0],
            options = {
                index: $(this).parent('figure').parent().index(),
                bgOpacity: 0.8,
                captionEl: true,
                tapToClose: true,
                shareEl: false,
                zoomEl: false,
                counterEl: false,
                fullscreenEl: false,
            };

        // Initialize PhotoSwipe
        var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, container, options);
        gallery.init();
    });

}(jQuery));