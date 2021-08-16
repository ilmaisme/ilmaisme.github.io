    //parallax
    function castParallax() {

        var opThresh = 350;
        var opFactor = 750;

        window.addEventListener("scroll", function (event) {

            var top = this.pageYOffset;

            var layers = document.getElementsByClassName("parallaxLayerDesk");
            var layer, speed, yPos;
            for (var i = 0; i < layers.length; i++) {
                layer = layers[i];
                speed = layer.getAttribute('data-speed');
                var yPos = -(top * speed / 100);
                layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

            }
        });
    }

    document.body.onload = castParallax();

    //animation
    AOS.init({
        duration: 2000,
    })

    //scroll to top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    //popup
    /*
    const modalTriggers = document.querySelectorAll('.-js-popupTrigger')
    const bodyBlackout = document.querySelector('.popupOverlay')
    const body = document.body

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const {
                popupTrigger
            } = trigger.dataset
            const popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`)

            popupModal.classList.add('is-visible')
            bodyBlackout.classList.add('is-blacked-out')
            body.classList.add('is-overflow-hidden')  

            popupModal.querySelector('.popupClose').addEventListener('click', () => {
                closeModal()
            })

            bodyBlackout.addEventListener('click', () => {
                closeModal()
            })

            function closeModal() {
                popupModal.classList.remove('is-visible')
                bodyBlackout.classList.remove('is-blacked-out')
                body.classList.remove('is-overflow-hidden')                
            }
        })
    })

    */

    //cursor out
    const itemTriggers = document.querySelectorAll('.holdingItem')
    const itemCursorBg = document.querySelector('.section6Cursor__wrapper')
    const itemCursor = document.querySelector('.cursor')
    if (!!itemCursor) {
        itemTriggers.forEach((trig) => {
            trig.addEventListener('click', () => {
                itemCursor.classList.add('hide')
                itemCursorBg.classList.add('out')
                //console.log('holding click');
            })
        })
    }

    //preloader
    function logLoaded() {
        preload.style.opacity = '0'
        preload.addEventListener('transitionend', () => preload.remove());
    }
    const preload = document.querySelector('.preloader')
    if (!!preload) {
        window.addEventListener("load", function () {
                window.loaded = !0
            }),
            function o() {
                window.loaded ? logLoaded() : window.setTimeout(o, 1000)
            }()
    }

    //popup ver2 with slick
    $(document).ready(function () {
        //slider_simulation
        $('#holding-nav').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            adaptiveHeight: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    adaptiveHeight: true
                }
            }]
        });


        function popupActive() {
            $(".popupOverlay").addClass('is-blacked-out');
            $("body").addClass('is-overflow-hidden');
        }

        function popupDisable() {
            $(".popupOverlay").removeClass('is-blacked-out');
            $("body").removeClass('is-overflow-hidden');
            $(".popup").removeClass('is-visible');
        }

        function simulationActive() {
            $(".holdingListitem").removeClass('active');
            $("#holding-nav .slick-next").css({
                'opacity': '1'
            });
            $(".slick-current .popup").addClass('is-visible');
            popupActive()
        }

        $('#holding-nav').on("afterChange", function () {
            var currentIndex = $('.holdingPop .slick-current').attr('data-slick-index');
            if (currentIndex == 0) {
                simulationActive();
            } else if (currentIndex == 1) {
                simulationActive();
            } else if (currentIndex == 2) {
                simulationActive();
            } else if (currentIndex == 3) {
                simulationActive();
            } else if (currentIndex == 4) {
                simulationActive();
            } else if (currentIndex == 5) {
                simulationActive();
            } else if (currentIndex == 6) {
                simulationActive();
            } else if (currentIndex == 7) {
                simulationActive();
            } else if (currentIndex == 8) {
                simulationActive();
            } else if (currentIndex == 9) {
                simulationActive();
            } else if (currentIndex == 10) {
                simulationActive();
            } else if (currentIndex == 11) {
                simulationActive();
            } else if (currentIndex == 12) {
                simulationActive();
            } else if (currentIndex == 13) {
                simulationActive();
            } else {}
        });

        $('.holdingListitem').click(function (e) {
            e.preventDefault();
            $(".holdingPop").css({
                'opacity': '1'
            });
            $(".holdingPop").css({
                'height': 'auto'
            });
            $(".slick-arrow").addClass('is-active');
            simulationActive();
        });
        $('.popupClose').click(function (e) {
            e.preventDefault();
            $(".slick-arrow").removeClass('is-active');
            popupDisable()
        });
        //Bind to click event to change active slide (slider-for) whenever an img is click in slider-nav
        $('.holdingItem__btn1').click(function (e) {
            e.preventDefault();
            $("#holding-nav").slick('slickGoTo', 0, true);
            $(".holdingListitem").removeClass('active');
        });
        $('.holdingItem__btn2').click(function (e) {
            e.preventDefault();
            $("#holding-nav").slick('slickGoTo', 1, true);
            $(".holdingListitem").removeClass('active');
        });
        $('.holdingItem__btn3').click(function (e) {
            e.preventDefault();
            $("#holding-nav").slick('slickGoTo', 2, true);
            $(".holdingListitem").removeClass('active');
        });
        $('.holdingItem__btn4').click(function (e) {
            e.preventDefault();
            $("#holding-nav").slick('slickGoTo', 3, true);
            $(".holdingListitem").removeClass('active');
        });
        $('.holdingItem__btn5').click(function (e) {
            e.preventDefault();
            $("#holding-nav").slick('slickGoTo', 4, true);
            $(".holdingListitem").removeClass('active');
        });
        $('.holdingItem__btn6').click(function (e) {
            e.preventDefault();
            $("#holding-nav").slick('slickGoTo', 5, true);
            $(".holdingListitem").removeClass('active');
        });
        $('.holdingItem__btn7').click(function (e) {
            e.preventDefault();
            $("#holding-nav").slick('slickGoTo', 6, true);
            $(".holdingListitem").removeClass('active');
        });
        $('.holdingItem__btn8').click(function (e) {
            e.preventDefault();
            $("#holding-nav").slick('slickGoTo', 7, true);
            $(".holdingListitem").removeClass('active');
        });
        $('.holdingItem__btn9').click(function (e) {
            e.preventDefault();
            $("#holding-nav").slick('slickGoTo', 8, true);
            $(".holdingListitem").removeClass('active');
        });
        $('.holdingItem__btn10').click(function (e) {
            e.preventDefault();
            $("#holding-nav").slick('slickGoTo', 9, true);
            $(".holdingListitem").removeClass('active');
        });
        $('.holdingItem__btn11').click(function (e) {
            e.preventDefault();
            $("#holding-nav").slick('slickGoTo', 10, true);
            $(".holdingListitem").removeClass('active');
        });
        $('.holdingItem__btn12').click(function (e) {
            e.preventDefault();
            $("#holding-nav").slick('slickGoTo', 11, true);
            $(".holdingListitem").removeClass('active');
        });
        $('.holdingItem__btn13').click(function (e) {
            e.preventDefault();
            $("#holding-nav").slick('slickGoTo', 12, true);
            $(".holdingListitem").removeClass('active');
        });
        $('.holdingItem__btn14').click(function (e) {
            e.preventDefault();
            $("#holding-nav").slick('slickGoTo', 13, true);
            $(".holdingListitem").removeClass('active');
        });
    });