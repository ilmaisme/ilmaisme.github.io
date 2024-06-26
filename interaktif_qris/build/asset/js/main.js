$(window).on('load', function () {
    setTimeout(function () {
        $('.preloader').addClass("done");
        $(".introTitle").velocity({
            top: "0"
        }, {
            delay: 0,
            duration: 700
        });
        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);
    }, 3000);
    //console.log('loaded');
})

$(document).ready(function () {
    // 1. Animation cashier
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationCashier'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/cashier.json',
        name: 'myAnimation',
    });
    // 2. Animation universal
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationUniversal'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/deptstore.json',
        name: 'myAnimation',
    });
    // 3. Animation consumer
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationConsumer'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/consumer.json',
        name: 'myAnimation',
    });
    // 4. Animation merchant
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationMerchant'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/merchant.json',
        name: 'myAnimation',
    });
    // 5. Animation overseas
    var paramOverseas = {
        container: document.getElementById('animationOverseas'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'asset/json/overseas.json',
        name: 'myAnimation',
    };
    var playOverseas;
    playOverseas = bodymovin.loadAnimation(paramOverseas);
    // 6. Animation perry
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationPerry'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/perry.json',
        name: 'myAnimation',
    });
    // 7. Animation COD
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationCOD'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/cod.json',
        name: 'myAnimation',
    });
    // 8. Animation People
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationPeople_1'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/people_1.json',
        name: 'myAnimation',
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationPeople_2'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/people_2.json',
        name: 'myAnimation',
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationPeople_2_act'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/people_2_act.json',
        name: 'myAnimation',
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationPeople_3'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/people_3.json',
        name: 'myAnimation',
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationPeople_4'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/people_4.json',
        name: 'myAnimation',
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationPeople_5'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/people_5.json',
        name: 'myAnimation',
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationPeople_6'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/people_6.json',
        name: 'myAnimation',
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationPeople_7'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/people_7.json',
        name: 'myAnimation',
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationPeople_7_act'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/people_7_act.json',
        name: 'myAnimation',
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationPeople_8'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/people_8.json',
        name: 'myAnimation',
    });
    //Animation Buah
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationBuah'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/dagingbuah.json',
        name: 'myAnimation',
    });
    //Animation Soto
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('animationSoto'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'asset/json/soto.json',
        name: 'myAnimation',
    });
    // Animation CHAR
    // var paramUntung = {
    //     container: document.getElementById('animationUntung'),
    //     renderer: 'svg',
    //     loop: true,
    //     autoplay: false,
    //     path: 'asset/json/char3.json',
    //     name: 'myAnimation',
    // };
    // var playUntung;
    // playUntung = bodymovin.loadAnimation(paramUntung);
    // var paramGampang = {
    //     container: document.getElementById('animationGampang'),
    //     renderer: 'svg',
    //     loop: true,
    //     autoplay: false,
    //     path: 'asset/json/char2.json',
    //     name: 'myAnimation',
    // };
    // var playGampang;
    // playGampang = bodymovin.loadAnimation(paramGampang);
    // var paramUnggul = {
    //     container: document.getElementById('animationUnggul'),
    //     renderer: 'svg',
    //     loop: true,
    //     autoplay: false,
    //     path: 'asset/json/char.json',
    //     name: 'myAnimation',
    // };
    // var playUnggul;
    // playUnggul = bodymovin.loadAnimation(paramUnggul);
    // playUnggul.play()


    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        //navigation: true,
        anchors: ['intro', 'cart', 'cashier', 'scan', 'success', 'journey', 'people'],
        lockAnchors: true,
        //scrollOverflow: true,

        onLeave: function (origin, destination, direction) {
            var leavingSection = this;

            if (origin.index == 0 && direction == 'down') {
                $(".intro").velocity({
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".cartTitle").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.cart').addClass('active')
                        $('body').addClass('cursor')
                        $(".scroll-guide").addClass('opac0')
                    }
                });
                $(".cartCompo").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700
                });
                $(".storeCompo").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700
                });
                fullpage_api.setAllowScrolling(false, 'down');
                fullpage_api.setKeyboardScrolling(false, 'down');
            }
            if (origin.index == 1 && direction == 'up') {
                $(".intro").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".cartTitle").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.cart').removeClass('active')
                        $('body').removeClass('cursor')
                        $(".scroll-guide").removeClass('opac0')
                    }
                });
                $(".cartCompo").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".storeCompo").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                fullpage_api.setAllowScrolling(true, 'down');
                fullpage_api.setKeyboardScrolling(true, 'down');
            }
            if (origin.index == 2 && direction == 'up') {
                $(".cartCompo").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700
                });
                $(".cartTitle").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".cashierImg").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.cart').addClass('active')
                        $('.cashier').removeClass('active')
                        $('body').addClass('cursor')
                    }
                });
                $(".cashierCompo").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 4 && direction == 'down') {
                fullpage_api.setAllowScrolling(false, 'down');
                fullpage_api.setKeyboardScrolling(false, 'down');
                $(".journeyTitle").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.journey').addClass('active')
                        $(".scroll-guide").addClass('opac0')
                    }
                });
                $(".journeyButton").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700,
                    complete: function () {
                        fullpage_api.setAllowScrolling(true, 'up');
                        fullpage_api.setKeyboardScrolling(true, 'up');
                    }
                });
                $(".success").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
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
                        $(".scroll-guide").removeClass('opac0')
                    }
                });
                $(".journeyButton").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".success").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 6 && direction == 'up') {
                fullpage_api.setAllowScrolling(false, 'down');
                fullpage_api.setKeyboardScrolling(false, 'down');
                $(".journeyTitle").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.journey').addClass('active')
                        $(".scroll-guide").addClass('opac0')
                    }
                });
                $(".journeyButton").velocity({
                    opacity: "1"
                }, {
                    delay: 300,
                    duration: 700
                });
                $(".peopleImg").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 6 && direction == 'down') {
                $('.people').addClass('--text')
                $(".reachTitle").velocity({
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".peopleImg7_act").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 200,
                    complete: function () {
                        $('.peopleImg7_act').addClass('active')
                        $('.reachLine').addClass('active')
                    }
                });
            }
            if (origin.index == 7 && direction == 'up') {
                $('.people').removeClass('--text')
                $(".reachTitle").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.reachLine').removeClass('active')
                    }
                });
                $(".peopleImg7_act").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 200,
                    complete: function () {
                        $('.peopleImg7_act').removeClass('active')
                    }
                });
            }
            if (origin.index == 7 && direction == 'down') {
                $(".reachTitle").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.reachLine').removeClass('active')
                    }
                });
                $(".peopleImg7_act").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 200,
                    complete: function () {
                        $('.peopleImg7_act').removeClass('active')
                    }
                });
                $(".valueTitle").velocity({
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".peopleImg2_act").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 200,
                    complete: function () {
                        $('.peopleImg2_act').addClass('active')
                        $('.valueLine').addClass('active')
                    }
                });
            }
            if (origin.index == 8 && direction == 'up') {
                $(".reachTitle").velocity({
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".peopleImg7_act").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 200,
                    complete: function () {
                        $('.peopleImg7_act').addClass('active')
                        $('.reachLine').addClass('active')
                    }
                });
                $(".valueTitle").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.valueLine').removeClass('active')
                    }
                });
                $(".peopleImg2_act").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 200,
                    complete: function () {
                        $('.peopleImg2_act').removeClass('active')
                    }
                });
            }
            if (origin.index == 8 && direction == 'down') {
                $(".valueTitle").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.valueLine').removeClass('active')
                    }
                });
                $(".peopleImg2_act").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 200,
                    complete: function () {
                        $('.peopleImg2_act').removeClass('active')
                    }
                });
                $(".peopleImg").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".charTitle").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 9 && direction == 'up') {
                $(".valueTitle").velocity({
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".peopleImg2_act").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 200,
                    complete: function () {
                        $('.peopleImg2_act').addClass('active')
                        $('.valueLine').addClass('active')
                    }
                });
                $(".peopleImg").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".peopleImg svg").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".charTitle").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 9 && direction == 'down') {
                $(".charTitle").velocity({
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.charUnggul').addClass('active')
                    },
                    complete: function () {
                        $('.charUnggul__caption').addClass('charAnim')
                    }
                });
            }
            if (origin.index == 10 && direction == 'up') {
                $(".charTitle").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.charUnggul').removeClass('active')
                        $('.charUnggul__caption').removeClass('charAnim')
                    }
                });
            }
            if (origin.index == 10 && direction == 'down') {
                $(".charUnggul__caption").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.charUnggul__caption').addClass('breadcrumb')
                        $('.charUnggul__caption').removeClass('charAnim')
                    }
                });
                $(".charBreadcrumb").velocity({
                    opacity: "1"
                }, {
                    delay: 400,
                    duration: 700,
                    complete: function () {
                        $('.char1__bread').addClass('active')
                    }
                });
                $(".char1__img").velocity({
                    opacity: "1"
                }, {
                    delay: 400,
                    duration: 700
                });
                $(".char1__title").velocity({
                    top: "0"
                }, {
                    delay: 400,
                    duration: 700,
                    complete: function () {
                        $('.char1__title').addClass('charAnim')
                    }
                });
                $(".char1__txt").velocity({
                    top: "0"
                }, {
                    delay: 700,
                    duration: 700
                });
            }
            if (origin.index == 11 && direction == 'up') {
                $(".charUnggul__caption").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.charUnggul__caption').removeClass('breadcrumb')
                    },
                    complete: function () {
                        $('.charUnggul__caption').addClass('charAnim')
                    }
                });
                $(".charBreadcrumb").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.char1__bread').removeClass('active')
                    }
                });
                $(".char1__img").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".char1__title").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.char1__title').removeClass('charAnim')
                    }
                });
                $(".char1__txt").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 11 && direction == 'down') {
                $(".char1__img").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 300,
                    begin: function () {
                        $('.char1__bread').removeClass('active')
                    }
                });
                $(".char1__title").velocity({
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.char1__title').removeClass('charAnim')
                    }
                });
                $(".char1__txt").velocity({
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".char2__img").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        $('.char2__bread').addClass('active')
                    }
                });
                $(".char2__title").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        $('.char2__title').addClass('charAnim')
                    }
                });
                $(".char2__txt").velocity({
                    top: "0"
                }, {
                    delay: 300,
                    duration: 700
                });
            }
            if (origin.index == 12 && direction == 'up') {
                $(".char1__img").velocity({
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".char1__title").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        $('.char1__bread').addClass('active')
                        $('.char1__title').addClass('charAnim')
                    }
                });
                $(".char1__txt").velocity({
                    top: "0"
                }, {
                    delay: 300,
                    duration: 700
                });
                $(".char2__img").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.char2__bread').removeClass('active')
                    }
                });
                $(".char2__title").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.char2__title').removeClass('charAnim')
                    }
                });
                $(".char2__txt").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 12 && direction == 'down') {
                $(".char2__img").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.char2__bread').removeClass('active')
                    }
                });
                $(".char2__title").velocity({
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.char2__title').removeClass('charAnim')
                    }
                });
                $(".char2__txt").velocity({
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".char3__img").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        $('.char3__bread').addClass('active')
                    }
                });
                $(".char3__title").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        $('.char3__title').addClass('charAnim')
                    }
                });
                $(".char3__txt").velocity({
                    top: "0"
                }, {
                    delay: 300,
                    duration: 700
                });
            }
            if (origin.index == 13 && direction == 'up') {
                $(".char2__img").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        $('.char2__bread').addClass('active')
                    }
                });
                $(".char2__title").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        $('.char2__title').addClass('charAnim')
                    }
                });
                $(".char2__txt").velocity({
                    top: "0"
                }, {
                    delay: 300,
                    duration: 700
                });
                $(".char3__img").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.char3__bread').removeClass('active')
                    }
                });
                $(".char3__title").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.char3__title').removeClass('charAnim')
                    }
                });
                $(".char3__txt").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 13 && direction == 'down') {
                $(".char3__img").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.char3__bread').removeClass('active')
                    }
                });
                $(".char3__title").velocity({
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.char3__title').removeClass('charAnim')
                    }
                });
                $(".char3__txt").velocity({
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".char4__img").velocity({
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".char4__title").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        $('.char4__bread').addClass('active')
                        $('.char4__title').addClass('charAnim')
                    }
                });
                $(".char4__txt").velocity({
                    top: "0"
                }, {
                    delay: 300,
                    duration: 700
                });
            }
            if (origin.index == 14 && direction == 'up') {
                $(".char3__img").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 400
                });
                $(".char3__title").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        $('.char3__bread').addClass('active')
                        $('.char3__title').addClass('charAnim')
                    }
                });
                $(".char3__txt").velocity({
                    top: "0"
                }, {
                    delay: 300,
                    duration: 700
                });
                $(".char4__img").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400
                });
                $(".char4__title").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.char4__bread').removeClass('active')
                        $('.char4__title').removeClass('charAnim')
                    }
                });
                $(".char4__txt").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 14 && direction == 'down') {
                $(".char4__img").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400
                });
                $(".char4__title").velocity({
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.char4__bread').removeClass('active')
                        $('.char4__title').removeClass('charAnim')
                    }
                });
                $(".char4__txt").velocity({
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".charBreadcrumb").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".benefitTitle").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.benefitButton').addClass('active')
                        $(".scroll-guide").addClass('opac0')
                    }
                });
                $(".benefit").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 15 && direction == 'up') {
                $(".char4__img").velocity({
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 700
                });
                $(".char4__title").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    complete: function () {
                        $('.char4__title').addClass('charAnim')
                    }
                });
                $(".char4__txt").velocity({
                    top: "0"
                }, {
                    delay: 300,
                    duration: 700
                });
                $(".charBreadcrumb").velocity({
                    opacity: "1"
                }, {
                    delay: 400,
                    duration: 700,
                    complete: function () {
                        $('.char4__bread').addClass('active')
                    }
                });
                $(".benefitTitle").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.benefitButton').removeClass('active')
                        $(".scroll-guide").removeClass('opac0')
                    }
                });
                $(".benefit").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 15 && direction == 'down') {
                $(".benefitTitle").velocity({
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.benefitButton').removeClass('active')
                    }
                });
                $(".benefit").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".overseasImg").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 1000,
                    begin: function () {
                        $('.overseas').addClass('active');
                    },
                    complete: function () {
                        playOverseas.play();
                    }
                });
                $(".overseasTitle").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 16 && direction == 'up') {
                $(".benefitTitle").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.benefitButton').addClass('active')
                    }
                });
                $(".benefit").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".overseasImg").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.overseas').removeClass('active')
                    }
                });
                $(".overseasTitle").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 16 && direction == 'down') {
                $(".overseasImg").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.overseas').removeClass('active')
                    }
                });
                $(".overseasTitle").velocity({
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".tipsImg").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.tips').addClass('active')
                    }
                });
                $(".tipsTitle").velocity({
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 700,
                    begin: function () {
                        $('.tipsTitle').addClass('active')
                    }
                });
                $(".tipsContent__img0").velocity({
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 1000,
                    begin: function () {
                        $('.tipsContent__img0').addClass('active')
                    }
                });
            }
            if (origin.index == 17 && direction == 'up') {
                $(".overseasImg").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 1000,
                    begin: function () {
                        $('.overseas').addClass('active');
                    },
                    complete: function () {
                        playOverseas.play();
                    }
                });
                $(".overseasTitle").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".tipsImg").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.tips').removeClass('active')
                    }
                });
                $(".tipsTitle").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.tipsTitle').removeClass('active')
                    }
                });
                $(".tipsContent__img0").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.tipsContent__img0').removeClass('active')
                    }
                });
            }
            if (origin.index == 17 && direction == 'down') {
                $(".tipsContent__img0").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.tipsContent__img0').addClass('hide')
                    }
                });
                $(".tipsContent__img1").velocity({
                    opacity: "1"
                }, {
                    delay: 400,
                    duration: 1000,
                    begin: function () {
                        $('.tipsContent__img1').addClass('active')
                    }
                });
                $(".tipsList li:nth-child(1)").velocity({
                    top: "0"
                }, {
                    delay: 400,
                    duration: 700
                });
            }
            if (origin.index == 18 && direction == 'up') {
                $(".tipsContent__img1").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.tipsContent__img0').removeClass('hide')
                        $('.tipsContent__img1').removeClass('active')
                    }
                });
                $(".tipsContent__img0").velocity({
                    opacity: "1"
                }, {
                    delay: 400,
                    duration: 1000
                });
                $(".tipsList li:nth-child(1)").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 18 && direction == 'down') {
                $(".tipsContent__img1").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.tipsContent__img1').addClass('hide')
                    }
                });
                $(".tipsContent__img2").velocity({
                    opacity: "1"
                }, {
                    delay: 400,
                    duration: 1000,
                    begin: function () {
                        $('.tipsContent__img2').addClass('active')
                    }
                });
                $(".tipsList li:nth-child(2)").velocity({
                    top: "0"
                }, {
                    delay: 400,
                    duration: 700
                });
            }
            if (origin.index == 19 && direction == 'up') {
                $(".tipsContent__img2").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.tipsContent__img1').removeClass('hide')
                        $('.tipsContent__img2').removeClass('active')
                    }
                });
                $(".tipsContent__img1").velocity({
                    opacity: "1"
                }, {
                    delay: 400,
                    duration: 1000
                });
                $(".tipsList li:nth-child(2)").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 19 && direction == 'down') {
                $(".tipsContent__img2").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.tipsContent__img2').addClass('hide')
                    }
                });
                $(".tipsContent__img3").velocity({
                    opacity: "1"
                }, {
                    delay: 400,
                    duration: 1000,
                    begin: function () {
                        $('.tipsContent__img3').addClass('active')
                    }
                });
                $(".tipsList li:nth-child(3)").velocity({
                    top: "0"
                }, {
                    delay: 400,
                    duration: 700
                });
            }
            if (origin.index == 20 && direction == 'up') {
                $(".tipsContent__img3").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $('.tipsContent__img2').removeClass('hide')
                        $('.tipsContent__img3').removeClass('active')
                    }
                });
                $(".tipsContent__img2").velocity({
                    opacity: "1"
                }, {
                    delay: 400,
                    duration: 1000
                });
                $(".tipsList li:nth-child(3)").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 20 && direction == 'down') {
                $(".tipsImg").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.tips').removeClass('active')
                    }
                });
                $(".tipsTitle").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.tipsTitle').removeClass('active')
                    }
                });
                $(".tipsList li").velocity({
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".visionImg").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".visionLine").velocity({
                    opacity: "1"
                }, {
                    delay: 400,
                    duration: 700,
                    begin: function () {
                        $('.visionLine').addClass('active')
                    }
                });
                $(".visionTitle").velocity({
                    top: "0"
                }, {
                    delay: 1100,
                    duration: 700
                });
            }
            if (origin.index == 21 && direction == 'up') {
                $(".tipsImg").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.tips').addClass('active')
                    }
                });
                $(".tipsTitle").velocity({
                    opacity: "1"
                }, {
                    delay: 700,
                    duration: 700,
                    begin: function () {
                        $('.tipsTitle').addClass('active')
                    }
                });
                $(".tipsList li").velocity({
                    top: "0"
                }, {
                    delay: 400,
                    duration: 700
                });
                $(".visionImg").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".visionLine").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.visionLine').removeClass('active')
                    }
                });
                $(".visionTitle").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700
                });
            }
            if (origin.index == 21 && direction == 'down') {
                $(".visionImg").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".visionLine").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {
                        $('.visionLine').removeClass('active')
                        $(".scroll-guide").addClass('opac0')
                    }
                });
                $(".visionTitle").velocity({
                    top: "-100vh"
                }, {
                    delay: 0,
                    duration: 700
                });
                $('.creditTitle').addClass('active');
                $('.creditName').addClass('active');
            }
            if (origin.index == 22 && direction == 'up') {
                $(".visionImg").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 700
                });
                $(".visionLine").velocity({
                    opacity: "1"
                }, {
                    delay: 400,
                    duration: 700,
                    begin: function () {
                        $('.visionLine').addClass('active')
                        $(".scroll-guide").removeClass('opac0')
                    }
                });
                $(".visionTitle").velocity({
                    top: "0"
                }, {
                    delay: 1100,
                    duration: 700
                });
                $('.creditTitle').removeClass('active');
                $('.creditName').removeClass('active');
            }
        }
    })

    fullpage_api.setAllowScrolling(false);
    fullpage_api.setKeyboardScrolling(false);

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
        //overlap: 0.05,
        overlap: 'pointer',

        // listen for drop related events:

        ondropactivate: function (event) {
            // add active dropzone feedback
            event.target.classList.add('drop-active');
            $(".cashierInfo").addClass('opac0')
        },
        ondragenter: function (event) {
            var draggableElement = event.relatedTarget
            var dropzoneElement = event.target
            var textEl = $('.cashierScan');

            // feedback the possibility of a drop
            dropzoneElement.classList.add('drop-target')
            draggableElement.classList.add('can-drop')
            //draggableElement.textContent = 'Dragged in'
            //textEl.html('Dragged in')

            //SCAN SUCCESS
            console.log('scan success center')
            scanSuccess()

            // movePixel = (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
            //         Math.pow(event.pageY - event.y0, 2) | 0))
            //     .toFixed(2)

            // textEl && (textEl.textContent =
            //     'moved a distance of ' +
            //     movePixel + 'px')
            // console.log(movePixel + 'px')
            //textEl.html(movePixel + 'px')
        },
        ondragleave: function (event) {
            // remove the drop feedback style
            // var textEl = $('.cashierScan');
            event.target.classList.remove('drop-target')
            event.relatedTarget.classList.remove('can-drop')
            //event.relatedTarget.textContent = 'Dragged out'
            // textEl.html('Dragged out')
        },
        ondrop: function (event) {
            // var textEl = $('.cashierScan');
            //event.relatedTarget.textContent = 'Dropped'
            // textEl.html('Dropped')
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
                    // var textEl = event.target.querySelector('.cashierScan'),
                    //     movePixel = (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                    //         Math.pow(event.pageY - event.y0, 2) | 0))
                    //     .toFixed(2)

                    // textEl && (textEl.textContent =
                    //     'moved a distance of ' +
                    //     movePixel + 'px')
                    //console.log(movePixel + 'px')

                    // if (movePixel <= 30) {
                        //SCAN SUCCESS
                        // console.log('scan success center')
                        //scanSuccess()
                    // }
                }
            }
        })
    /* e: Drag and drop SCAN QR */
})

