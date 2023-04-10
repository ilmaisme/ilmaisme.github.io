/*
Name : vendor.js
Author : BIS (anon.id)
Type : Main Settings Vendor
*/

(function ($) {
    $(function () {
        /*
		Document Event
		*/
        $(document).ready(function () {
            /* Slik for navigation*/
            $(".socmed__copylink").popover({
                content: "Tautan telah disalin",
            });

            var isSubChannel = $("header.channel .swipe-tabs .swipe-tab a.active");
            var ainitialSlide = 0;
            if (isSubChannel) {
                ainitialSlide = parseInt(isSubChannel.attr("data-loop"));
            } else {
                ainitialSlide = 1;
            }
            $("header .swipe-tabs").slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false,
                infinite: false,
                swipeToSlide: true,
                useTransform: false,
                useCSS: false,
                lazyLoad: false,
                touchThreshold: 10,
                speed: 0,
                mobileFirst: true,
                // initialSlide: ainitialSlide
            });

            /* Slik for tabs */
            // var $swipeTabsContainer = $('header .swipe-tabs'),
            // $swipeTabs = $('.swipe-tab'),
            // $swipeTabsContentContainer = $('.swipe-tabs-container'),
            // currentIndex = 0,
            // activeTabClassName = 'active-tab';
            // $swipeTabsContainer.on('init', function(event, slick) {
            //     $swipeTabsContentContainer.removeClass('invisible');
            //     $swipeTabsContainer.removeClass('invisible');

            //     currentIndex = slick.getCurrent();
            //     $swipeTabs.removeClass(activeTabClassName);
            //     $('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
            // });
            // $swipeTabsContainer.slick({
            //     //slidesToShow: 3.25,
            //     slidesToShow: 3,
            //     slidesToScroll: 3,
            //     arrows: false,
            //     infinite: false,
            //     swipeToSlide: true,
            //     useTransform: false,
            //     useCSS: false,
            //     lazyLoad: 'ondemand',
            //     touchThreshold: 10
            // });
            // $swipeTabsContentContainer.slick({
            //     asNavFor: $swipeTabsContainer,
            //     slidesToShow: 1,
            //     slidesToScroll: 1,
            //     arrows: false,
            //     infinite: false,
            //     swipeToSlide: true,
            //     useTransform: false,
            //     useCSS: false,
            //     draggable: false,
            //     lazyLoad: 'ondemand',
            //     touchThreshold: 10
            // });
            // $swipeTabs.on('click', function(event) {
            //     // gets index of clicked tab
            //     currentIndex = $(this).data('slick-index');
            //     $swipeTabs.removeClass(activeTabClassName);
            //     $('.swipe-tab[data-slick-index=' + currentIndex +']').addClass(activeTabClassName);
            //     $swipeTabsContainer.slick('slickGoTo', currentIndex);
            //     $swipeTabsContentContainer.slick('slickGoTo', currentIndex);
            // });
            // //initializes slick navigation tabs swipe handler
            // $swipeTabsContentContainer.on('swipe', function(event, slick, direction) {
            //     currentIndex = $(this).slick('slickCurrentSlide');
            //     $swipeTabs.removeClass(activeTabClassName);
            //     $('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
            // });

            /* Menu Open */
            $(".navbar-toggle").on("click", function () {
                $(".navbar-toggle span").toggleClass("clicked");
                $(".nav-menu").show();
                // var theme = $(this).parent().parent().parent().attr('class');
                // var headerw = $(window).width() - 30;
                // var heightMenuSticky = $('.sticky-wrapper').height();
                if ($(".navbar-toggle span").hasClass("clicked")) {
                    $(this).parent().parent().next().addClass("active");
                    // $('.nav-wrap').height( $(window).height() + 15 );
                    // $('.nav-wrap').css({
                    //     // 'position' : 'absolute',
                    //     'background-color' : 'rgba(0,0,0,1)'
                    // });
                    $(".nav-wrap").show();
                    $(".nav-wrap").css({
                        "z-index": "1000",
                        "background-color": "#000",
                        top: "60px",
                    });
                    $(".premium-hutri > .nav-wrap").css({
                        "z-index": "1000",
                        "background-color": "#000",
                        top: "164px",
                    });
                    $(".detail-premium-hutri > .nav-wrap").css({
                        "z-index": "1000",
                        "background-color": "#000",
                        top: "164px",
                    });
                    // console.log($('.premium-hutri > .nav-wrap'));
                    $("html").css({
                        overflow: "hidden"
                    });
                    // $('.wrapper-body').css({'position':'fixed'});
                    // $('.nav-wrap').css({'top':heightMenuSticky});
                    // $('#sticky1').unstick();
                } else {
                    $(".nav-wrap").hide();
                    $(".nav-wrap").css({
                        "z-index": "-1",
                        top: "0"
                    });
                    $("html").css({
                        "overflow-y": "visible"
                    });
                    // $('.wrapper-body').css({'position':'inherit'});
                    // $('.nav-wrap').height( 0 );
                    // $('.nav-wrap').css({
                    //     'background-color' : 'transparent'
                    // });
                }

                var data = $(".search-navbar").children().attr("data");
                var src = $(".search-navbar").children().attr("src");
                if ($(".search-navbar").children().hasClass("active")) {
                    $(".search-navbar").children().removeClass("active");
                    $(".search-navbar").children().attr("src", data);
                    $(".search-navbar").children().attr("data", src);
                    $(".search-navbar-wrapper").hide();
                }
            });

            /* Slik for headline*/
            $(".headline").slick({
                // lazyLoad: 'ondemand',
                dots: true,
                arrows: false,
                infinite: false,
                autoplay: true,
                autoplaySpeed: 3000,
                speed: 1000,
                // useTransform: false,
                // useCSS: false,
                slidesToShow: 1,
                adaptiveHeight: true,
                variableWidth: false,
            });

            /* Slik for headline foto*/
            $(".headline-foto").slick({
                dots: true,
                infinite: true,
                slidesToShow: 2,
                swipeToSlide: true,
                autoplaySpeed: 3000,
                speed: 1000,
                // useTransform: false,
                // useCSS: false,
                arrows: false,
                variableWidth: true,
            });

            /* Slick for thumb foto */
            $(".thumb").slick({
                dots: false,
                infinite: true,
                slidesToShow: 3,
                swipeToSlide: true,
                arrows: false,
                variableWidth: true,
            });

            /* Slick for link live*/
            $(".link-live").slick({
                infinite: false,
                slidesToShow: 3,
                slidesToScroll: 3,
                prevArrow: $(".link-live-button .prev"),
                nextArrow: $(".link-live-button .next"),
            });
            // Anchor link
            $(".link-live a").on("click", function () {
                var id = $(this).attr("href");
                $("html, body").animate({
                        scrollTop: $(id).offset().top - 80,
                    },
                    500
                );
                return false;
            });

            /* Sticky */
            $("#sticky1").sticky({
                topSpacing: 0,
                bottomSpacing: 0,
            });
            $("#sticky2").sticky({
                topSpacing: 0,
                bottomSpacing: 0,
            });

            /* Font Size */
            if ($(".font-size").length) {
                $(".font-size-link").on("click", function () {
                    var newData;
                    var data = parseInt($(".font-size").attr("data-font"));
                    if ($(this).hasClass("plus")) {
                        newData = data + 2;
                        newData2 = newData + 6 + "px";
                        $(".font-size").attr("data-font", newData);
                        $(".wrapper-description .detail-description").css({
                            "font-size": newData,
                            "line-height": newData2,
                        });
                        $(".wrapper-description .detail-description .baca-juga").css({
                            "font-size": newData,
                            "line-height": newData2,
                        });
                    } else {
                        newData = data - 2;
                        newData2 = newData + 6 + "px";
                        $(".font-size").attr("data-font", newData);
                        $(".wrapper-description .detail-description").css({
                            "font-size": newData,
                            "line-height": newData2,
                        });
                        $(".wrapper-description .detail-description .baca-juga").css({
                            "font-size": newData,
                            "line-height": newData2,
                        });
                    }
                });
            }

            /* Hover Emoticon */
            if ($(".hover-emoticon").length != 0) {
                $(".hover-emoticon").hover(
                    function () {
                        var src = $(this).children().attr("src");
                        var data = $(this).children().attr("data");
                        $(this).children().attr("src", data);
                        $(this).children().attr("data", src);
                        // console.log(src);
                    },
                    function () {
                        var src = $(this).children().attr("src");
                        var data = $(this).children().attr("data");
                        $(this).children().attr("src", data);
                        $(this).children().attr("data", src);
                        // console.log(src);
                    }
                );
            }

            /* Back to top */
            $("#back-to-top").on("click", function () {
                $(".wrapper__flashnews").removeClass("bottom");
                backToTop()
            });

            function backToTop() {
                $('html,body').stop().animate({
                    scrollTop: 0
                }, 500);
            }

            /* Search Navbar on Menu */
            $(".search-navbar").on("click", function () {
                var data = $(this).children().attr("data");
                var src = $(this).children().attr("src");
                //$(this).children().addClass('active');
                if ($(this).children().hasClass("active")) {
                    $(this).children().removeClass("active");
                    $(this).children().attr("src", data);
                    $(this).children().attr("data", src);
                    $(".search-navbar-wrapper").hide();
                } else {
                    $(this).children().addClass("active");
                    $(this).children().attr("src", data);
                    $(this).children().attr("data", src);
                    $(".search-navbar-wrapper").show();
                }
                // $('.search-navbar-wrapper').fadeToggle('show');
                $(".search-navbar-wrapper .search").focus();
                if ($(".icon-bar").hasClass("clicked")) {
                    $(".icon-bar").removeClass("clicked");
                    $(".nav-wrap").hide();
                }
            });
            // $('.form-control.search').blur(function(){
            //     // var data = $('.search-navbar').children().attr('data');
            //     // var src = $('.search-navbar').children().attr('src');
            //     // $('.search-navbar').children().removeClass('active');
            //     // $('.search-navbar').children().attr('src', data);
            //     // $('.search-navbar').children().attr('data', src);
            //     // $('.search-navbar-wrapper').hide();
            // });
            // document.addEventListener('focusout', function(e) {window.scrollTo(0, 0)});
            // $('.search-navbar').bind('keypress', function(e){
            //    // enter key code is 13
            //    if(e.which === 13){
            //      $('.search-navbar-wrapper').hide();
            //     }
            // })
        }); /*end of document ready*/

        /*
		Window Event Load
		*/
        $(window).load(function () {});

        /* Window Event Scroll */
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $("#back-to-top, .top-header-floating").fadeIn("slow");
                $("#back-to-top").fadeIn("slow");
            } else {
                $("#back-to-top").fadeOut("slow");
                $("#back-to-top, .top-header-floating").fadeOut("slow");
            }
            if ($("#sticky2-sticky-wrapper").hasClass("is-sticky")) {
                var logoKanal = $("#sticky2-sticky-wrapper img").attr("data-src");
                $("header.channel #sticky1 .logo img").hide();
                $("header.detail #sticky1 .logo img").hide();
                $("#sticky2-sticky-wrapper img").attr(
                    "src",
                    logoKanal + "-black-b.svg"
                );

                $("#sticky2").css({
                    top: "30px",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                });
                $("#sticky2-sticky-wrapper img").css({
                    height: "30px",
                    "max-height": "30px",
                });

                $("#sticky2 > .channel-name h3").css({
                    "font-size": "32px"
                });
                $("#sticky2 > .channel-name .hr_inject").css({
                    display: "none"
                });
                $("#sticky2 > .channel-name").css({
                    "border-width": "0"
                });
                $("header .swipe-tabs.menu-swipe").css({
                    position: "fixed",
                    display: "grid",
                });
                $("header.premium-hutri .swipe-tabs.menu-swipe").css({
                    position: "fixed",
                    display: "grid",
                    "margin-top": "164px",
                });
                $("header.channel .swipe-tabs.menu-swipe").css({
                    position: "fixed",
                    display: "grid",
                    top: "60px",
                });
                $("header .search-navbar-wrapper").css({
                    position: "fixed",
                    width: "100%",
                    "z-index": "1000",
                });

                $(".bbisnis_kanal").css("cssText", "display: inline-block !important;");
                $(".swipe_kanal .slick-list .slick-track .slick-slide").css(
                    "cssText",
                    "margin-left: 10px !important;"
                );
            } else {
                var logoKanal = $("#sticky2-sticky-wrapper img").attr("data-src");
                $("header.channel #sticky1 .logo img").show();
                $("header.detail #sticky1 .logo img").show();
                $("#sticky2-sticky-wrapper img").attr("src", logoKanal + "-black.svg");

                $("#sticky2").css({
                    top: "0px",
                    left: "unset",
                    transform: "unset"
                });
                $("#sticky2-sticky-wrapper img").css({
                    height: "25px",
                    "max-height": "25px",
                });

                $("#sticky2 > .channel-name h3").css({
                    "font-size": "20px"
                });
                $("#sticky2 > .channel-name .hr_inject").css({
                    display: "inline-block",
                });
                $("#sticky2 > .channel-name").css({
                    "border-width": "15"
                });
                $("header .swipe-tabs.menu-swipe").css({
                    position: "relative",
                    display: "block",
                });
                $("header.premium-hutri .swipe-tabs.menu-swipe").css({
                    position: "fixed",
                    display: "block",
                    "margin-top": "164px",
                });
                $("header.channel .swipe-tabs.menu-swipe").css({
                    position: "relative",
                    display: "block",
                    top: "inherit",
                });
                $("header .search-navbar-wrapper").css({
                    position: "absolute",
                    width: "100%",
                    "z-index": "1000",
                });

                $(".bbisnis_kanal").css("cssText", "display: none !important;");
                $(".swipe_kanal .slick-list .slick-track .slick-slide").css(
                    "cssText",
                    "margin-left: -8px !important;"
                );
            }
        }); /*end of window scroll*/

        /* Window Resize Envent */
        $(window).resize(function () {
            if ($(window).height() <= 440) {
                //$('.nav-wrap').height( $(window).height() + 15 );
            }
        });
    }); /*end of function*/
})(jQuery);

