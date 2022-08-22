$(document).ready(function () {
    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        //navigation: true,
        anchors: ['cover', 'start', 'soekarno', 'soeharto', 'sby', 'jokowi', 'kalimantan', 'video', 'credit', 'ikn'],
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
                        $(".articlewrap1").velocity({
                            opacity: "0"
                        })
                        $(".clockTxt1").velocity({
                            opacity: "0"
                        })
                        $(".bgText__wrap").removeClass('active');
                    }
                })
                $(".coverScroll").velocity({
                    display: "none"
                }, {
                    delay: 0,
                    duration: 0
                })
            }
            if (origin.index == 1 && direction == 'up') {
                $(".articlewrap1").velocity({
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
                $(".coverScroll").velocity({
                    display: "block"
                }, {
                    delay: 600,
                    duration: 0
                })
            }
            if (origin.index == 1 && direction == 'down') {
                $(".articleText2").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".articleText1").velocity({
                            opacity: "0"
                        })
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
                            left: "0",
                            opacity: "1"
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
                        $(".articleText1").velocity({
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
                            left: "100%",
                            opacity: "0"
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
                            left: "100%",
                            opacity: "0"
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
                            left: "0",
                            opacity: "1"
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
                            left: "0",
                            opacity: "1"
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
                            left: "100%",
                            opacity: "0"
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
                            left: "100%",
                            opacity: "0"
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
                            left: "0",
                            opacity: "1"
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
                            left: "0",
                            opacity: "1"
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
                            left: "100%",
                            opacity: "0"
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
                            left: "100%",
                            opacity: "0"
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
                            left: "0",
                            opacity: "1"
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
                            left: "0",
                            opacity: "1"
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
                            left: "100%",
                            opacity: "0"
                        })
                        $(".clockWrap5").velocity({
                            opacity: "0"
                        })
                    }
                })
            }
            if (origin.index == 5 && direction == 'down') {
                //go kalimantan
                $(".article6").velocity({
                    bottom: "100%"
                }, {
                    delay: 0,
                    duration: 400,
                    complete: function () {
                        $(".clockWrap5").velocity({
                            opacity: "0"
                        })
                        $(".imgJokowi").velocity({
                            left: "100%",
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
                $(".clockWrap7").velocity({
                    opacity: "0"
                })
                $(".clockWrap8").velocity({
                    opacity: "0"
                })
                $(".clockWrap9").velocity({
                    opacity: "0"
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
                        $(".imgJokowi").velocity({
                            left: "0",
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
                $(".articleText8").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 0
                })
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
                    duration: 400,
                    begin: function () {}
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
                $(".sectionCredit").velocity({
                    opacity: "1"
                }, {
                    delay: 0,
                    duration: 0
                })
                $(".articleText9").velocity({
                    opacity: "1"
                }, {
                    delay: 400,
                    duration: 400,
                    begin: function () {}
                })
                $(".creditName").velocity({
                    left: "0"
                }, {
                    delay: 600,
                    duration: 400,
                    complete: function () {
                        $(".creditName").removeClass('nactive');
                    }
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
                fullpage_api.setAllowScrolling(false, 'down');
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
                fullpage_api.setAllowScrolling(true, 'down');
            }
            if (origin.index == 8 && direction == 'down') {
                //go ikn
                fullpage_api.setAllowScrolling(false, 'up');
            }
            if (origin.index == 9 && direction == 'up') {
                $(".clockWrap7").velocity({
                    opacity: "0"
                })
                $(".sectionCredit").removeClass('opacIkn');
                $(".articleText9").velocity({
                    opacity: "0"
                }, {
                    delay: 0,
                    duration: 400
                })
            }
            if (origin.index == 9 && direction == 'down') {
                //go ikn build
                fullpage_api.setAllowScrolling(true, 'up');
                $(".iknWrap1").velocity({
                    bottom: "100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".clockWrap7").velocity({
                            opacity: "0"
                        })
                    }
                })
                $(".iknWrap2").velocity({
                    bottom: "100%"
                }, {
                    delay: 400,
                    duration: 400,
                    begin: function () {
                        $(".clockWrap8").velocity({
                            opacity: "1"
                        })
                    },
                    complete: function () {
                        $(".iknBuild__item").velocity({
                            opacity: "1"
                        })
                    }
                })
            }
            if (origin.index == 10 && direction == 'up') {
                //go ikn
                fullpage_api.setAllowScrolling(false, 'up');
                $(".iknWrap1").velocity({
                    bottom: "0"
                }, {
                    delay: 400,
                    duration: 400,
                    begin: function () {
                        $(".clockWrap7").velocity({
                            opacity: "1"
                        })
                    }
                })
                $(".iknWrap2").velocity({
                    bottom: "-100%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".clockWrap8").velocity({
                            opacity: "0"
                        })
                    }
                })
            }
            if (origin.index == 10 && direction == 'down') {
                //go ikn princ
                $(".bgStatic__wrap").addClass('active');
                $(".iknWrap2").velocity({
                    bottom: "200%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".clockWrap8").velocity({
                            opacity: "0"
                        })
                    }
                })
                $(".iknWrap3").velocity({
                    bottom: "200%"
                }, {
                    delay: 400,
                    duration: 400,
                    begin: function () {
                        $(".clockWrap9").velocity({
                            opacity: "1"
                        })
                    },
                    complete: function () {
                        $(".iknClose").velocity({
                            display: "block"
                        })
                    }
                })
            }
            if (origin.index == 11 && direction == 'up') {
                //go ikn build                
                $(".iknWrap2").velocity({
                    bottom: "100%"
                }, {
                    delay: 400,
                    duration: 400,
                    begin: function () {
                        $(".clockWrap8").velocity({
                            opacity: "1"
                        })
                    }
                })
                $(".iknWrap3").velocity({
                    bottom: "-200%"
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".clockWrap9").velocity({
                            opacity: "0"
                        })
                    },
                    complete: function () {}
                })
            }
        }
    })

    // fullpage_api.setAllowScrolling(false);

    $('#moveTo').on('click', function () {
        fullpage_api.moveTo('start', 1);
        //console.log('start');
    });

    $('#goIkn').on('click', function () {
        $(this).addClass('active');
        setTimeout(function () {
            fullpage_api.setAllowScrolling(true, 'down');
            fullpage_api.moveTo('ikn', 9);
            $(".bgStatic__wrap").addClass('active');
            $(".clockWrap7").removeClass('opacIkn');
            $(".clockWrap8").removeClass('opacIkn');
            $(".clockWrap9").removeClass('opacIkn');
            $(".articleText8").addClass('opacIkn');
            $(".sectionCredit").addClass('opacIkn');
            $(".clockWrap6").addClass('opacIkn');
            $(".bgText__wrap").addClass('nactive');
            $(".bgIkn").velocity({
                opacity: "1"
            })
            $(".bgIkn").velocity({
                bottom: "0"
            }, {
                delay: 0,
                duration: 400,
                complete: function () {
                    $(".iknItem").removeClass('pushTop');
                    $(".clockWrap7").velocity({
                        opacity: "1"
                    })
                }
            })
            fullpage_api.setAllowScrolling(false, 'up');
            //console.log('ikn');
        }, 700);
    });

    $('#closeIkn').on('click', function () {
        fullpage_api.moveTo('kalimantan', 6);
        $('#goIkn').removeClass('active');
        $(".clockWrap6").removeClass('opacIkn');
        $(".bgStatic__wrap").removeClass('active');
        $(".bgText__wrap").removeClass('nactive');
        $(".articleText7").velocity({
            bottom: "0"
        }, {
            delay: 0,
            duration: 400
        })
        $(".articleText8").velocity({
            opacity: "0"
        }, {
            delay: 0,
            duration: 0
        })
        $(".sectionCredit").velocity({
            opacity: "0"
        }, {
            delay: 0,
            duration: 0
        })
        $(".bgIkn").velocity({
            bottom: "-100%"
        }, {
            delay: 0,
            duration: 0,
            begin: function () {
                $(".iknItem").addClass('pushTop');
            },
            complete: function () {
                $(".clockWrap6").velocity({
                    opacity: "1"
                })
                $(".bgText__wrap").addClass('active');
            }
        })
        $(".bgIkn").velocity({
            opacity: "0"
        }, {
            delay: 0,
            duration: 0
        })
        $(".iknWrap1").velocity({
            bottom: "0"
        }, {
            delay: 0,
            duration: 0
        })
        $(".iknWrap2").velocity({
            bottom: "-100%"
        }, {
            delay: 0,
            duration: 0
        })
        $(".iknWrap3").velocity({
            bottom: "-200%"
        }, {
            delay: 0,
            duration: 0
        })
        $(".articleText8").removeClass('opacIkn');
        $(".sectionCredit").removeClass('opacIkn');
        $(".articleText8").velocity({
            bottom: "-100%"
        }, {
            delay: 0,
            duration: 400
        })
        $(".clockWrap7").addClass('opacIkn');
        $(".clockWrap8").addClass('opacIkn');
        $(".clockWrap9").addClass('opacIkn');
        fullpage_api.setAllowScrolling(true);
        console.log('close ikn');
    });
});

var video = $(".preloaderVid");
$(window).on('load', function () {
    setTimeout(function () {
        $("#loaderImg").fadeOut(700, function () {
            video.removeClass("opac0");
            setTimeout(function () {
                $("#animationPreload").fadeOut(700, function () {
                    $('.preloader').remove();
                    $(".imgCover").removeClass("opac0");
                    $(".coverCol").removeClass("opac0");
                    fullpage_api.setAllowScrolling(true);
                    //console.log('remove');
                })
            }, 2200);
        })
    }, 4000);
})

function refreshPage() {
    window.location.reload(false);
}