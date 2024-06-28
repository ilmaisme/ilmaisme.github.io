$(document).ready(function () {
    //font details button custom
    $('.detailsFontCta').on("click", function () {
        var size = $(this).attr('value')
        $('.detailsFontCta').removeClass('-active')
        $(this).addClass('-active')
        $('.detailsContent').css('font-size', size)
    });
})