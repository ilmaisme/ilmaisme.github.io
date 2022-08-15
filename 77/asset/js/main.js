$(document).ready(function () {
    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        //navigation: true,
        anchors: ['cover', 'start'],
        lockAnchors: true,
        //scrollOverflow: true,

        onLeave: function (origin, destination, direction) {
            var leavingSection = this;

            if (origin.index == 0 && direction == 'down') {
                $(".articleText2").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".articleText1").velocity({
                            opacity: "0"
                        })
                        $(".clockTxt1").velocity({
                            opacity: "0"
                        })
                        $(".bgText__wrap").removeClass('active');
                    }
                })
            }
            if (origin.index == 1 && direction == 'up') {
                $(".articleText1").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".articleText2").velocity({
                            opacity: "0"
                        })
                        $(".clockTxt1").velocity({
                            opacity: "1"
                        })
                        $(".bgText__wrap").addClass('active');
                    }
                })
            }
            if (origin.index == 1 && direction == 'down') {
                $(".articleText2").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".bgNusantara").velocity({
                            opacity: "0"
                        })
                        $(".clockWrap1").velocity({
                            opacity: "0"
                        })
                    }
                })
                $(".articleText3").velocity({
                    opacity: "1"
                }, {
                    delay: 400,
                    duration: 400,
                    begin: function () {
                        $(".bgColor--red").velocity({
                            opacity: "1"
                        })
                    },
                    complete: function () {
                        $(".imgSoekarno").velocity({
                            left: "0"
                        })
                        $(".clockWrap2").velocity({
                            opacity: "1"
                        })
                    }
                })
            }
            if (origin.index == 2 && direction == 'up') {
                $(".articleText2").velocity({
                    opacity: "1"
                }, {
                    delay: 400,
                    duration: 400,
                    begin: function () {
                        $(".bgNusantara").velocity({
                            opacity: "1"
                        })
                        $(".clockWrap1").velocity({
                            opacity: "1"
                        })
                    }
                })
                $(".articleText3").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".bgColor--red").velocity({
                            opacity: "0"
                        })
                    },
                    complete: function () {
                        $(".imgSoekarno").velocity({
                            left: "100%"
                        })
                        $(".clockWrap2").velocity({
                            opacity: "0"
                        })
                    }
                })
            }
            if (origin.index == 2 && direction == 'down') {
                $(".articleText3").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".clockWrap2").velocity({
                            opacity: "0"
                        })
                        $(".imgSoekarno").velocity({
                            left: "100%"
                        })
                    }
                })
                $(".articleText4").velocity({
                    opacity: "1"
                }, {
                    delay: 400,
                    duration: 400,
                    complete: function () {
                        $(".imgSoeharto").velocity({
                            left: "0"
                        })
                        $(".clockWrap3").velocity({
                            opacity: "1"
                        })
                    }
                })
            }
            if (origin.index == 3 && direction == 'up') {
                $(".articleText3").velocity({
                    opacity: "1"
                }, {
                    delay: 400,
                    duration: 400,
                    begin: function () {
                        $(".imgSoekarno").velocity({
                            left: "0"
                        })
                        $(".clockWrap2").velocity({
                            opacity: "1"
                        })
                    }
                })
                $(".articleText4").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    complete: function () {
                        $(".imgSoeharto").velocity({
                            left: "100%"
                        })
                        $(".clockWrap3").velocity({
                            opacity: "0"
                        })
                    }
                })
            }
            if (origin.index == 3 && direction == 'down') {
                $(".articleText4").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".clockWrap3").velocity({
                            opacity: "0"
                        })
                        $(".imgSoeharto").velocity({
                            left: "100%"
                        })
                    }
                })
                $(".articleText5").velocity({
                    opacity: "1"
                }, {
                    delay: 400,
                    duration: 400,
                    complete: function () {
                        $(".imgSby").velocity({
                            left: "0"
                        })
                        $(".clockWrap4").velocity({
                            opacity: "1"
                        })
                    }
                })
            }
            if (origin.index == 4 && direction == 'up') {
                $(".articleText4").velocity({
                    opacity: "1"
                }, {
                    delay: 400,
                    duration: 400,
                    begin: function () {
                        $(".imgSoeharto").velocity({
                            left: "0"
                        })
                        $(".clockWrap3").velocity({
                            opacity: "1"
                        })
                    }
                })
                $(".articleText5").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    complete: function () {
                        $(".imgSby").velocity({
                            left: "100%"
                        })
                        $(".clockWrap4").velocity({
                            opacity: "0"
                        })
                    }
                })
            }
            if (origin.index == 4 && direction == 'down') {
                $(".articleText5").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".clockWrap4").velocity({
                            opacity: "0"
                        })
                        $(".imgSby").velocity({
                            left: "100%"
                        })
                    }
                })
                $(".articleText6").velocity({
                    opacity: "1"
                }, {
                    delay: 400,
                    duration: 400,
                    complete: function () {
                        $(".imgJokowi").velocity({
                            left: "0"
                        })
                        $(".clockWrap5").velocity({
                            opacity: "1"
                        })
                    }
                })
            }
            if (origin.index == 5 && direction == 'up') {
                $(".articleText5").velocity({
                    opacity: "1"
                }, {
                    delay: 400,
                    duration: 400,
                    begin: function () {
                        $(".imgSby").velocity({
                            left: "0"
                        })
                        $(".clockWrap4").velocity({
                            opacity: "1"
                        })
                    }
                })
                $(".articleText6").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    complete: function () {
                        $(".imgJokowi").velocity({
                            left: "100%"
                        })
                        $(".clockWrap5").velocity({
                            opacity: "0"
                        })
                    }
                })
            }
            if (origin.index == 5 && direction == 'down') {
                $(".article6").velocity({
                    bottom: "100%"
                }, {
                    delay: 0,
                    duration: 400,
                    complete: function () {
                        $(".clockWrap5").velocity({
                            opacity: "0"
                        })
                    }
                })
                $(".articleText7").velocity({
                    bottom: "0"
                }, {
                    delay: 400,
                    duration: 400,
                    complete: function () {
                        $(".clockWrap6").velocity({
                            opacity: "1"
                        })
                        $(".bgText__wrap").addClass('active');
                    }
                })
            }
            if (origin.index == 6 && direction == 'up') {
                $(".article6").velocity({
                    bottom: "0"
                }, {
                    delay: 400,
                    duration: 400,
                    complete: function () {
                        $(".clockWrap5").velocity({
                            opacity: "1"
                        })
                    }
                })
                $(".articleText7").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    complete: function () {
                        $(".clockWrap6").velocity({
                            opacity: "0"
                        })
                        $(".bgText__wrap").removeClass('active');
                    }
                })
            }
            if (origin.index == 6 && direction == 'down') {
                $(".articleText7").velocity({
                    bottom: "100%"
                }, {
                    delay: 0,
                    duration: 400
                })
                $(".articleText8").velocity({
                    bottom: "0"
                }, {
                    delay: 400,
                    duration: 400
                })
            }
            if (origin.index == 7 && direction == 'up') {
                $(".articleText7").velocity({
                    bottom: "0"
                }, {
                    delay: 400,
                    duration: 400
                })
                $(".articleText8").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 400
                })
            }
            if (origin.index == 7 && direction == 'down') {
                $(".articleText9").velocity({
                    opacity: "1"
                }, {
                    delay: 400,
                    duration: 400
                })
                $(".articleText8").velocity({
                    bottom: "100%"
                }, {
                    delay: 0,
                    duration: 400,
                    complete: function () {
                        $(".imgClock").velocity({
                            opacity: "0"
                        })
                        $(".clockWrap6").velocity({
                            opacity: "0"
                        })
                        $(".bgText__wrap").removeClass('active');
                    }
                })
            }
            if (origin.index == 8 && direction == 'up') {
                $(".articleText9").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400
                })
                $(".articleText8").velocity({
                    bottom: "0"
                }, {
                    delay: 400,
                    duration: 400,
                    complete: function () {
                        $(".imgClock").velocity({
                            opacity: "1"
                        })
                        $(".clockWrap6").velocity({
                            opacity: "1"
                        })
                        $(".bgText__wrap").addClass('active');
                    }
                })
            }
        }
    })

    // fullpage_api.setAllowScrolling(false);

    $('#moveTo').on('click', function () {
        fullpage_api.moveTo('start', 1);
        //console.log('start');
    });
});

function refreshPage() {
    window.location.reload(false);
}