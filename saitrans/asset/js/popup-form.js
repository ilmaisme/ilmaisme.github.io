$(document).ready(function () {
    //validation
    $('#formbooking').validate({
        rules: {
            bookori: {
                required: true,
            },
            bookdest: {
                required: true,
            },
            sender: {
                required: true,
            },
            receiver: {
                required: true,
            },
            hpsender: {
                required: true,
            },
            hpreceiver: {
                required: true,
            },
            bookitem: {
                required: true,
            },
            bookweight: {
                required: true,
            },
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element)
        }
    })
    $('#formclaim').validate({
        rules: {
            claimori: {
                required: true,
            },
            claimdest: {
                required: true,
            },
            sender: {
                required: true,
            },
            receiver: {
                required: true,
            },
            hpsender: {
                required: true,
            },
            claimitem: {
                required: true,
            },
            claimweight: {
                required: true,
            },
            datepick: {
                required: true,
            },
            claimprice: {
                required: true,
            },
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element)
        }
    })

    if ($('.datepick').is(':visible')) {
        updatePicker()
    }

    function updatePicker() {
        if ($('#menu').css('display') == 'none') {
            //console.log("desktop")        
            $('.datepick').datepicker({
                dateFormat: 'dd/mm/yy',
                beforeShow: function (input, inst) {
                    var input = $('.popupWrap');
                    // Handle calendar position before showing it.
                    var calendar = inst.dpDiv;
                    setTimeout(function () {
                        calendar.position({
                            my: 'right bottom',
                            at: 'right bottom',
                            collision: 'none',
                            of: input
                        });
                    }, 1);
                }
            });
        } else {
            //console.log("mobile")
            $('.datepick').datepicker({
                dateFormat: 'dd/mm/yy',
                beforeShow: function (input, inst) {
                    var input = $('.popup');
                    // Handle calendar position before showing it.
                    var calendar = inst.dpDiv;
                    setTimeout(function () {
                        calendar.position({
                            my: 'right bottom',
                            at: 'right bottom',
                            collision: 'none',
                            of: input
                        });
                    }, 1);
                }
            });
        }
    }

    //upload image
    $('input[type=file]').change(function (e) {
        $in = $(this);
        $in.next().html($in.val());
    });
})