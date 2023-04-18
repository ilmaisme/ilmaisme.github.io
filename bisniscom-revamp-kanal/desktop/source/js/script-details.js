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

//share link article
let share = document.getElementById('share');
share.addEventListener('click', function (e) {
    // copy text
    //console.log(e.target)
    if (e.target.matches('[data-form=copyLinkUrl]')) {
        e.preventDefault()
        copyLink('copyLinkUrl', e)
    }
});

function copyLink(id, e) {
    let cTxt = document.getElementById(id);
    
    cTxt.select();
    cTxt.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(cTxt.value);
    e.target.classList.add('-tooltip');
    setTimeout(function () {
        e.target.classList.remove('-tooltip');
    }, 1500);
}