/*************
NATIVE JS LOAD
*************/

/***
    Photo Gallery in description
***/
var initPhotoSwipeFromDOM = function (gallerySelector) {
    /*parse slide data (url, title, size ...) from DOM elements
(children of gallerySelector)*/
    var parseThumbnailElements = function (el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;
        for (var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i];

            if (figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0]; /* <a> element*/
            size = linkEl.getAttribute("data-size").split("x");
            /*create slide object*/
            item = {
                src: linkEl.getAttribute("href"),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10),
            };
            if (figureEl.children.length > 1) {
                /*<figcaption> content*/
                item.title = figureEl.children[1].innerHTML;
            }
            if (linkEl.children.length > 0) {
                /*<img> thumbnail element, retrieving thumbnail url*/
                item.msrc = linkEl.children[0].getAttribute("src");
            }
            item.el = figureEl; /*save link to element for getThumbBoundsFn*/
            items.push(item);
        }
        return items;
    };
    /*find nearest parent element*/
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };
    /*triggers when user clicks on thumbnail*/
    var onThumbnailsClick = function (e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
        var eTarget = e.target || e.srcElement;
        /*find root element of slide*/
        var clickedListItem = closest(eTarget, function (el) {
            return el.tagName && el.tagName.toUpperCase() === "FIGURE";
        });
        if (!clickedListItem) {
            return;
        }
        /*find index of clicked item by looping through all child nodes
        alternatively, you may define index via data- attribute*/
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
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
            /*open PhotoSwipe if valid index found*/
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };
    /*parse picture index and gallery index from URL (#&pid=1&gid=2)*/
    var photoswipeParseHash = function () {
        var hash = window.location.hash.substring(1),
            params = {};
        if (hash.length < 5) {
            return params;
        }
        var vars = hash.split("&");
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split("=");
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
    var openPhotoSwipe = function (
        index,
        galleryElement,
        disableAnimation,
        fromURL
    ) {
        var pswpElement = document.querySelectorAll(".pswp")[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        // define options (if needed)
        options = {
            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute("data-pswp-uid"),
            getThumbBoundsFn: function (index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName("img")[0], // find thumbnail
                    pageYScroll =
                    window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();
                return {
                    x: rect.left,
                    y: rect.top + pageYScroll,
                    w: rect.width
                };
            },
        };
        // PhotoSwipe opened from URL
        if (fromURL) {
            if (options.galleryPIDs) {
                // parse real index when custom PIDs are used
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        // exit if index not found
        if (isNaN(options.index)) {
            return;
        }
        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }
        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll(gallerySelector);
    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute("data-pswp-uid", i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
};
// execute above function

initPhotoSwipeFromDOM(".photo-details");