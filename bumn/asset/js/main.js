    //parallax
    function castParallax() {

        var opThresh = 350;
        var opFactor = 750;

        window.addEventListener("scroll", function (event) {

            var top = this.pageYOffset;

            var layers = document.getElementsByClassName("parallaxLayer");
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

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const {
                popupTrigger
            } = trigger.dataset
            const popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`)

            popupModal.classList.add('is-visible')
            bodyBlackout.classList.add('is-blacked-out')

            popupModal.querySelector('.popupClose').addEventListener('click', () => {
                closeModal()
            })

            bodyBlackout.addEventListener('click', () => {
                closeModal()
            })

            function closeModal() {
                popupModal.classList.remove('is-visible')
                bodyBlackout.classList.remove('is-blacked-out')
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