function scanSuccess() {
    $(".scanning").velocity({
        opacity: "0"
    }, {
        delay: 0
    });
    $(".scanningSuccess").velocity({
        opacity: "1"
    }, {
        delay: 0
    });
    $(".success").velocity({
        opacity: "1"
    }, {
        delay: 1400,
        duration: 700,
        begin: function () {
            fullpage_api.moveTo('success', 4);
        },
        complete: function () {
            fullpage_api.setAllowScrolling(true, 'down');
            fullpage_api.setKeyboardScrolling(true, 'down');
            $(".scroll-guide").removeClass('opac0')
        }
    });

    $(".cashierImg").velocity({
        opacity: "0"
    }, {
        delay: 1400,
        duration: 700,
        begin: function () {
            $('.cashier').removeClass('active')
            $('.cashierButton').removeClass('drop-scan')
            $('.cashierButton').attr('id', '');
            $('.cashierDropzone').attr('id', '');
        },
        complete: function () {
            $('.cashierButton').removeClass('active')
        }
    });
    $(".cashierCompo").velocity({
        opacity: "0"
    }, {
        delay: 1400,
        duration: 700
    });
    $(".storeCompo").velocity({
        opacity: "0"
    }, {
        delay: 1400,
        duration: 700
    });
}

$('.-js-trig-cashier').on('click', function () {
    fullpage_api.moveTo('cashier', 2);
    $(".cartCompo").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 700
    });
    $(".cartTitle").velocity({
        top: "-100vh"
    }, {
        delay: 0,
        duration: 700
    });
    $(".cashierImg").velocity({
        opacity: "1"
    }, {
        delay: 0,
        duration: 700,
        begin: function () {
            $('.cart').removeClass('active')
            $('.cashier').addClass('active')
            $('body').removeClass('cursor')
        }
    });
    $(".cashierCompo").velocity({
        opacity: "1"
    }, {
        delay: 300,
        duration: 700
    });
    $(".cashierClick").velocity({
        opacity: "1"
    }, {
        delay: 0,
        duration: 300
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
    $(".cashierClick").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 300
    });
    $(".cashierInfo").velocity({
        opacity: "1"
    }, {
        delay: 0,
        duration: 300
    });
})

