$(document).ready(function () {
    $(document).on("click", function () {
        //hide video
        var popupvideo = document.querySelector('.-pVideo');
        if (!!popupvideo) {
            popupvideo.classList.remove('active')
            toggleVideo('#video', 'hide')
        }
    });

    //trigger popup video
    $('.videoTrig').on("click", function (e) {
        e.stopPropagation();
        var link = $(this).data('link'),
            title = $(this).find('.mediaTitle').text()
        if (!!link) {
            $('#video').html('<iframe width="950" height="534" src="https://www.youtube.com/embed/' + link + '?enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer&amp;controls=1" loading="lazy" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowfullscreen="" title="' + title + '"></iframe>')
        }
        triggerActiveButton('.-pVideo')
    });
});

//pause video
function toggleVideo(video, state) {
    var div = document.querySelector(video);
    if (!!div) {
        var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
        func = state == 'hide' ? 'pauseVideo' : 'playVideo';
        iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
    }
}