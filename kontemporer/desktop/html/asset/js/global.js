$(document).ready(function () {

    //header fixed
    let hc = $(".headerContent"),
        hfl = $("body");

    $(window).scroll(function () {
        var a = $(window).scrollTop(),
            b = hc.outerHeight();
        a > b + 69 ? (
            hfl.addClass("fixed")
        ) :
            (
                hfl.removeClass("fixed")
            )
    })
});


//textarea autoresize
document.querySelectorAll('textarea').forEach(textarea => {
    textarea.style.overflowY = 'hidden';
    textarea.addEventListener('input', () => {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    });
});

//popup dismiss
var mall = document.querySelector('.popup');
if (!!mall) {
    document.querySelectorAll('[data-modal-button="dismiss"]').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.popup.active').forEach(popup => {
                popup.classList.remove('active');
            });
        });
    });
}

//back to top button
function backToTop() {
    // $(window).scrollTop(0);
    $('html,body').stop().animate({
        scrollTop: 0
    }, 1000);
}