$('.-js-trig-people').on('click', function () {
    fullpage_api.setAllowScrolling(true, 'down');
    fullpage_api.setKeyboardScrolling(true, 'down');
    fullpage_api.moveTo('people', 6);
    $(".peopleImg").velocity({
        opacity: "1"
    }, {
        delay: 0,
        duration: 700,
        begin: function () {
            $('.peopleImg').removeClass('top100')
            $(".scroll-guide").removeClass('opac0')
        }
    });
    $(".peopleImg svg").velocity({
        opacity: "1"
    }, {
        delay: 0,
        duration: 700
    });
    $(".journeyTitle").velocity({
        top: "-100vh"
    }, {
        delay: 0,
        duration: 700,
        begin: function () {
            $('.journey').removeClass('active')
        }
    });
    $(".journeyButton").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 700
    });
})

$('.-js-trig-merchant').on('click', function () {
    if ($(".merchantTrigger__caption").css('opacity') == 1) {
        closeMerchant()
        showBenefitBg()
    } else {
        showMerchant()
        hideBenefitBg()
        closeConsumer()
        $(".merchantClose").velocity({
            opacity: "1"
        }, {
            delay: 0,
            duration: 300,
            begin: function () {
                $('.merchantClose').addClass('active')
            },
            complete: function () {}
        });
        $(".merchantTrigger__caption").velocity({
            opacity: "1"
        }, {
            delay: 0,
            duration: 300
        });
        $(".merchantTriangle").velocity({
            opacity: "0"
        }, {
            delay: 0,
            duration: 300
        });
    }
})

