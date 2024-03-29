var is_mobile = false;

/* s: cover password */
function focusOnMyInputBox() {
    document.getElementById("pass1").focus();
}

$(".passInput").keyup(function (e) {
    if (this.value.length == this.maxLength) {
        $(this).next('.passInput').focus();
        if ($(this).is(':last-child')) {
            $('#passSubmit').focus();
        }
    }
    if (e.keyCode == 8) {
        $(this).prev('.passInput').focus();
    }
});

function validateForm() {
    var isValid = false;
    // var isValid = true;
    $('.passInput').each(function () {
        if (($("#pass1").val() == 'B' ||
                $("#pass1").val() == 'b') &&
            ($("#pass2").val() == 'C' ||
                $("#pass2").val() == 'c') &&
            ($("#pass3").val() == 'A' ||
                $("#pass3").val() == 'a')) {
            isValid = true;
        }
    });
    //console.log($("#pass1").val(), $("#pass2").val(), $("#pass3").val())
    return isValid;
}

$('#passSubmit').on('click', function () {
    if (validateForm() == true) {
        $('.passLogo').addClass('active');
        $(".intro").velocity({
            opacity: "1"
        }, {
            delay: 700,
            duration: 700,
            begin: function () {
                //console.log('unlock');
                $(".bgColor__white").removeClass("opac0");
                $(".cover").addClass("opac0");
                $(".pass").fadeOut(300);
            }
        });
        $(".introImg").velocity({
            top: "0"
        }, {
            delay: 700,
            duration: 700,
            complete: function () {
                $('.scroll-guide').removeClass('opac0');
            }
        });
        $(".introTxt1").velocity({
            top: "0"
        }, {
            delay: 1100,
            duration: 700
        });
        $(".introTxt2").velocity({
            top: "0"
        }, {
            delay: 1400,
            duration: 700,
            complete: function () {
                fullpage_api.moveTo('intro', 1);
                //console.log('intro');
            }
        });
        $('.pass').addClass('disable');
        $('.passLabel').removeClass('active');
        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);
    } else {
        $('.passLabel').addClass('active');
        $(".passInput").val('');
        focusOnMyInputBox()
    }
});

/* e: cover password */

