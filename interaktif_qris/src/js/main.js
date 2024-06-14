$(window).on('load', function () {
    setTimeout(function () {
        $('.preloader').addClass("done");
        $(".buttonCover").addClass("enable");
        // fullpage_api.setAllowScrolling(true);
        // fullpage_api.setKeyboardScrolling(true);
    }, 3000);
    //console.log('loaded');
})

$(document).ready(function () {
    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        //navigation: true,
        anchors: ['intro', 'cart', 'cashier', 'scan', 'success'],
        lockAnchors: true,
        //scrollOverflow: true,

        onLeave: function (origin, destination, direction) {
            var leavingSection = this;

            if (origin.index == 0 && direction == 'down') {
                $(".intro").velocity({
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
                $(".cartTitle").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.cart').addClass('active')
                    },
                    complete: function () {}
                });
                $(".cartCompo").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
                $(".storeCompo").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
                fullpage_api.setAllowScrolling(false, 'down');
                fullpage_api.setKeyboardScrolling(false, 'down');
            }
            if (origin.index == 1 && direction == 'up') {
                $(".intro").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
                $(".cartTitle").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.cart').removeClass('active')
                    },
                    complete: function () {}
                });
                $(".cartCompo").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
                $(".storeCompo").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
                fullpage_api.setAllowScrolling(true, 'down');
                fullpage_api.setKeyboardScrolling(true, 'down');
            }
            if (origin.index == 2 && direction == 'up') {
                $(".cartCompo").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
                $(".cartTitle").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
                $(".cashierImg").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.cart').addClass('active')
                        $('.cashier').removeClass('active')
                    },
                    complete: function () {}
                });
                $(".cashierCompo").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
            }
            if (origin.index == 4 && direction == 'down') {
                fullpage_api.setAllowScrolling(true, 'up');
                fullpage_api.setKeyboardScrolling(true, 'up');
                fullpage_api.setAllowScrolling(false, 'down');
                fullpage_api.setKeyboardScrolling(false, 'down');
                $(".journeyTitle").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.journey').addClass('active')
                    },
                    complete: function () {}
                });
                $(".journeyButton").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
                $(".success").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
            }
            if (origin.index == 5 && direction == 'up') {
                fullpage_api.setAllowScrolling(false, 'up');
                fullpage_api.setKeyboardScrolling(false, 'up');
                fullpage_api.setAllowScrolling(true, 'down');
                fullpage_api.setKeyboardScrolling(true, 'down');
                $(".journeyTitle").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.journey').removeClass('active')
                    },
                    complete: function () {}
                });
                $(".journeyButton").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
                $(".success").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
            }
        }
    })

    // fullpage_api.setAllowScrolling(false);
    // fullpage_api.setKeyboardScrolling(false);

    /* s: Drag and drop SCAN QR */
    /* The dragging code for '.draggable' from the demo above
     * applies to this demo as well so it doesn't have to be repeated. */

    function dragMoveListener(event) {
        var target = event.target,
            // keep the dragged position in the data-x/data-y attributes
            x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
            y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        // translate the element
        target.style.webkitTransform =
            target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';

        // update the posiion attributes
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    }

    // enable draggables to be dropped into this
    interact('.cashierDropzone').dropzone({
        // only accept elements matching this CSS selector
        accept: '#yes-drop',
        // Require a 75% element overlap for a drop to be possible
        overlap: 0.05,

        // listen for drop related events:

        ondropactivate: function (event) {
            // add active dropzone feedback
            event.target.classList.add('drop-active')
        },
        ondragenter: function (event) {
            var draggableElement = event.relatedTarget
            var dropzoneElement = event.target

            // feedback the possibility of a drop
            dropzoneElement.classList.add('drop-target')
            draggableElement.classList.add('can-drop')
            //draggableElement.textContent = 'Dragged in'
        },
        ondragleave: function (event) {
            // remove the drop feedback style
            event.target.classList.remove('drop-target')
            event.relatedTarget.classList.remove('can-drop')
            //event.relatedTarget.textContent = 'Dragged out'
        },
        ondrop: function (event) {
            //event.relatedTarget.textContent = 'Dropped'
        },
        ondropdeactivate: function (event) {
            // remove active dropzone feedback
            event.target.classList.remove('drop-active')
            event.target.classList.remove('drop-target')
        }
    })

    interact('.drop-scan')
        .draggable({
            inertia: true,
            modifiers: [
                interact.modifiers.restrictRect({
                    restriction: 'parent',
                    endOnly: true
                })
            ],
            autoScroll: true,
            // dragMoveListener from the dragging demo above
            listeners: {
                move: dragMoveListener,
                // call this function on every dragend event
                end(event) {
                    var textEl = event.target.querySelector('.cashierScan'),
                        movePixel = (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                            Math.pow(event.pageY - event.y0, 2) | 0))
                        .toFixed(2)

                    // textEl && (textEl.textContent =
                    //     'moved a distance of ' +
                    //     movePixel + 'px')
                    console.log(movePixel + 'px')

                    if (movePixel <= 20) {
                        //SCAN SUCCESS
                        console.log('scan success center')
                        scanSuccess()
                    }
                }
            }
        })
    /* e: Drag and drop SCAN QR */
})

function scanSuccess() {
    $(".success").velocity({
        opacity: "1"
    }, {
        delay: 0,
        duration: 700,
        begin: function () {
            fullpage_api.moveTo('success', 4);
        },
        complete: function () {
            fullpage_api.setAllowScrolling(true, 'down');
            fullpage_api.setKeyboardScrolling(true, 'down');
        }
    });

    $(".cashierImg").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 700,
        begin: function () {
            $('.cashier').removeClass('active')
            $('.cashierButton').removeClass('drop-scan')
            $('.cashierButton').attr('id', '');
            $('.cashierDropzone').attr('id', '');
        },
        complete: function () {}
    });
    $(".cashierCompo").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 700,
        begin: function () {},
        complete: function () {}
    });
    $(".storeCompo").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 700,
        begin: function () {},
        complete: function () {}
    });
    $(".cashierInfo").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 700,
        begin: function () {},
        complete: function () {}
    });
}

$('.-js-trig-cashier').on('click', function () {
    fullpage_api.moveTo('cashier', 2);
    $(".cartCompo").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 700,
        begin: function () {},
        complete: function () {}
    });
    $(".cartTitle").velocity({
        top: "-100vh"
    }, {
        delay: 0,
        duration: 700,
        begin: function () {},
        complete: function () {}
    });
    $(".cashierImg").velocity({
        opacity: "1"
    }, {
        delay: 0,
        duration: 700,
        begin: function () {
            $('.cart').removeClass('active')
            $('.cashier').addClass('active')
        },
        complete: function () {}
    });
    $(".cashierCompo").velocity({
        opacity: "1"
    }, {
        delay: 300,
        duration: 700,
        begin: function () {},
        complete: function () {}
    });
})

$('.-js-trig-scan').on('click', function () {
    fullpage_api.setAllowScrolling(false, 'up');
    fullpage_api.setKeyboardScrolling(false, 'up');
    fullpage_api.moveTo('scan', 3);
    $('.cashierTitle').addClass('hide')
    $('.cashierButton').addClass('active')

    $('.cashierButton').addClass('drop-scan')
    $('.cashierButton').attr('id', 'yes-drop');
    $('.cashierDropzone').attr('id', 'inner-dropzone');
})

/* s: Get HEIGHT Device */
const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener("resize", appHeight)
appHeight()
/* e: Get HEIGHT Device */

/* s: Refresh Page */
function refreshPage() {
    window.location.reload(false);
}
/* e: Refresh Page */