$('.-js-close-merchant').on('click', function () {
    closeMerchant()
    showBenefitBg()
})

function closeMerchant() {
    $(".merchantClose").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 300,
        begin: function () {
            $('.merchantClose').removeClass('active')
        }
    });
    $(".merchantTrigger__caption").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 300
    });
    $(".merchantTriangle").velocity({
        opacity: "1"
    }, {
        delay: 0,
        duration: 300
    });
}

$('.-js-trig-consumer').on('click', function () {
    if ($(".consumerTrigger__caption").css('opacity') == 1) {
        closeConsumer()
        showBenefitBg()
    } else {
        showConsumer()
        hideBenefitBg()
        closeMerchant()
        $(".consumerClose").velocity({
            opacity: "1"
        }, {
            delay: 0,
            duration: 300,
            begin: function () {
                $('.consumerClose').addClass('active')
            },
            complete: function () {}
        });
        $(".consumerTrigger__caption").velocity({
            opacity: "1"
        }, {
            delay: 0,
            duration: 300
        });
        $(".consumerTriangle").velocity({
            opacity: "0"
        }, {
            delay: 0,
            duration: 300
        });
    }
})

$('.-js-close-consumer').on('click', function () {
    closeConsumer()
    showBenefitBg()
})

function closeConsumer() {
    $(".consumerClose").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 300,
        begin: function () {
            $('.consumerClose').removeClass('active')
        }
    });
    $(".consumerTrigger__caption").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 300
    });
    $(".consumerTriangle").velocity({
        opacity: "1"
    }, {
        delay: 0,
        duration: 300
    });
}