$(document).ready(function () {
    if ($('#some-element').css('display') == 'none') {
        is_mobile = true;
        // mobile
        //console.log('mobile')

        /* s: event button Back */
        var commpercent = ($(".communityList").width()) * (58 / 100);
        $('.stepBack').on('click', function () {
            fullpage_api.moveTo('community1', 4);
            $(".community").velocity({
                opacity: "1"
            }, {
                delay: 0,
                duration: 700,
                begin: function () {
                    $(".bgColor__community").removeClass("opac0");
                    $(".community").addClass("active");
                }
            });
            $(".communityList").animate( { scrollLeft: 0 }, 1000);
            // $(".communityItem2").velocity({
            //     top: "100vh"
            // }, {
            //     delay: 0,
            //     duration: 0,
            //     begin: function () {
            //         $(".communityItem").addClass("disable");
            //         $(".communityItem2").velocity("stop", true);
            //     }
            // });
            // $(".communityItem3").velocity({
            //     top: "100vh"
            // }, {
            //     delay: 0,
            //     duration: 0,
            //     begin: function () {
            //         $(".communityItem3").velocity("stop", true);
            //     }
            // });
            // $(".communityItem4").velocity({
            //     top: "100vh"
            // }, {
            //     delay: 0,
            //     duration: 0,
            //     begin: function () {
            //         $(".communityItem4").velocity("stop", true);
            //     }
            // });
            // $(".communityItem1").velocity({
            //     top: "0"
            // }, {
            //     delay: 400,
            //     duration: 700,
            //     begin: function () {
            //         $(".communityItem").velocity("stop", false);
            //         $(".communityItem1").removeClass("disable");
            //     },
            //     complete: function () {
            //         $(".communityItem1 .articleContent").removeClass("opac0");
            //         $(".communityItem2").removeClass("disable");
            //         $(".communityItem3").removeClass("disable");
            //         $(".communityItem4").removeClass("disable");
            //     }
            // });
            $(".step").velocity({
                opacity: "0"
            }, {
                delay: 0,
                duration: 700,
                begin: function () {
                    $(".bgColor__white").removeClass("full");
                    $(".step").removeClass("active");
                }
            });
            $(".stepItem").velocity({
                top: "100vh"
            }, {
                delay: 0,
                duration: 700,
                begin: function () {
                    $(".stepItem .articleContent").removeClass("opac0");
                    $(".stepArrow").removeClass("active");
                }
            });
        })
        /* e: event button Back */

        /* s: append section for more scroll */
        var n = 8;
        $(".fullpage").append(new Array(++n).join('<section class="section"></section>'));
        /* e: append section for more scroll */

        new fullpage('#fullpage', {
            //options here
            autoScrolling: true,
            scrollHorizontally: true,
            // navigation: true,
            anchors: ['cover', 'intro', 'partnership', 'business', 'community1', 'community2', 'community3', 'community4', 'step1', 'step2', 'step3', 'step4', 'step5', 'step6'],
            lockAnchors: true,
            //scrollOverflow: true,

            onLeave: function (origin, destination, direction) {
                var leavingSection = this;

                if (origin.index == 0 && direction == 'down') {
                    $(".pass").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".pass").removeClass("disable");
                        },
                        complete: function () {
                            focusOnMyInputBox()
                        }
                    });
                    if ($('.pass').css('display') == 'none') {
                        $(".bgColor__white").removeClass("opac0");
                        $(".cover").addClass("opac0");
                        $(".intro").velocity({
                            opacity: "1"
                        }, {
                            delay: 0,
                            duration: 700,
                            complete: function () {}
                        });
                        $(".cover").velocity({
                            opacity: "0"
                        }, {
                            delay: 0,
                            duration: 700,
                            begin: function () {},
                            complete: function () {}
                        });
                        $('.scroll-guide').removeClass('opac0');
                        //console.log("going through pass")
                    } else {
                        fullpage_api.setAllowScrolling(false);
                        fullpage_api.setKeyboardScrolling(false);
                        //console.log("display pass")
                    }
                }
                if (origin.index == 1 && direction == 'up') {
                    $(".intro").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".bgColor__white").addClass("opac0");
                        }
                    });
                    $(".cover").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {},
                        complete: function () {}
                    });
                    $('.scroll-guide').addClass('opac0');
                    //console.log('up cover');
                }
                if (origin.index == 1 && direction == 'down') {
                    //console.log('down intro');
                    $(".introTxt").addClass("opac0");
                    $(".partnership").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".partnershipItem1").velocity({
                        left: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        complete: function () {
                            $(".partnershipItem1 .articleContent").removeClass("opac0");
                        }
                    });
                    $(".partnershipItem2").velocity({
                        top: "0"
                    }, {
                        delay: 400,
                        duration: 700,
                        complete: function () {
                            $(".partnershipItem2 .articleContent").removeClass("opac0");
                        }
                    });
                    $(".partnershipItem3").velocity({
                        right: "0"
                    }, {
                        delay: 800,
                        duration: 700,
                        complete: function () {
                            $(".partnershipItem3 .articleContent").removeClass("opac0");
                        }
                    });
                }
                if (origin.index == 2 && direction == 'up') {
                    //console.log('up intro');
                    $(".introTxt").removeClass("opac0");
                    $(".partnership").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".partnershipItem1").velocity({
                        left: "-100vw"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".partnershipItem2").velocity({
                        top: "100vh"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".partnershipItem3").velocity({
                        right: "-100vw"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                }
                if (origin.index == 2 && direction == 'down') {
                    $(".partnership").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".introImg").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".business").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".businessTxt1").velocity({
                        top: "0"
                    }, {
                        delay: 400,
                        duration: 700
                    });
                    $(".businessTxt2").velocity({
                        top: "0"
                    }, {
                        delay: 800,
                        duration: 700
                    });
                }
                if (origin.index == 3 && direction == 'up') {
                    $(".partnership").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".introImg").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".business").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".businessTxt").velocity({
                        top: "100vh"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                }
                if (origin.index == 3 && direction == 'down') {
                    $(".business").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".community").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".bgColor__community").removeClass("opac0");
                            $(".community").addClass("active");
                        }
                    });
                    $(".communityItem1").velocity({
                        top: "0"
                    }, {
                        delay: 400,
                        duration: 700
                    });
                    $(".communityItem2").velocity({
                        top: "0"
                    }, {
                        delay: 800,
                        duration: 700
                    });
                    $(".communityItem3").velocity({
                        top: "0"
                    }, {
                        delay: 1200,
                        duration: 700
                    });
                    $(".communityItem4").velocity({
                        top: "0"
                    }, {
                        delay: 1600,
                        duration: 700
                    });
                }
                if (origin.index == 4 && direction == 'up') {
                    $(".business").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".community").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".bgColor__community").addClass("opac0");
                            $(".community").removeClass("active");
                        }
                    });
                    $(".communityItem").velocity({
                        top: "100vh"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    // $(".communityItem").velocity({
                    //     top: "100vh"
                    // }, {
                    //     delay: 0,
                    //     duration: 700,
                    //     complete: function () {
                    //         $(".communityItem .articleContent").addClass("opac0");
                    //     }
                    // });                    
                    $(".communityList").animate( { scrollLeft: 0 }, 1000);
                }
                if (origin.index == 4 && direction == 'down') {
                    // $(".communityItem1").velocity({
                    //     top: "100vh"
                    // }, {
                    //     delay: 0,
                    //     duration: 700,
                    //     complete: function () {
                    //         $(".communityItem1 .articleContent").addClass("opac0");
                    //     }
                    // });                    
                    $(".communityList").animate( { scrollLeft: commpercent }, 1000);
                    // $(".communityItem2").velocity({
                    //     top: "0"
                    // }, {
                    //     delay: 0,
                    //     duration: 700,
                    //     complete: function () {
                    //         $(".communityItem2 .articleContent").removeClass("opac0");
                    //     }
                    // });
                }
                if (origin.index == 5 && direction == 'up') {
                    // $(".communityItem1").velocity({
                    //     top: "0"
                    // }, {
                    //     delay: 0,
                    //     duration: 700,
                    //     complete: function () {
                    //         $(".communityItem1 .articleContent").removeClass("opac0");
                    //     }
                    // });
                    $(".communityList").animate( { scrollLeft: 0 }, 1000);
                    // $(".communityItem2").velocity({
                    //     top: "100vh"
                    // }, {
                    //     delay: 0,
                    //     duration: 700,
                    //     complete: function () {
                    //         $(".communityItem2 .articleContent").addClass("opac0");
                    //     }
                    // });
                }
                if (origin.index == 5 && direction == 'down') {
                    // $(".communityItem2").velocity({
                    //     top: "100vh"
                    // }, {
                    //     delay: 0,
                    //     duration: 700,
                    //     complete: function () {
                    //         $(".communityItem2 .articleContent").addClass("opac0");
                    //     }
                    // });
                    $(".communityList").animate( { scrollLeft: commpercent*2 }, 1000);
                    // $(".communityItem3").velocity({
                    //     top: "0"
                    // }, {
                    //     delay: 0,
                    //     duration: 700,
                    //     complete: function () {
                    //         $(".communityItem3 .articleContent").removeClass("opac0");
                    //     }
                    // });
                }
                if (origin.index == 6 && direction == 'up') {
                    // $(".communityItem2").velocity({
                    //     top: "0"
                    // }, {
                    //     delay: 0,
                    //     duration: 700,
                    //     complete: function () {
                    //         $(".communityItem2 .articleContent").removeClass("opac0");
                    //     }
                    // });
                    $(".communityList").animate( { scrollLeft: commpercent }, 1000);
                    // $(".communityItem3").velocity({
                    //     top: "100vh"
                    // }, {
                    //     delay: 0,
                    //     duration: 700,
                    //     complete: function () {
                    //         $(".communityItem3 .articleContent").addClass("opac0");
                    //     }
                    // });
                }
                if (origin.index == 6 && direction == 'down') {
                    // $(".communityItem3").velocity({
                    //     top: "100vh"
                    // }, {
                    //     delay: 0,
                    //     duration: 700,
                    //     complete: function () {
                    //         $(".communityItem3 .articleContent").addClass("opac0");
                    //     }
                    // });
                    $(".communityList").animate( { scrollLeft: commpercent*3 }, 1000);
                    // $(".communityItem4").velocity({
                    //     top: "0"
                    // }, {
                    //     delay: 0,
                    //     duration: 700,
                    //     complete: function () {
                    //         $(".communityItem4 .articleContent").removeClass("opac0");
                    //     }
                    // });
                }
                if (origin.index == 7 && direction == 'up') {
                    // $(".communityItem3").velocity({
                    //     top: "0"
                    // }, {
                    //     delay: 0,
                    //     duration: 700,
                    //     complete: function () {
                    //         $(".communityItem3 .articleContent").removeClass("opac0");
                    //     }
                    // });
                    $(".communityList").animate( { scrollLeft: commpercent*2 }, 1000);
                    // $(".communityItem4").velocity({
                    //     top: "100vh"
                    // }, {
                    //     delay: 0,
                    //     duration: 700,
                    //     complete: function () {
                    //         $(".communityItem4 .articleContent").addClass("opac0");
                    //     }
                    // });
                }
                if (origin.index == 7 && direction == 'down') {
                    $(".community").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".bgColor__community").addClass("opac0");
                            $(".community").removeClass("active");
                        }
                    });
                    // $(".communityItem").velocity({
                    //     top: "100vh"
                    // }, {
                    //     delay: 0,
                    //     duration: 700,
                    //     complete: function () {
                    //         $(".communityItem .articleContent").addClass("opac0");
                    //     }
                    // });
                    $(".step").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".bgColor__white").addClass("full");
                            $(".step").addClass("active");
                        }
                    });
                    $(".stepItem1").velocity({
                        top: "0"
                    }, {
                        delay: 400,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow1").addClass("active");
                        },
                        complete: function () {
                            $(".stepItem1 .articleContent").removeClass("opac0");
                        }
                    });
                    // $(".stepItem2").velocity({
                    //     opacity: "1"
                    // }, {
                    //     delay: 1200,
                    //     duration: 700,
                    //     begin: function () {
                    //         $(".stepArrow2").addClass("active");
                    //     },
                    //     complete: function () {
                    //         $(".stepItem2 .articleContent").removeClass("opac0");
                    //     }
                    // });
                    // $(".stepItem3").velocity({
                    //     opacity: "1"
                    // }, {
                    //     delay: 2000,
                    //     duration: 700,
                    //     begin: function () {
                    //         $(".stepArrow3").addClass("active");
                    //     },
                    //     complete: function () {
                    //         $(".stepItem3 .articleContent").removeClass("opac0");
                    //     }
                    // });
                    // $(".stepItem4").velocity({
                    //     opacity: "1"
                    // }, {
                    //     delay: 3200,
                    //     duration: 700,
                    //     begin: function () {
                    //         $(".stepArrow4").addClass("active");
                    //     },
                    //     complete: function () {
                    //         $(".stepItem4 .articleContent").removeClass("opac0");
                    //     }
                    // });
                    // $(".stepItem5").velocity({
                    //     opacity: "1"
                    // }, {
                    //     delay: 4000,
                    //     duration: 700,
                    //     begin: function () {
                    //         $(".stepArrow5").addClass("active");
                    //     },
                    //     complete: function () {
                    //         $(".stepItem5 .articleContent").removeClass("opac0");
                    //     }
                    // });
                    // $(".stepItem6").velocity({
                    //     opacity: "1"
                    // }, {
                    //     delay: 4800,
                    //     duration: 700,
                    //     begin: function () {
                    //         $(".stepArrow6").addClass("active");
                    //     },
                    //     complete: function () {
                    //         $(".stepItem6 .articleContent").removeClass("opac0");
                    //     }
                    // });
                }
                if (origin.index == 8 && direction == 'up') {
                    $(".community").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".bgColor__community").removeClass("opac0");
                            $(".community").addClass("active");
                        }
                    });
                    // $(".communityItem4").velocity({
                    //     top: "0"
                    // }, {
                    //     delay: 0,
                    //     duration: 700,
                    //     complete: function () {
                    //         $(".communityItem4 .articleContent").removeClass("opac0");
                    //     }
                    // });
                    $(".communityList").animate( { scrollLeft: commpercent*3 }, 1000);
                    $(".step").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".bgColor__white").removeClass("full");
                            $(".step").removeClass("active");
                        }
                    });
                    $(".stepItem").velocity({
                        top: "100vh"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".stepItem .articleContent").removeClass("opac0");
                            $(".stepArrow").removeClass("active");
                        }
                    });
                }
                if (origin.index == 8 && direction == 'down') {
                    $(".stepItem1").velocity({
                        top: "100vh"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow1").removeClass("active");
                        },
                        complete: function () {
                            $(".stepItem1 .articleContent").addClass("opac0");
                        }
                    });
                    $(".stepItem2").velocity({
                        top: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow2").addClass("active");
                        },
                        complete: function () {
                            $(".stepItem2 .articleContent").removeClass("opac0");
                        }
                    });
                }
                if (origin.index == 9 && direction == 'up') {
                    $(".stepItem1").velocity({
                        top: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow1").addClass("active");
                        },
                        complete: function () {
                            $(".stepItem1 .articleContent").removeClass("opac0");
                        }
                    });
                    $(".stepItem2").velocity({
                        top: "100vh"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow2").removeClass("active");
                        },
                        complete: function () {
                            $(".stepItem2 .articleContent").addClass("opac0");
                        }
                    });
                }
                if (origin.index == 9 && direction == 'down') {
                    $(".stepItem2").velocity({
                        top: "100vh"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow2").removeClass("active");
                        },
                        complete: function () {
                            $(".stepItem2 .articleContent").addClass("opac0");
                        }
                    });
                    $(".stepItem3").velocity({
                        top: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow3").addClass("active");
                        },
                        complete: function () {
                            $(".stepItem3 .articleContent").removeClass("opac0");
                        }
                    });
                }
                if (origin.index == 10 && direction == 'up') {
                    $(".stepItem2").velocity({
                        top: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow2").addClass("active");
                        },
                        complete: function () {
                            $(".stepItem2 .articleContent").removeClass("opac0");
                        }
                    });
                    $(".stepItem3").velocity({
                        top: "100vh"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow3").removeClass("active");
                        },
                        complete: function () {
                            $(".stepItem3 .articleContent").addClass("opac0");
                        }
                    });
                }
                if (origin.index == 10 && direction == 'down') {
                    $(".stepItem3").velocity({
                        top: "100vh"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow3").removeClass("active");
                        },
                        complete: function () {
                            $(".stepItem3 .articleContent").addClass("opac0");
                        }
                    });
                    $(".stepItem4").velocity({
                        top: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow4").addClass("active");
                        },
                        complete: function () {
                            $(".stepItem4 .articleContent").removeClass("opac0");
                        }
                    });
                }
                if (origin.index == 11 && direction == 'up') {
                    $(".stepItem3").velocity({
                        top: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow3").addClass("active");
                        },
                        complete: function () {
                            $(".stepItem3 .articleContent").removeClass("opac0");
                        }
                    });
                    $(".stepItem4").velocity({
                        top: "100vh"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow4").removeClass("active");
                        },
                        complete: function () {
                            $(".stepItem4 .articleContent").addClass("opac0");
                        }
                    });
                }
                if (origin.index == 11 && direction == 'down') {
                    $(".stepItem4").velocity({
                        top: "100vh"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow4").removeClass("active");
                        },
                        complete: function () {
                            $(".stepItem4 .articleContent").addClass("opac0");
                        }
                    });
                    $(".stepItem5").velocity({
                        top: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow5").addClass("active");
                        },
                        complete: function () {
                            $(".stepItem5 .articleContent").removeClass("opac0");
                        }
                    });
                }
                if (origin.index == 12 && direction == 'up') {
                    $(".stepItem4").velocity({
                        top: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow4").addClass("active");
                        },
                        complete: function () {
                            $(".stepItem4 .articleContent").removeClass("opac0");
                        }
                    });
                    $(".stepItem5").velocity({
                        top: "100vh"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow5").removeClass("active");
                        },
                        complete: function () {
                            $(".stepItem5 .articleContent").addClass("opac0");
                        }
                    });
                }
                if (origin.index == 12 && direction == 'down') {
                    $(".stepItem5").velocity({
                        top: "100vh"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow5").removeClass("active");
                        },
                        complete: function () {
                            $(".stepItem5 .articleContent").addClass("opac0");
                        }
                    });
                    $(".stepItem6").velocity({
                        top: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow6").addClass("active");
                        },
                        complete: function () {
                            $(".stepItem6 .articleContent").removeClass("opac0");
                        }
                    });
                }
                if (origin.index == 13 && direction == 'up') {
                    $(".stepItem5").velocity({
                        top: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow5").addClass("active");
                        },
                        complete: function () {
                            $(".stepItem5 .articleContent").removeClass("opac0");
                        }
                    });
                    $(".stepItem6").velocity({
                        top: "100vh"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow6").removeClass("active");
                        },
                        complete: function () {
                            $(".stepItem6 .articleContent").addClass("opac0");
                        }
                    });
                }
                if (origin.index == 13 && direction == 'down') {
                    $(".step").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".bgColor__white").removeClass("full");
                            $(".step").removeClass("active");
                        }
                    });
                    $(".stepItem").velocity({
                        top: "100vh"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".stepItem .articleContent").removeClass("opac0");
                            $(".stepArrow").removeClass("active");
                        }
                    });
                    $(".soon").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".soonCaption").velocity({
                        top: "0"
                    }, {
                        delay: 400,
                        duration: 700
                    });
                    $(".soonTxt1").velocity({
                        top: "0"
                    }, {
                        delay: 800,
                        duration: 700
                    });
                }
                if (origin.index == 14 && direction == 'up') {
                    $(".step").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".bgColor__white").addClass("full");
                            $(".step").addClass("active");
                        }
                    });
                    $(".stepItem6").velocity({
                        top: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow6").addClass("active");
                        },
                        complete: function () {
                            $(".stepItem6 .articleContent").removeClass("opac0");
                        }
                    });
                    $(".soon").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".soonCaption").velocity({
                        top: "100vh"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".soonTxt1").velocity({
                        top: "100vh"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                }
                if (origin.index == 14 && direction == 'down') {
                    $(".soon").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".soonCaption").velocity({
                        top: "100vh"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".soonTxt1").velocity({
                        top: "100vh"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".credit").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".bgColor__credit").removeClass("opac0");
                            $(".credit").addClass("active");
                        }
                    });
                    $('.scroll-guide').addClass('opac0');
                }
                if (origin.index == 15 && direction == 'up') {
                    $(".soon").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".soonCaption").velocity({
                        top: "0"
                    }, {
                        delay: 400,
                        duration: 700
                    });
                    $(".soonTxt1").velocity({
                        top: "0"
                    }, {
                        delay: 800,
                        duration: 700
                    });
                    $(".credit").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".bgColor__credit").addClass("opac0");
                            $(".credit").removeClass("active");
                        }
                    });
                    $('.scroll-guide').removeClass('opac0');
                }
            }
        })

        fullpage_api.setAllowScrolling(false);
        fullpage_api.setKeyboardScrolling(false);
        // fullpage_api.setAllowScrolling(true);
        // fullpage_api.setKeyboardScrolling(true);
    } else {
        // desktop
        //console.log('desktop')

        /* s: event button Back */
        $('.stepBack').on('click', function () {
            fullpage_api.moveTo('community', 4);
        })
        /* e: event button Back */

        new fullpage('#fullpage', {
            //options here
            autoScrolling: true,
            scrollHorizontally: true,
            // navigation: true,
            anchors: ['cover', 'intro', 'partnership', 'business', 'community', 'step'],
            lockAnchors: true,
            //scrollOverflow: true,

            onLeave: function (origin, destination, direction) {
                var leavingSection = this;

                if (origin.index == 0 && direction == 'down') {
                    $(".pass").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".pass").removeClass("disable");
                        },
                        complete: function () {
                            focusOnMyInputBox()
                        }
                    });
                    if ($('.pass').css('display') == 'none') {
                        $(".bgColor__white").removeClass("opac0");
                        $(".cover").addClass("opac0");
                        $(".intro").velocity({
                            opacity: "1"
                        }, {
                            delay: 0,
                            duration: 700,
                            complete: function () {}
                        });
                        $(".cover").velocity({
                            opacity: "0"
                        }, {
                            delay: 0,
                            duration: 700,
                            begin: function () {},
                            complete: function () {}
                        });
                        $('.scroll-guide').removeClass('opac0');
                        //console.log("going through pass")
                    } else {
                        fullpage_api.setAllowScrolling(false);
                        fullpage_api.setKeyboardScrolling(false);
                        //console.log("display pass")
                    }
                }
                if (origin.index == 1 && direction == 'up') {
                    $(".intro").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".bgColor__white").addClass("opac0");
                        }
                    });
                    $(".cover").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {},
                        complete: function () {}
                    });
                    $('.scroll-guide').addClass('opac0');
                    //console.log('up cover');
                }
                if (origin.index == 1 && direction == 'down') {
                    //console.log('down intro');
                    $(".introTxt").addClass("opac0");
                    $(".partnership").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".partnershipItem1").velocity({
                        left: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        complete: function () {
                            $(".partnershipItem1 .articleContent").removeClass("opac0");
                        }
                    });
                    $(".partnershipItem2").velocity({
                        top: "0"
                    }, {
                        delay: 400,
                        duration: 700,
                        complete: function () {
                            $(".partnershipItem2 .articleContent").removeClass("opac0");
                        }
                    });
                    $(".partnershipItem3").velocity({
                        right: "0"
                    }, {
                        delay: 800,
                        duration: 700,
                        complete: function () {
                            $(".partnershipItem3 .articleContent").removeClass("opac0");
                        }
                    });
                }
                if (origin.index == 2 && direction == 'up') {
                    //console.log('up intro');
                    $(".introTxt").removeClass("opac0");
                    $(".partnership").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".partnershipItem1").velocity({
                        left: "-100vw"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".partnershipItem2").velocity({
                        top: "100vh"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".partnershipItem3").velocity({
                        right: "-100vw"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                }
                if (origin.index == 2 && direction == 'down') {
                    $(".partnership").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".introImg").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".business").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".businessTxt1").velocity({
                        top: "0"
                    }, {
                        delay: 400,
                        duration: 700
                    });
                    $(".businessTxt2").velocity({
                        top: "0"
                    }, {
                        delay: 800,
                        duration: 700
                    });
                }
                if (origin.index == 3 && direction == 'up') {
                    $(".partnership").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".introImg").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".business").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".businessTxt").velocity({
                        top: "100vh"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                }
                if (origin.index == 3 && direction == 'down') {
                    $(".business").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".community").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".bgColor__community").removeClass("opac0");
                            $(".community").addClass("active");
                        }
                    });
                    $(".communityItem1").velocity({
                        top: "0"
                    }, {
                        delay: 400,
                        duration: 700,
                        complete: function () {
                            $(".communityItem1 .articleContent").addClass("opac1");
                        }
                    });
                    $(".communityItem2").velocity({
                        top: "0"
                    }, {
                        delay: 800,
                        duration: 700,
                        complete: function () {
                            $(".communityItem2 .articleContent").addClass("opac1");
                        }
                    });
                    $(".communityItem3").velocity({
                        top: "0"
                    }, {
                        delay: 1200,
                        duration: 700,
                        complete: function () {
                            $(".communityItem3 .articleContent").addClass("opac1");
                        }
                    });
                    $(".communityItem4").velocity({
                        top: "0"
                    }, {
                        delay: 1600,
                        duration: 700,
                        complete: function () {
                            $(".communityItem4 .articleContent").addClass("opac1");
                        }
                    });
                }
                if (origin.index == 4 && direction == 'up') {
                    $(".business").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".community").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".bgColor__community").addClass("opac0");
                            $(".community").removeClass("active");
                        }
                    });
                    $(".communityItem").velocity({
                        top: "100vh"
                    }, {
                        delay: 0,
                        duration: 700,
                        complete: function () {
                            $(".communityItem .articleContent").removeClass("opac1");
                        }
                    });
                }
                if (origin.index == 4 && direction == 'down') {
                    $(".community").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".bgColor__community").addClass("opac0");
                            $(".community").removeClass("active");
                        }
                    });
                    $(".communityItem").velocity({
                        top: "100vh"
                    }, {
                        delay: 0,
                        duration: 700,
                        complete: function () {
                            $(".communityItem .articleContent").removeClass("opac1");
                        }
                    });
                    $(".step").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".bgColor__white").addClass("full");
                            $(".step").addClass("active");
                        }
                    });
                    $(".stepItem1").velocity({
                        opacity: "1"
                    }, {
                        delay: 400,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow1").addClass("active");
                        },
                        complete: function () {
                            $(".stepItem1 .articleContent").removeClass("opac0");
                        }
                    });
                    $(".stepItem2").velocity({
                        opacity: "1"
                    }, {
                        delay: 1200,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow2").addClass("active");
                        },
                        complete: function () {
                            $(".stepItem2 .articleContent").removeClass("opac0");
                        }
                    });
                    $(".stepItem3").velocity({
                        opacity: "1"
                    }, {
                        delay: 2000,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow3").addClass("active");
                        },
                        complete: function () {
                            $(".stepItem3 .articleContent").removeClass("opac0");
                        }
                    });
                    $(".stepItem4").velocity({
                        opacity: "1"
                    }, {
                        delay: 3200,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow4").addClass("active");
                        },
                        complete: function () {
                            $(".stepItem4 .articleContent").removeClass("opac0");
                        }
                    });
                    $(".stepItem5").velocity({
                        opacity: "1"
                    }, {
                        delay: 4000,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow5").addClass("active");
                        },
                        complete: function () {
                            $(".stepItem5 .articleContent").removeClass("opac0");
                        }
                    });
                    $(".stepItem6").velocity({
                        opacity: "1"
                    }, {
                        delay: 4800,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow6").addClass("active");
                        },
                        complete: function () {
                            $(".stepItem6 .articleContent").removeClass("opac0");
                        }
                    });
                }
                if (origin.index == 5 && direction == 'up') {
                    $(".community").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".bgColor__community").removeClass("opac0");
                            $(".community").addClass("active");
                        }
                    });
                    $(".communityItem1").velocity({
                        top: "0"
                    }, {
                        delay: 400,
                        duration: 700,
                        complete: function () {
                            $(".communityItem1 .articleContent").addClass("opac1");
                        }
                    });
                    $(".communityItem2").velocity({
                        top: "0"
                    }, {
                        delay: 800,
                        duration: 700,
                        complete: function () {
                            $(".communityItem2 .articleContent").addClass("opac1");
                        }
                    });
                    $(".communityItem3").velocity({
                        top: "0"
                    }, {
                        delay: 1200,
                        duration: 700,
                        complete: function () {
                            $(".communityItem3 .articleContent").addClass("opac1");
                        }
                    });
                    $(".communityItem4").velocity({
                        top: "0"
                    }, {
                        delay: 1600,
                        duration: 700,
                        complete: function () {
                            $(".communityItem4 .articleContent").addClass("opac1");
                        }
                    });
                    $(".step").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".bgColor__white").removeClass("full");
                            $(".step").removeClass("active");
                        }
                    });
                    $(".stepItem").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".stepItem .articleContent").removeClass("opac0");
                            $(".stepArrow").removeClass("active");
                        }
                    });
                }
                if (origin.index == 5 && direction == 'down') {
                    $(".step").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".bgColor__white").removeClass("full");
                            $(".step").removeClass("active");
                        }
                    });
                    $(".stepItem").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".stepItem .articleContent").removeClass("opac0");
                            $(".stepArrow").removeClass("active");
                        }
                    });
                    $(".soon").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".soonCaption").velocity({
                        top: "0"
                    }, {
                        delay: 400,
                        duration: 700
                    });
                    $(".soonTxt1").velocity({
                        top: "0"
                    }, {
                        delay: 800,
                        duration: 700
                    });
                }
                if (origin.index == 6 && direction == 'up') {
                    $(".step").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".bgColor__white").addClass("full");
                            $(".step").addClass("active");
                        }
                    });
                    $(".stepItem1").velocity({
                        opacity: "1"
                    }, {
                        delay: 400,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow1").addClass("active");
                        },
                        complete: function () {
                            $(".stepItem1 .articleContent").removeClass("opac0");
                        }
                    });
                    $(".stepItem2").velocity({
                        opacity: "1"
                    }, {
                        delay: 1200,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow2").addClass("active");
                        },
                        complete: function () {
                            $(".stepItem2 .articleContent").removeClass("opac0");
                        }
                    });
                    $(".stepItem3").velocity({
                        opacity: "1"
                    }, {
                        delay: 2000,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow3").addClass("active");
                        },
                        complete: function () {
                            $(".stepItem3 .articleContent").removeClass("opac0");
                        }
                    });
                    $(".stepItem4").velocity({
                        opacity: "1"
                    }, {
                        delay: 3200,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow4").addClass("active");
                        },
                        complete: function () {
                            $(".stepItem4 .articleContent").removeClass("opac0");
                        }
                    });
                    $(".stepItem5").velocity({
                        opacity: "1"
                    }, {
                        delay: 4000,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow5").addClass("active");
                        },
                        complete: function () {
                            $(".stepItem5 .articleContent").removeClass("opac0");
                        }
                    });
                    $(".stepItem6").velocity({
                        opacity: "1"
                    }, {
                        delay: 4800,
                        duration: 700,
                        begin: function () {
                            $(".stepArrow6").addClass("active");
                        },
                        complete: function () {
                            $(".stepItem6 .articleContent").removeClass("opac0");
                        }
                    });
                    $(".soon").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".soonCaption").velocity({
                        top: "100vh"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".soonTxt1").velocity({
                        top: "100vh"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                }
                if (origin.index == 6 && direction == 'down') {
                    $(".soon").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".soonCaption").velocity({
                        top: "100vh"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".soonTxt1").velocity({
                        top: "100vh"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".credit").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".bgColor__credit").removeClass("opac0");
                            $(".credit").addClass("active");
                        }
                    });
                    $('.scroll-guide').addClass('opac0');
                }
                if (origin.index == 7 && direction == 'up') {
                    $(".soon").velocity({
                        opacity: "1"
                    }, {
                        delay: 0,
                        duration: 700
                    });
                    $(".soonCaption").velocity({
                        top: "0"
                    }, {
                        delay: 400,
                        duration: 700
                    });
                    $(".soonTxt1").velocity({
                        top: "0"
                    }, {
                        delay: 800,
                        duration: 700
                    });
                    $(".credit").velocity({
                        opacity: "0"
                    }, {
                        delay: 0,
                        duration: 700,
                        begin: function () {
                            $(".bgColor__credit").addClass("opac0");
                            $(".credit").removeClass("active");
                        }
                    });
                    $('.scroll-guide').removeClass('opac0');
                }
            }
        })

        fullpage_api.setAllowScrolling(false);
        fullpage_api.setKeyboardScrolling(false);
        // fullpage_api.setAllowScrolling(true);
        // fullpage_api.setKeyboardScrolling(true);
    }

    /*if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    } else {
    }*/
});

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