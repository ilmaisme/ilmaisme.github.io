$(document).ready(function () {
    //scrollreveal
    AOS.init({
        duration: 1200,
    })

    $('.section').removeClass('aos-animate');
    $('#splogo').removeClass('aos-animate');
    $('#intLogo').removeClass('aos-animate');
    $('#intImg').removeClass('aos-animate');
    $('#intbtn').removeClass('aos-animate');
    $('#clImg').removeClass('aos-animate');
    $('#clCtn').removeClass('aos-animate');
    $('#covbtn').click(function () {
        $('#intro').addClass('active');
        $('#cover').removeClass('active');
        setTimeout(function () {
            $('#intLogo').addClass('aos-animate');
            $('#intImg').addClass('aos-animate');
            $('#intbtn').addClass('aos-animate');
        }, 300);
    });
    $('#intbtn').click(function () {
        $('#sparent').addClass('active');
        $('#bio').addClass('active');
        $('#intro').removeClass('active');
        setTimeout(function () {
            $('#splogo').addClass('aos-animate');
        }, 300);
        scrollTop()
    });

    function startButton() {
        $('#skin').addClass('active');
        $('#step').addClass('active');
        $('#bio').removeClass('active');
        setTimeout(function () {
            $('#step0').addClass('active');
        }, 1000);
        scrollTop()
    }

    function skinButton() {
        $('#hair').addClass('active');
        $('#skin').removeClass('active');
        $('#step0').addClass('done');
        setTimeout(function () {
            $('#step1').addClass('active');
        }, 1300);
        scrollTop()
    }

    function hairButton() {
        $('#body').addClass('active');
        $('#hair').removeClass('active');
        $('#step1').addClass('done');
        setTimeout(function () {
            $('#step2').addClass('active');
        }, 1300);
        scrollTop()
    }
    $('#hairbtnp').click(function () {
        $('#skin').addClass('active');
        $('#hair').removeClass('active');
        $('#step0').removeClass('done');
        $('#step1').removeClass('active');
        scrollTop()
    });

    function bodyButton() {
        $('#makeup').addClass('active');
        $('#body').removeClass('active');
        $('#step2').addClass('done');
        setTimeout(function () {
            $('#step3').addClass('active');
        }, 1300);
        scrollTop()
    }
    $('#bodybtnp').click(function () {
        $('#hair').addClass('active');
        $('#body').removeClass('active');
        $('#step1').removeClass('done');
        $('#step2').removeClass('active');
        scrollTop()
    });

    function makeupButton() {
        $('#food').addClass('active');
        $('#makeup').removeClass('active');
        $('#step3').addClass('done');
        setTimeout(function () {
            $('#step4').addClass('active');
        }, 1300);
        scrollTop()
    }
    $('#mkupbtnp').click(function () {
        $('#body').addClass('active');
        $('#makeup').removeClass('active');
        $('#step2').removeClass('done');
        $('#step3').removeClass('active');
        scrollTop()
    });

    function foodButton() {
        $('#fashion').addClass('active');
        $('#food').removeClass('active');
        $('#step4').addClass('done');
        setTimeout(function () {
            $('#step5').addClass('active');
        }, 1300);
        scrollTop()
    }
    $('#foodbtnp').click(function () {
        $('#makeup').addClass('active');
        $('#food').removeClass('active');
        $('#step3').removeClass('done');
        $('#step4').removeClass('active');
        scrollTop()
    });

    function fashionButton() {
        $('#closing').addClass('active');
        $('#sparent').removeClass('active');
        $('#step5').addClass('done');
        setTimeout(function () {
            $('#clImg').addClass('aos-animate');
            $('#clCtn').addClass('aos-animate');
        }, 1000);
        scrollTop()
    }
    $('#fashbtnp').click(function () {
        $('#food').addClass('active');
        $('#fashion').removeClass('active');
        $('#step4').removeClass('done');
        $('#step5').removeClass('active');
        scrollTop()
    });

    function scrollTop() {
        $("html").animate({
            scrollTop: 0
        }, 600);
    }

    $('#formbio').validate({
        rules: {
            name: {
                required: true,
            },
            // sex: {
            //     required: true,
            // },
            // phone: {
            //     required: true,
            // },
            // email: {
            //     required: true,
            // },
            // job: {
            //     required: true,
            // },
            // income: {
            //     required: true,
            // },
            // age: {
            //     required: true,
            // },
            // pro: {
            //     required: true,
            // },
            // bud: {
            //     required: true,
            // },
            // sho: {
            //     required: true,
            // },
            // shoTxt: {
            //     required: function () {
            //         return $("#sho5").is(":checked");
            //     }
            // },
            // inf: {
            //     required: true,
            // },
            // infTxt: {
            //     required: function () {
            //         return $("#inf5").is(":checked");
            //     }
            // },
            // med: {
            //     required: true,
            // },
            // medTxt: {
            //     required: function () {
            //         return $("#med5").is(":checked");
            //     }
            // },
        },
        messages: {
            //     name: {
            //         required: "Required",
            //     },
        },
        errorPlacement: function (error, element) {
            if (element.attr("name") == "sex") {
                error.appendTo("#messageBox");
            } else {
                error.insertAfter(element)
            }
        },
        submitHandler: function () {
            startButton()
        }
    })
    $('#formskin').validate({
        // rules: {
        //     ask0: {
        //         required: true,
        //     },
        //     ask1: {
        //         required: true,
        //     },
        //     ask2: {
        //         required: true,
        //     },
        //     ask3: {
        //         required: true,
        //     },
        //     ask4: {
        //         required: true,
        //     },
        //     ask5: {
        //         required: true,
        //     },
        //     ask0Txt: {
        //         required: function () {
        //             return $("#ask05").is(":checked");
        //         }
        //     },
        //     ask3Txt: {
        //         required: function () {
        //             return $("#ask35").is(":checked");
        //         }
        //     },
        //     ask4Txt: {
        //         required: function () {
        //             return $("#ask45").is(":checked");
        //         }
        //     },
        //     ask5Txt: {
        //         required: function () {
        //             return $("#ask55").is(":checked");
        //         }
        //     },
        // },
        submitHandler: function () {
            skinButton()
        }
    })
    $('#formhair').validate({
        // rules: {
        //     ask6: {
        //         required: true,
        //     },
        //     ask7: {
        //         required: true,
        //     },
        //     ask8: {
        //         required: true,
        //     },
        //     ask9: {
        //         required: true,
        //     },
        //     ask10: {
        //         required: true,
        //     },
        //     ask6Txt: {
        //         required: function () {
        //             return $("#ask65").is(":checked");
        //         }
        //     },
        //     ask8Txt: {
        //         required: function () {
        //             return $("#ask85").is(":checked");
        //         }
        //     },
        //     ask9Txt: {
        //         required: function () {
        //             return $("#ask95").is(":checked");
        //         }
        //     },
        //     ask10Txt: {
        //         required: function () {
        //             return $("#ask105").is(":checked");
        //         }
        //     },
        // },
        submitHandler: function () {
            hairButton()
        }
    })
    $('#formbody').validate({
        // rules: {
        //     ask11: {
        //         required: true,
        //     },
        //     ask12: {
        //         required: true,
        //     },
        //     ask13: {
        //         required: true,
        //     },
        //     ask14: {
        //         required: true,
        //     },
        //     ask11Txt: {
        //         required: function () {
        //             return $("#ask115").is(":checked");
        //         }
        //     },
        //     ask10Txt: {
        //         required: function () {
        //             return $("#ask105").is(":checked");
        //         }
        //     },
        //     ask12Txt: {
        //         required: function () {
        //             return $("#ask125").is(":checked");
        //         }
        //     },
        //     ask13Txt: {
        //         required: function () {
        //             return $("#ask135").is(":checked");
        //         }
        //     },
        //     ask14Txt: {
        //         required: function () {
        //             return $("#ask145").is(":checked");
        //         }
        //     },
        // },
        submitHandler: function () {
            bodyButton()
        }
    })
    $('#formmakeup').validate({
        // rules: {
        //     ask16: {
        //         required: true,
        //     },
        //     ask17: {
        //         required: true,
        //     },
        //     ask18: {
        //         required: true,
        //     },
        //     ask19: {
        //         required: true,
        //     },
        //     ask20: {
        //         required: true,
        //     },
        //     ask16Txt: {
        //         required: function () {
        //             return $("#ask165").is(":checked");
        //         }
        //     },
        //     ask18Txt: {
        //         required: function () {
        //             return $("#ask185").is(":checked");
        //         }
        //     },
        //     ask19Txt: {
        //         required: function () {
        //             return $("#ask195").is(":checked");
        //         }
        //     },
        //     ask20Txt: {
        //         required: function () {
        //             return $("#ask205").is(":checked");
        //         }
        //     },
        // },
        submitHandler: function () {
            makeupButton()
        }
    })
    $('#formfood').validate({
        // rules: {
        //     ask21: {
        //         required: true,
        //     },
        //     ask22: {
        //         required: true,
        //     },
        //     ask23: {
        //         required: true,
        //     },
        //     ask25: {
        //         required: true,
        //     },
        //     ask26: {
        //         required: true,
        //     },
        //     ask27: {
        //         required: true,
        //     },
        //     ask28: {
        //         required: true,
        //     },
        //     ask21Txt: {
        //         required: function () {
        //             return $("#ask214").is(":checked");
        //         }
        //     },
        //     ask23Txt: {
        //         required: function () {
        //             return $("#ask235").is(":checked");
        //         }
        //     },
        //     ask25Txt: {
        //         required: function () {
        //             return $("#ask255").is(":checked");
        //         }
        //     },
        //     ask26Txt: {
        //         required: function () {
        //             return $("#ask265").is(":checked");
        //         }
        //     },
        //     ask27Txt: {
        //         required: function () {
        //             return $("#ask275").is(":checked");
        //         }
        //     },
        //     ask28Txt: {
        //         required: function () {
        //             return $("#ask285").is(":checked");
        //         }
        //     },
        // },
        submitHandler: function () {
            foodButton()
        }
    })
    $('#formfashion').validate({
        // rules: {
        //     ask29: {
        //         required: true,
        //     },
        //     ask30: {
        //         required: true,
        //     },
        //     ask31: {
        //         required: true,
        //     },
        //     ask32: {
        //         required: true,
        //     },
        //     ask33: {
        //         required: true,
        //     },
        //     ask34: {
        //         required: true,
        //     },
        //     ask35: {
        //         required: true,
        //     },
        //     ask36: {
        //         required: true,
        //     },
        //     ask37: {
        //         required: true,
        //     },
        //     ask30Txt: {
        //         required: function () {
        //             return $("#ask305").is(":checked");
        //         }
        //     },
        //     ask33Txt: {
        //         required: function () {
        //             return $("#ask335").is(":checked");
        //         }
        //     },
        //     ask34Txt: {
        //         required: function () {
        //             return $("#ask345").is(":checked");
        //         }
        //     },
        //     ask35Txt: {
        //         required: function () {
        //             return $("#ask355").is(":checked");
        //         }
        //     },
        //     ask36Txt: {
        //         required: function () {
        //             return $("#ask365").is(":checked");
        //         }
        //     },
        //     ask37Txt: {
        //         required: function () {
        //             return $("#ask375").is(":checked");
        //         }
        //     },
        // },
        submitHandler: function () {
            fashionButton()
        }
    });

    jQuery.extend(jQuery.validator.messages, {
        required: "*harus diisi"
    });

    $('.formOption__otr .formOption').click(function () {
        $(this).siblings('.formInput__otr').focus();
    });
});