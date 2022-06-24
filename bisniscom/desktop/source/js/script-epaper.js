$(".-js-close").on("click", function () {
    let parent = $(this).parent().parent();
    parent.fadeOut("fast");
    $("#back-to-top").css('bottom', '25px');
})