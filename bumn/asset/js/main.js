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
        window.addEventListener("load", function () { window.loaded = !0 }), function o() {
            window.loaded ? logLoaded() : window.setTimeout(o, 1000)
        }()
    }