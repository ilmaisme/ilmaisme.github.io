$(document).ready(function () {
    //toggle popup report comment
    $(".-bReport").on("click", function () {
        $('.-pReport').addClass('active');
    });

    //toggle form reply comment
    let bRep = $('.-bReply'),
        fRep = $('.-fReply');
    bRep.click(function (e) {
        e.preventDefault();
        var par = $(this).parent().parent().parent();
        par.siblings(fRep).toggleClass('active');
        $(this).toggleClass('active');
    })
})