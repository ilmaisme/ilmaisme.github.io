$(document).ready(function () {
    //sort careers type
    var posts = $('.careersCard');
    posts.fadeOut();

    $(".careersSortCta").click(function () {
        var customType = $(this).data('filter'); // type

        posts
            .fadeOut()
            .filter(function () {
                return $(this).data('cat') === customType;
            })
            .fadeIn(200);
    });

    // display all sort
    $("#sortAll").click(function () {
        posts.fadeIn(200);
    }).addClass("active").click();

    $(".careersSortCta").click(function (e) {
        //toggle active sort
        $(this).toggleClass("active").siblings().removeClass("active");
        e.preventDefault()
    });

    //trigger details career
    $(".-careersTrig").click(function () {});
});