function hideBenefitBg() {
    $(".benefitTitle").velocity({
        top: "-100vh"
    }, {
        delay: 0,
        duration: 700,
        begin: function () {
            $('.benefitImg__bg').addClass('hide')
        }
    });
    $(".benefitImg__coffee").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 300
    });
    $(".benefitLamp").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 300
    });
    $(".scroll-guide").addClass('opac0')
}

function showBenefitBg() {
    fullpage_api.setAllowScrolling(true);
    fullpage_api.setKeyboardScrolling(true);
    $(".benefitTitle").velocity({
        top: "0"
    }, {
        delay: 0,
        duration: 700,
        begin: function () {
            $('.benefitImg__bg').removeClass('hide')
            $('.benefitButton').addClass('active')
        }
    });
    $(".benefitImg__coffee").velocity({
        opacity: "1"
    }, {
        delay: 0,
        duration: 700
    });
    $(".benefitLamp").velocity({
        opacity: "1"
    }, {
        delay: 0,
        duration: 700
    });
    $(".consumerTrigger").velocity({
        opacity: "1"
    }, {
        delay: 0,
        duration: 700
    });
    $(".merchantTrigger").velocity({
        opacity: "1"
    }, {
        delay: 0,
        duration: 700
    });
    $(".merchant").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 400,
        begin: function () {
            $('.merchant').removeClass('active')
            $(".scroll-guide").removeClass('opac0')
        }
    });
    $(".consumer").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 400,
        begin: function () {
            $('.consumer').removeClass('active')
        }
    });
    $(".benefitList__item").velocity({
        top: "100vh"
    }, {
        delay: 0,
        duration: 700,
        begin: function () {
            $('.benefitList__img').removeClass('active')
        }
    });
}

