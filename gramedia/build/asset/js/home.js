$(document).ready(function () {

    //slider new release
    $('.-supdates').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1700,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 912,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    //slider brands
    $('.-sbrands').slick({
        focusOnSelect: true,
        pauseOnHover: false,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 700,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear'
    });

    //slider testimonial
    $('.-stesti').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 2000,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1102,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

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

    if (!!window.IntersectionObserver) {
        let observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        //console.log(entry);
                        swiper.autoplay.start()
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                rootMargin: "0px 0px -200px 0px"
            }
        );

        observer.observe(document.querySelector(".-sEventWid"));
    }
});