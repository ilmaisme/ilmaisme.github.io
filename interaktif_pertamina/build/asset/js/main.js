$(document).ready(function () {
    $('#coverbtn').on('click', function () {
        fullpage_api.moveTo('intro', 2);
        $(".bgColor__intro ").removeClass("opac0");
        $(".cover").velocity({
            opacity: "0"
        }, {
            delay: 0,
            duration: 700,
            begin: function () {
                $(".cover").removeClass("active");
            },
            complete: function () {
                fullpage_api.setAllowScrolling(true);
                fullpage_api.setKeyboardScrolling(true);
            }
        });
        $(".power").velocity({
            opacity: "1"
        }, {
            delay: 0,
            duration: 700
        });
        $(".perwiraStatic").velocity({
            opacity: "1"
        }, {
            delay: 400,
            duration: 700
        });
        $(".intro").velocity({
            opacity: "1"
        }, {
            delay: 1400,
            duration: 700,
            begin: function () {
                $(".intro").addClass("active");
            }
        });
        console.log('intro');
    })

    // 1. Animation Cover
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('coverAnim'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/lottie/cover.json',
        name: 'myAnimation',
    });
    // 2. Animation Power Factory
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('power-factory'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/lottie/power-factory.json',
        name: 'myAnimation',
    });
    // 3. Animation Power Dam
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('power-dam'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/lottie/power-dam.json',
        name: 'myAnimation',
    });
    // 4. Animation Power Windmill
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('power-windmill'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/lottie/power-windmill.json',
        name: 'myAnimation',
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('power-windmill2'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/lottie/power-windmill.json',
        name: 'myAnimation',
    });
    // 5. Animation Siren
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('warning-siren'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/lottie/siren.json',
        name: 'myAnimation',
    });
    // 6. Animation Mill
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('mill'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/lottie/mill.json',
        name: 'myAnimation',
    });

    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        //navigation: true,
        anchors: ['cover', 'intro', 'criteria', 'warning', 'accident'],
        lockAnchors: true,
        //scrollOverflow: true,

        onLeave: function (origin, destination, direction) {
            var leavingSection = this;

            if (origin.index == 0 && direction == 'down') {}
            if (origin.index == 1 && direction == 'up') {
                $(".bgColor__intro ").addClass("opac0");
                $(".cover").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".cover").addClass("active");
                        fullpage_api.setAllowScrolling(false);
                        fullpage_api.setKeyboardScrolling(false);
                    }
                });
                $(".power").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".perwiraStatic").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".intro").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".intro").removeClass("active");
                    }
                });
            }
            if (origin.index == 1 && direction == 'down') {
                $(".intro").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".intro").removeClass("active");
                    }
                });
                $(".criteria").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".criteriaContent").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".criteriaItem1").velocity({
                    top: "0"
                }, {
                    delay: 400,
                    duration: 700
                });
                $(".criteriaItem2").velocity({
                    top: "0"
                }, {
                    delay: 800,
                    duration: 700
                });
                $(".criteriaItem3").velocity({
                    top: "0"
                }, {
                    delay: 1200,
                    duration: 700
                });
                $(".criteriaItem4").velocity({
                    top: "0"
                }, {
                    delay: 1600,
                    duration: 700
                });
            }
            if (origin.index == 2 && direction == 'up') {
                $(".intro").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".intro").addClass("active");
                    }
                });
                $(".criteria").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".criteriaContent").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".criteriaItem").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 2 && direction == 'down') {
                $(".criteria").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".criteriaContent").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".criteriaItem").velocity({
                    top: "100vh"
                }, {
                    delay: 400,
                    duration: 700
                });
                $(".warning").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".warningSiren").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".perwiraHead2").velocity({
                    opacity: "1"
                }, {
                    delay: 400,
                    duration: 700
                });
                setTimeout(function () {
                    $(".warningBg").addClass("active");
                    $(".perwiraStatic").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".warningSiren").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                }, 3400);
                setTimeout(function () {
                    //accident show up
                    fullpage_api.moveTo('accident', 5);
                }, 5400);
                fullpage_api.setAllowScrolling(false);
                fullpage_api.setKeyboardScrolling(false);
            }
            if (origin.index == 3 && direction == 'down') {
                //accident show up
                $(".perwiraStatic").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".perwiraHead3").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".mill").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".accident").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        $(".accident").addClass("active");
                    }
                });
                $(".accidentContent").velocity({
                    top: "0"
                }, {
                    delay: 400,
                    duration: 700
                });
                $(".warning").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                fullpage_api.setAllowScrolling(true);
                fullpage_api.setKeyboardScrolling(true);
            }
            if (origin.index == 3 && direction == 'up') {
                console.log("to criteria")
                $(".warning").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".warning").removeClass("active");
                    }
                });
                $(".perwiraHead2").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".criteria").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".criteriaContent").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".criteriaItem1").velocity({
                    top: "0"
                }, {
                    delay: 400,
                    duration: 700
                });
                $(".criteriaItem2").velocity({
                    top: "0"
                }, {
                    delay: 800,
                    duration: 700
                });
                $(".criteriaItem3").velocity({
                    top: "0"
                }, {
                    delay: 1200,
                    duration: 700
                });
                $(".criteriaItem4").velocity({
                    top: "0"
                }, {
                    delay: 1600,
                    duration: 700
                });
            }
            if (origin.index == 4 && direction == 'up') {
                console.log("to warning")
                $(".warning").removeClass("active");
                $(".power").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".warning").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".warningSiren").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".perwiraHead3").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".accident").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".accidentContent").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".mill").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 4 && direction == 'down') {
                $(".accident").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".accidentContent").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".distance").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".distanceContent").velocity({
                    top: "0"
                }, {
                    delay: 400,
                    duration: 700,
                    complete: function () {
                        $(".distance").addClass("active")
                        $(".millDistance").addClass("active")
                    }
                });
                $(".millDistance").velocity({
                    opacity: "1"
                }, {
                    delay: 2500,
                    duration: 700,
                    begin: function () {
                        $(".millDistance").addClass("blink")
                    }
                });
            }
            if (origin.index == 5 && direction == 'up') {
                $(".accident").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".accidentContent").velocity({
                    top: "0"
                }, {
                    delay: 400,
                    duration: 700
                });
                $(".distance").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".distanceContent").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".distance").removeClass("active")
                        $(".millDistance").removeClass("active blink")
                    }
                });
                console.log("distance red up")
            }
            if (origin.index == 5 && direction == 'down') {
                $(".buffer").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bufferContent").velocity({
                    top: "0"
                }, {
                    delay: 400,
                    duration: 700,
                    complete: function () {
                        $(".buffer").addClass("active")
                        $(".millDistance__green").addClass("active")
                    }
                });
                $(".millDistance__50").velocity({
                    opacity: "1"
                }, {
                    delay: 2500,
                    duration: 700,
                    begin: function () {
                        $(".millDistance__50").addClass("active")
                    }
                });
                $(".distance").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".distanceContent").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".distance").removeClass("active")
                        $(".millDistance").removeClass("active")
                    }
                });
                $(".millDistance").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".millDistance").removeClass("blink")
                    }
                });
            }
            if (origin.index == 6 && direction == 'up') {
                $(".distance").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".distanceContent").velocity({
                    top: "0"
                }, {
                    delay: 400,
                    duration: 700,
                    begin: function () {
                        $(".distance").addClass("active")
                        $(".millDistance").addClass("active")
                    }
                });
                $(".millDistance").velocity({
                    opacity: "1"
                }, {
                    delay: 2500,
                    duration: 700,
                    begin: function () {
                        $(".millDistance").addClass("blink")
                    }
                });
                $(".buffer").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".bufferContent").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".buffer").removeClass("active")
                        $(".millDistance__green").removeClass("active")
                    }
                });
                $(".millDistance__50").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $(".millDistance__50").removeClass("active")
                    }
                });
            }
        }
    })

    fullpage_api.setAllowScrolling(false);
    fullpage_api.setKeyboardScrolling(false);
})

//Popup
const pop = document.querySelectorAll(".popup");

function triggerPopup(e) {
    e.classList.add('active');
    console.log(e)
}

function closePopup() {
    pop.forEach(popup => {
        popup.classList.remove('active');
    });
}

//GET HEIGHT Device
const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener("resize", appHeight)
appHeight()