$(document).ready(function () {
    //font details slider range custom
    $('#sliderFont').on('input', function () {
        var v = $(this).val();
        $('.detailsContent').css('font-size', v + 'em')
    });
    $('.detailsFontCta.-minus').on("click", function () {
        var minus = $('#sliderFont').attr('min')
        $('#sliderFont').val(minus)
        $('.detailsContent').css('font-size', minus + 'em')
    });
    $('.detailsFontCta.-plus').on("click", function () {
        var plus = $('#sliderFont').attr('max')
        $('#sliderFont').val(plus)
        $('.detailsContent').css('font-size', plus + 'em')
    });
})