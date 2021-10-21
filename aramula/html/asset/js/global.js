$(document).ready(function () { 
    //close sticky ads
    $('.-closeads').click(function (e) {
        e.preventDefault();
        $(this).parent().remove();
    });
});

//back to top button
function backToTop() {
    // $(window).scrollTop(0);
    $('html,body').stop().animate({ scrollTop: 0 }, 1000);
}