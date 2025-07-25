$(document).ready(function () {
    //toggle form reply comment
    $('.-bReply').on('click', function () {
        const $btn = $(this);
        const $form = $btn.closest('.commentRow').find('> .-fReply');

        // Close others
        $('.-fReply').not($form).removeClass('active');
        $('.-bReply').not($btn).removeClass('active');

        // Toggle current
        $form.toggleClass('active');
        $btn.toggleClass('active');
    });

    //photo popup
    var initPhotoSwipeFromDOM = function (gallerySelector) {
        var parseThumbnailElements = function (el) {
            var all = document.querySelectorAll(gallerySelector);
            var items = [];
            for (var j = 0; j < all.length; j++) {
                var el = all[j];
                var thumbElements = el.parentNode.childNodes;
                var numNodes = thumbElements.length,
                    figureEl,
                    linkEl,
                    size,
                    item;
                for (var i = 0; i < numNodes; i++) {
                    figureEl = thumbElements[i];

                    if (figureEl.nodeType !== 1) {
                        continue;
                    }
                    linkEl = figureEl.children[0];
                    size = linkEl.getAttribute('data-size').split('x');
                    item = {
                        src: linkEl.getAttribute('href'),
                        w: parseInt(size[0], 10),
                        h: parseInt(size[1], 10),
                        minZoom: 3
                    };
                    if (figureEl.children.length > 1) {
                        item.title = figureEl.children[1].innerHTML;
                    }
                    if (linkEl.children.length > 0) {
                        item.msrc = linkEl.children[0].getAttribute('src');
                    }

                    item.el = figureEl;
                    items.push(item);
                }
            }
            return items;
        };
        var closest = function closest(el, fn) {
            return el && (fn(el) ? el : closest(el.parentNode, fn));
        };
        var onThumbnailsClick = function (e) {
            e = e || window.event;
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            var eTarget = e.target || e.srcElement;
            var clickedListItem = closest(eTarget, function (el) {
                return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
            });
            if (!clickedListItem) {
                return;
            }
            var clickedGallery = clickedListItem.parentNode,
                childNodes = document.querySelectorAll(gallerySelector),
                numChildNodes = childNodes.length,
                nodeIndex = 0,
                index;
            for (var i = 0; i < numChildNodes; i++) {
                if (childNodes[i].nodeType !== 1) {
                    continue;
                }
                if (childNodes[i] === clickedListItem) {
                    index = nodeIndex;
                    break;
                }
                nodeIndex++;
            }
            if (index >= 0) {
                openPhotoSwipe(index, clickedGallery);
            }
            return false;
        };
        var photoswipeParseHash = function () {
            var hash = window.location.hash.substring(1),
                params = {};
            if (hash.length < 5) {
                return params;
            }
            var vars = hash.split('&');
            for (var i = 0; i < vars.length; i++) {
                if (!vars[i]) {
                    continue;
                }
                var pair = vars[i].split('=');
                if (pair.length < 2) {
                    continue;
                }
                params[pair[0]] = pair[1];
            }
            if (params.gid) {
                params.gid = parseInt(params.gid, 10);
            }
            return params;
        };

        var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
            var pswpElement = document.querySelectorAll('.pswp')[0],
                gallery,
                options,
                items;
            items = parseThumbnailElements(galleryElement);
            options = {
                maxSpreadZoom: 5,
                galleryUID: galleryElement.getAttribute('data-pswp-uid'),
                getThumbBoundsFn: function (index) {
                    var thumbnail = items[index].el.getElementsByTagName('img')[0],
                        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                        rect = thumbnail.getBoundingClientRect();
                    return {
                        x: rect.left,
                        y: rect.top + pageYScroll,
                        w: rect.width
                    };
                },
                minZoom: 3,
                fullscreenEl: false,
                zoomEl: false,
                shareEl: false,
                showHideOpacity: false,
                // Separator for "1 of X" counter
                indexIndicatorSep: ' dari ',
                history: false,
                addCaptionHTMLFn: function (item, captionEl /*, isFake */) {
                    if (!item.title) {
                        captionEl.children[0].innerHTML = '';
                        return false;
                    }
                    captionEl.children[0].innerHTML = item.title;
                    captionEl.children[0].style.width = (item.w * item.fitRatio) + 'px';
                    captionEl.style.bottom = (item.h - 100) + 'px';
                    return true;
                }
            };
            if (fromURL) {
                if (options.galleryPIDs) {
                    for (var j = 0; j < items.length; j++) {
                        if (items[j].pid == index) {
                            options.index = j;
                            break;
                        }
                    }
                } else {
                    options.index = parseInt(index, 10) - 1;
                }
            } else {
                options.index = parseInt(index, 10);
            }
            if (isNaN(options.index)) {
                return;
            }
            if (disableAnimation) {
                options.showAnimationDuration = 0;
            }

            gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
            return gallery.init();
        };
        var galleryElements = document.querySelectorAll(gallerySelector);
        for (var i = 0, l = galleryElements.length; i < l; i++) {
            galleryElements[i].setAttribute('data-pswp-uid', i + 1);
            galleryElements[i].onclick = onThumbnailsClick;
        }
        var hashData = photoswipeParseHash();
        if (hashData.pid && hashData.gid) {
            openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
        }
    };

    // execute above function
    initPhotoSwipeFromDOM('.images-container figure');
})