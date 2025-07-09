$(document).ready(function () {
    //show hide password
    $(".buttonEye").click(function () {
        let input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
            $(this).addClass("show");
        } else {
            input.attr("type", "password");
            $(this).removeClass("show");
        }
    });
});