$(document).ready(function () {

    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        // navigation: true,
        // anchors: ['cover', 'start', 'invitation', 'credit'],
        lockAnchors: true,
        //scrollOverflow: true,

        onLeave: function (origin, destination, direction) {
            var leavingSection = this;

            if (origin.index == 0 && direction == 'down') {
                $(".imgPlay").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 400
                })
                $(".intro").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".bgOrnament").addClass('hide');
                        $(".bgOrnament--bottom").addClass('hide');
                        $(".bgBorder").addClass('hide');
                    },
                    complete: function () {
                        $(".intro").velocity({
                            display: "none"
                        })
                    }
                })
                $(".bride").velocity({
                    display: "block"
                }, {
                    delay: 0,
                    duration: 400,
                    complete: function () {
                        $(".bride").velocity({
                            opacity: "1"
                        })
                        $(".imgFlower svg").addClass('animation-stroke');
                    }
                })
                // $(".invitation").velocity({
                //     display: "block"
                // }, {
                //     delay: 0,
                //     duration: 400,
                //     complete: function () {
                //         $(".invitation").velocity({
                //             opacity: "1"
                //         })
                //         $(".imgFlower svg").addClass('animation-stroke');
                //     }
                // })
                $(".imgFlower__wrap").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 400
                })
            }
            if (origin.index == 1 && direction == 'up') {
                $(".imgPlay").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400
                })
                $(".intro").velocity({
                    display: "block"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".bgOrnament").removeClass('hide');
                        $(".bgOrnament--bottom").removeClass('hide');
                        $(".bgBorder").removeClass('hide');
                    },
                    complete: function () {
                        $(".intro").velocity({
                            opacity: "1"
                        })
                    }
                })
                $(".bride").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    complete: function () {
                        $(".bride").velocity({
                            display: "none"
                        })
                        $(".imgFlower svg").removeClass('animation-stroke');
                    }
                })
                // $(".invitation").velocity({
                //     opacity: "0"
                // }, {
                //     delay: 0,
                //     duration: 400,
                //     complete: function () {
                //         $(".invitation").velocity({
                //             display: "none"
                //         })
                //         $(".imgFlower svg").removeClass('animation-stroke');
                //     }
                // })
                $(".imgFlower__wrap").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400
                })
            }
            if (origin.index == 1 && direction == 'down') {
                $(".bride").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    complete: function () {
                        $(".bride").velocity({
                            display: "none"
                        })
                    }
                })
                $(".invitation").velocity({
                    display: "block"
                }, {
                    delay: 0,
                    duration: 400,
                    complete: function () {
                        $(".invitation").velocity({
                            opacity: "1"
                        })
                    }
                })
            }
            if (origin.index == 2 && direction == 'up') {
                $(".invitation").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    complete: function () {
                        $(".invitation").velocity({
                            display: "none"
                        })
                    }
                })
                $(".bride").velocity({
                    display: "block"
                }, {
                    delay: 0,
                    duration: 400,
                    complete: function () {
                        $(".bride").velocity({
                            opacity: "1"
                        })
                    }
                })
            }
            if (origin.index == 2 && direction == 'down') {
                $(".invitation").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    complete: function () {
                        $(".invitation").velocity({
                            display: "none"
                        })
                    }
                })
                $(".gift").velocity({
                    display: "block"
                }, {
                    delay: 0,
                    duration: 400,
                    complete: function () {
                        $(".gift").velocity({
                            opacity: "1"
                        })
                    }
                })
            }
            if (origin.index == 3 && direction == 'up') {
                $(".invitation").velocity({
                    display: "block"
                }, {
                    delay: 0,
                    duration: 400,
                    complete: function () {
                        $(".invitation").velocity({
                            opacity: "1"
                        })
                    }
                })
                $(".gift").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    complete: function () {
                        $(".gift").velocity({
                            display: "none"
                        })
                    }
                })
            }
            if (origin.index == 3 && direction == 'down') {
                $(".gift").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    complete: function () {
                        $(".gift").velocity({
                            display: "none"
                        })
                        $(".imgFlower svg").removeClass('animation-stroke');
                    }
                })

                $(".imgFlower__wrap").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400
                })
            }
            if (origin.index == 4 && direction == 'up') {
                $(".gift").velocity({
                    display: "block"
                }, {
                    delay: 0,
                    duration: 400,
                    complete: function () {
                        $(".gift").velocity({
                            opacity: "1"
                        })
                        $(".imgFlower svg").addClass('animation-stroke');
                    }
                })

                $(".imgFlower__wrap").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 400
                })
            }
        }
    })

    fullpage_api.setAllowScrolling(false);

    $('#moveTo').on('click', function () {
        // fullpage_api.moveTo('start', 1);
        //console.log('start');
    });

    $('.-js-popup').on('click', function () {
        fullpage_api.setAllowScrolling(false);
        $('.popupOverlay').addClass('active');
    });
    $('.-js-cpopup').on('click', function () {
        fullpage_api.setAllowScrolling(true);
        $('.popupOverlay').removeClass('active');
    });

    //copy to clipboard
    function copy(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();
    }

    copytoclip = function (element) {
        copy(element);
        var msgRek = "<div class='giftCopy'>Berhasil menyalin nomor rekening</div>";
        (function () {
            setTimeout(function () {
                $(".giftCopy").remove();
            }, 3000);
        }($(".giftContent ul").after(msgRek)));
    };
});

$(window).on('load', function () {
    setTimeout(function () {
        $("#preloader").fadeOut(700, function () {
            $('#preloader').remove();
            $(".bgOrnament").removeClass('hide');
            $(".bgOrnament--bottom").removeClass('hide');
            $(".bgBorder").removeClass('hide');
            fullpage_api.setAllowScrolling(true);
            //console.log('remove');
        })
    }, 2000);
})

function music() {
    var myAudio = $("#audio")[0];
    return myAudio.paused ? myAudio.play() : myAudio.pause();
}

// function refreshPage() {
//     window.location.reload(false);
// }