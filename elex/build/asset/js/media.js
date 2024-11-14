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

    //photoswipe init
    var openPhotoSwipe = function (elTitle, elImg) {
        var pswpElement = document.querySelectorAll('.pswp')[0];

        // build items array
        var items = [{
                src: elImg,
                title: elTitle,
                w: 980,
                h: 550,
            },
            {
                src: 'https://picsum.photos/id/192/980/550',
                title: 'Bread ugh tilde diy bag big hot unicorn 90\'s trade. Church-key adaptogen raclette pbr&b four food gastropub heard migas. Vape four dreamcatcher literally.',
                w: 980,
                h: 550,
            },
            {
                src: 'https://picsum.photos/id/163/980/550',
                title: 'Bread ugh tilde diy bag big hot unicorn 90\'s trade. Church-key adaptogen raclette pbr&b four food gastropub heard migas. Vape four dreamcatcher literally.',
                w: 980,
                h: 550,
            },
            {
                src: 'https://picsum.photos/id/180/980/550',
                title: 'Bread ugh tilde diy bag big hot unicorn 90\'s trade. Church-key adaptogen raclette pbr&b four food gastropub heard migas. Vape four dreamcatcher literally.',
                w: 980,
                h: 550,
            },
            {
                src: 'https://picsum.photos/id/119/980/550',
                title: 'Bread ugh tilde diy bag big hot unicorn 90\'s trade. Church-key adaptogen raclette pbr&b four food gastropub heard migas. Vape four dreamcatcher literally.',
                w: 980,
                h: 550,
            }
        ];

        // define options (if needed)
        options = {

            closeOnScroll: false,
            fullscreenEl: false,
            shareEl: false,
            minZoom: 3,
            fullscreenEl: false,
            zoomEl: false,
            indexIndicator: false,
            initialZoomLevel: 1,
            // secondaryZoomLevel: 1.5,
            // maxZoomLevel: 1,
            history: false,
            addCaptionHTMLFn: function (item, captionEl /*, isFake */ ) {
                if (!item.title) {
                    captionEl.children[0].innerHTML = '';
                    return false;
                }
                let _1vh = $(window).height();
                captionEl.children[0].innerHTML = item.title;
                return true;
            }

        };

        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    $('.-photoswipeTrig').click(function () {
        var title = $(this).find('.mediaTitle').text(),
            img = $(this).find('.mediaImg img').attr('src')
        openPhotoSwipe(title, img)
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