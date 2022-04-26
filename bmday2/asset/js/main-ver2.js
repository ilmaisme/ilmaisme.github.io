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
        $('#culinary').addClass('active');
        $('#step').addClass('active');
        $('#intro').removeClass('active');
        setTimeout(function () {
            $('#splogo').addClass('aos-animate');
        }, 300);
        setTimeout(function () {
            $('#step0').addClass('active');
        }, 1300);
        scrollTop()
    });

    function culinaryButton() {
        $('#craft').addClass('active');
        $('#culinary').removeClass('active');
        $('#step0').addClass('done');
        setTimeout(function () {
            $('#step1').addClass('active');
        }, 1300);
        scrollTop()
        console.log("culinary next")
    }

    function craftButton() {
        $('#fashion').addClass('active');
        $('#craft').removeClass('active');
        $('#step1').addClass('done');
        setTimeout(function () {
            $('#step2').addClass('active');
        }, 1300);
        scrollTop()
    }
    $('#craftbtnp').click(function () {
        $('#culinary').addClass('active');
        $('#craft').removeClass('active');
        $('#step0').removeClass('done');
        $('#step1').removeClass('active');
        scrollTop()
    });

    function fashionButton() {
        $('#bio').addClass('active');
        $('#step').removeClass('active');
        $('#fashion').removeClass('active');
        $('#step2').addClass('done');
        scrollTop()
    }
    $('#fashbtnp').click(function () {
        $('#craft').addClass('active');
        $('#fashion').removeClass('active');
        $('#step1').removeClass('done');
        $('#step2').removeClass('active');
        scrollTop()
    });

    function finishButton() {
        $('#bio').removeClass('active');
        $('#closing').addClass('active');
        $('#sparent').removeClass('active');
        setTimeout(function () {
            $('#clImg').addClass('aos-animate');
            $('#clCtn').addClass('aos-animate');
        }, 1000);
        scrollTop()
    }

    function scrollTop() {
        $("html").animate({
            scrollTop: 0
        }, 600);
    }

    $('#formbio').validate({
        rules: {
            // name: {
            //     required: true,
            // },
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
        },
        errorPlacement: function (error, element) {
            if (element.attr("name") == "sex") {
                error.appendTo("#messageBox");
            } else {
                error.insertAfter(element)
            }
        },
        submitHandler: function () {
            finishButton()
        }
    })
    $('#formculinary').validate({
        rules: {
            ask0: {
                required: true,
            },
        },
        errorPlacement: function (error, element) {
            if (element.attr("name") == "ask0") {
                error.appendTo("#messageBox0");
            } else {
                error.insertAfter(element)
            }
        },
        submitHandler: function () {
            culinaryButton()
        }
    })
    $('#formcraft').validate({
        rules: {
            ask1: {
                // required: true,
            },
        },
        errorPlacement: function (error, element) {
            if (element.attr("name") == "ask1") {
                error.appendTo("#messageBox1");
            } else {
                error.insertAfter(element)
            }
        },
        submitHandler: function () {
            craftButton()
        }
    })
    $('#formfashion').validate({
        rules: {
            ask2: {
                // required: true,
            },
        },
        errorPlacement: function (error, element) {
            if (element.attr("name") == "ask2") {
                error.appendTo("#messageBox2");
            } else {
                error.insertAfter(element)
            }
        },
        submitHandler: function () {
            fashionButton()
        }
    })

    jQuery.extend(jQuery.validator.messages, {
        required: "*harus diisi"
    });


    //active radio
    let $radioButtons = $('input[type="radio"]');
    $radioButtons.click(function () {
        $radioButtons.each(function () {
            $(this).parent().toggleClass('active', this.checked);
        });
    });

    //custom scroll
    let $popScroll = $('.popupScroll');
    $popScroll.each((index, $popScroll) => new SimpleBar($popScroll));

});