function showMerchant() {
    fullpage_api.setAllowScrolling(false);
    fullpage_api.setKeyboardScrolling(false);
    $(".consumerTrigger").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 300,
        begin: function () {
            $('.consumerTrig').removeClass('active')
        }
    });
    $(".merchant").velocity({
        opacity: "1"
    }, {
        delay: 0,
        duration: 700,
        begin: function () {
            $('.merchant').addClass('active')
        }
    });
    $(".merchantItem1").velocity({
        top: "0"
    }, {
        delay: 400,
        duration: 700,
        complete: function () {
            $('.merchantItem1__img').addClass('active')
        }
    });
    $(".merchantItem2").velocity({
        top: "0"
    }, {
        delay: 700,
        duration: 700,
        complete: function () {
            $('.merchantItem2__img').addClass('active')
        }
    });
    $(".merchantItem3").velocity({
        top: "0"
    }, {
        delay: 1000,
        duration: 700,
        complete: function () {
            $('.merchantItem3__img').addClass('active')
        }
    });
    $(".merchantItem4").velocity({
        top: "0"
    }, {
        delay: 1300,
        duration: 700,
        complete: function () {
            $('.merchantItem4__img').addClass('active')
        }
    });
    $(".merchantItem5").velocity({
        top: "0"
    }, {
        delay: 1600,
        duration: 700,
        complete: function () {
            $('.merchantItem5__img').addClass('active')
        }
    });
}

