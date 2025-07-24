$(document).ready(function () {
    //slider widget event
    var swiper = new Swiper(".-sEventWid", {
        direction: 'vertical',
        effect: "coverflow",
        grabCursor: false,
        loop: true,
        speed: 1000,
        centeredSlides: true,
        centeredSlidesBounds : true,
        slidesPerView: "auto",
        loopFillGroupWithBlank: true,
        coverflowEffect: {
            rotate: 1, // Slide rotate in degrees
            stretch: 283, // Stretch space between slides (in px)
            depth: 40, // Depth offset in px (slides translate in Z axis)
            modifier: 1, // Effect multipler
            scale: .95,
            slideShadows: false, // Enables slides shadows
        },
        autoplay: false,
        parallax: true,
        reverseDirection: true,
        breakpoints: {
            640: {
                coverflowEffect: {
                    rotate: 1,
                    modifier: 1,
                    stretch: 280,
                    depth: 40,
                }
            }
        }
    });
});