function showConsumer() {
    fullpage_api.setAllowScrolling(false);
    fullpage_api.setKeyboardScrolling(false);
    $(".merchantTrigger").velocity({
        opacity: "0"
    }, {
        delay: 0,
        duration: 300,
        begin: function () {
            $('.merchantTrig').removeClass('active')
        }
    });
    $(".consumer").velocity({
        opacity: "1"
    }, {
        delay: 0,
        duration: 700,
        begin: function () {
            $('.consumer').addClass('active')
        }
    });
    $(".consumerItem1").velocity({
        top: "0"
    }, {
        delay: 400,
        duration: 700,
        complete: function () {
            $('.consumerItem1__img').addClass('active')
        }
    });
    $(".consumerItem2").velocity({
        top: "0"
    }, {
        delay: 700,
        duration: 700,
        complete: function () {
            $('.consumerItem2__img').addClass('active')
        }
    });
    $(".consumerItem3").velocity({
        top: "0"
    }, {
        delay: 1000,
        duration: 700,
        complete: function () {
            $('.consumerItem3__img').addClass('active')
        }
    });
    $(".consumerItem4").velocity({
        top: "0"
    }, {
        delay: 1300,
        duration: 700,
        complete: function () {
            $('.consumerItem4__img').addClass('active')
        }
    });
    $(".consumerItem5").velocity({
        top: "0"
    }, {
        delay: 1600,
        duration: 700,
        complete: function () {
            $('.consumerItem5__img').addClass('active')
        }
    });
}

/* s: add to cart item */
$('.cartDisplay__item').on('click', function (e) {
    console.log('send to cart')
    var button = $(this);
    var cart = $('.cartImg');
    // var cartTotal = cart.attr('data-totalitems');
    // var newCartTotal = parseInt(cartTotal) + 1;

    button.addClass('sendtocart');
    setTimeout(function () {
        button.removeClass('sendtocart');
        //cart.addClass('shake').attr('data-totalitems', newCartTotal);
        cart.addClass('shake');
        setTimeout(function () {
            cart.removeClass('shake');
        }, 500)
        button.addClass('disabled')
    }, 1000)
})
/* e: add to cart item */

/* s: Get HEIGHT Device */
const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener("resize", appHeight)
appHeight()
/* e: Get HEIGHT Device */

// function getMobileOperatingSystem() {
var userAgent = navigator.userAgent || navigator.vendor || window.opera;

// Windows Phone must come first because its UA also contains "Android"
// if (/windows phone/i.test(userAgent)) {
//     return "Windows Phone";
// }    

if (/android/i.test(userAgent)) {
    $('.overseasPeople').addClass('andro')
} else {
    $('.overseasPeople').removeClass('andro')
}

// iOS detection from: http://stackoverflow.com/a/9039885/177710
// if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
//     return "iOS";
// }

//     return "unknown";
// }