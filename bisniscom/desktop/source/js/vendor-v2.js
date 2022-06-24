(function($) {
    $(function() {
        $(document).ajaxStart(function() {
            $(".loading").show();
        }).ajaxStop(function() {
            $(".loading").hide();
        });
        $(document).ready(function() {
            $(".ads-bisnismuda__icon").click(function() {
                $(".container.ads-bisnismuda__flex").hide();
            });
            $("#sticky-share2").stick_in_parent({
                parent: ".sticky-wrapper",
                offset_top: 100,
            });
            $("#sticky-img-infografik").stick_in_parent({
                parent: ".sticky-wrapper",
                offset_top: 85,
            });
            $("#sticky-newfoto").stick_in_parent({
                parent: ".wrapper-list-news",
                offset_top: 55,
            });
            $("#sticky-newfoto-detail").stick_in_parent({
                parent: ".kanal_container",
                offset_top: 55,
            });
            $("#sticky0").sticky({
                topSpacing: -5,
                bottomSpacing: 0,
            });
            $("#sticky1").sticky({
                topSpacing: 35,
                bottomSpacing: 0,
            });
            $("header.home #sticky1").sticky({
                topSpacing: -5,
                bottomSpacing: 0,
            });
            $("#sticky2").stick_in_parent({
                parent: ".wrapper-list-news",
                offset_top: 90,
            });
            $("#sticky_live").stick_in_parent({
                parent: ".description_detail",
                offset_top: 75,
            });
            $("#sticky-share").sticky({
                topSpacing: 80,
                bottomSpacing: 0,
            });
            $(".kanal-ekonomi").slick({
                slidesToShow: 6,
                slidesToScroll: 6,
                arrows: false,
                infinite: false,
                swipeToSlide: true,
                useTransform: true,
                useCSS: false,
                lazyLoad: "ondemand",
                touchThreshold: 5,
                speed: 500,
                mobileFirst: true,
            });
            if ($(".font-size").length) {
                $(".font-size-link").on("click", function() {
                    var newData;
                    var data = parseInt($(".font-size").attr("data-font"));
                    if ($(this).hasClass("plus")) {
                        newData = data + 2;
                        if (newData <= 22) {
                            $(".font-size").attr("data-font", newData);
                            $(".wrapper-details .description").css({
                                "font-size": newData
                            });
                            $(".wrapper-details .description .baca-juga").css({
                                "font-size": newData,
                            });
                        }
                    } else {
                        newData = data - 2;
                        if (newData >= 10) {
                            $(".font-size").attr("data-font", newData);
                            $(".wrapper-details .description").css({
                                "font-size": newData
                            });
                            $(".wrapper-details .description .baca-juga").css({
                                "font-size": newData,
                            });
                        }
                    }
                });
            }
            if ($(".hover-emoticon").length != 0) {
                $(".hover-emoticon").hover(function() {
                    var src = $(this).children().attr("src");
                    var data = $(this).children().attr("data");
                    $(this).children().attr("src", data);
                    $(this).children().attr("data", src);
                }, function() {
                    var src = $(this).children().attr("src");
                    var data = $(this).children().attr("data");
                    $(this).children().attr("src", data);
                    $(this).children().attr("data", src);
                });
            }
            $("#thumbFoto > li > a").on("click", function() {
                var bigFoto = $(this).find("img").attr("data-big");
                $("#photoDetails a").attr("href", bigFoto);
                $("#photoDetails a img").attr("src", bigFoto);
                $("#thumbFoto > li").removeClass("active");
                $(this).parent().addClass("active");
            });
            if ($(".link-widget-beacukai").length) {
                $(".link-widget-beacukai").slick({
                    infinite: false,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    prevArrow: $(".link-widget-beacukai-button .prev"),
                    nextArrow: $(".link-widget-beacukai-button .next"),
                });
                $(".link-widget-beacukai-2").slick({
                    infinite: false,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    prevArrow: $(".link-widget-beacukai-button-2 .prev"),
                    nextArrow: $(".link-widget-beacukai-button-2 .next"),
                });
                $('.nav-tabs a[href="#terpopuler"]').click(function(e) {
                    e.preventDefault();
                    $(this).tab("show");
                    $(".link-widget-beacukai").slick("refresh");
                    $(".link-widget-beacukai-2").slick("refresh");
                });
                $('.nav-tabs a[href="#hot-topic"]').click(function(e) {
                    e.preventDefault();
                    $(this).tab("show");
                    $(".link-widget-beacukai-2").slick("refresh");
                    $(".link-widget-beacukai").slick("refresh");
                });
            }
            $(".link-live").slick({
                infinite: false,
                slidesToShow: 7,
                slidesToScroll: 1,
                prevArrow: $(".link-live-button .prev"),
                nextArrow: $(".link-live-button .next"),
            });
            $(".link-live a").on("click", function() {
                var id = $(this).attr("href");
                $(".timeline-article").removeClass("active");
                $(id).toggleClass("active");
                $("html, body").animate({
                    scrollTop: $(id).offset().top - 154,
                }, 500);
                return false;
            });
            $("#back-to-top").on("click", function() {
                $("html, body").animate({
                    scrollTop: 0
                }, 500);
                return false;
            });
            $(".nav-button").click(function() {
                $(".nav-button, .side-nav, .nav-header, .vid-header, .vid-header-tex, .kan-header-tex, .nav-options").toggleClass("nav-open");
                if ($("#sticky1 .side-nav").hasClass("nav-open")) {
                    if ($("html,body").scrollTop() > 175) {
                        $(".side-nav").css({
                            top: "65px"
                        });
                    } else {
                        $(".side-nav").css({
                            top: "105px"
                        });
                    }
                } else {
                    $("#sticky1 .side-nav").css({
                        top: "105px"
                    });
                }
                if ($("#sticky0 .side-nav").hasClass("nav-open")) {
                    if ($("html,body").scrollTop() > 175) {
                        $(".side-nav").css({
                            top: "115px"
                        });
                    } else {
                        $(".side-nav").css({
                            top: "172px"
                        });
                    }
                } else {
                    $("#sticky0 .side-nav").css({
                        top: "172px"
                    });
                }
                return false;
            });
            $(".nav-link.the-menu").click(function() {
                $(".nav-button, .side-nav, .nav-header, .vid-header, .vid-header-tex, .kan-header-tex, .nav-options").removeClass("nav-open");
                $(".menu-container").addClass("displayed");
                return false;
            });
        });
        // $(window).on('load', function () {});
        $(window).scroll(function() {
            if ($(this).scrollTop() > 150) {
                $(".gateway-wc").addClass("nonactive");
            } else {
                $(".gateway-wc").removeClass("nonactive");
            }
            if ($(this).scrollTop() > 175) {
                $("#back-to-top, .top-header-floating").fadeIn("slow");
                $("#back-to-top").fadeIn("slow");
                $("#logo_scroll, .top-header-floating").fadeIn("slow");
                $("#logo_scroll").fadeIn("slow");
            } else {
                $(".menu-channel").css({
                    padding: "inherit"
                });
                $("#back-to-top").fadeOut("slow");
                $("#back-to-top, .top-header-floating").fadeOut("slow");
                $("a.change-home").html('<div class="li-home"></div>');
                $("#logo_scroll").fadeOut("slow");
                $("#logo_scroll, .top-header-floating").fadeOut("slow");
            }
            if ($(this).scrollTop() > 175 && $("a.change-home.style2").length) {} else {
                $("a.change-home.style2").html('<div class="li-home_black"></div>');
            }
            if ($("#sticky1 .side-nav").hasClass("nav-open")) {
                if ($(this).scrollTop() > 175) {
                    $(".side-nav").css({
                        top: "65px"
                    });
                } else {
                    $(".side-nav").css({
                        top: "105px"
                    });
                }
            } else {
                $("#sticky1 .side-nav").css({
                    top: "105px"
                });
            }
            if ($("#sticky0 .side-nav").hasClass("nav-open")) {
                if ($(this).scrollTop() > 175) {
                    $(".side-nav").css({
                        top: "115px"
                    });
                } else {
                    $(".side-nav").css({
                        top: "172px"
                    });
                }
            } else {
                $("#sticky0 .side-nav").css({
                    top: "172px"
                });
            }
            if ($(".wrapper-redaction").length) {
                var hT = $(".wrapper-redaction").offset().top
                  , hH = $(".wrapper-redaction").outerHeight()
                  , wH = $(window).height()
                  , wS = $(this).scrollTop();
                if (wS + 555 > hT + hH - wH) {} else {}
            }
            if ($(".widget.emoticon").length) {
                var hT = $(".widget.emoticon").offset().top
                  , hH = $(".widget.emoticon").outerHeight()
                  , wH = $(window).height()
                  , wS = $(this).scrollTop();
                if (wS + 300 > hT + hH - wH) {
                    $("#sticky-share").unstick();
                } else {
                    $("#sticky-share").sticky({
                        topSpacing: 80,
                        bottomSpacing: 0,
                    });
                }
            }
        });
        $(window).resize(function() {});
    });
}
)(jQuery);
var initPhotoSwipeFromDOM = function(gallerySelector) {
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes, numNodes = thumbElements.length, items = [], figureEl, linkEl, size, item;
        for (var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i];
            if (figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0];
            size = linkEl.getAttribute("data-size").split("x");
            item = {
                src: linkEl.getAttribute("href"),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10),
            };
            if (figureEl.children.length > 1) {
                item.title = figureEl.children[1].innerHTML;
            }
            if (linkEl.children.length > 0) {
                item.msrc = linkEl.children[0].getAttribute("src");
            }
            item.el = figureEl;
            items.push(item);
        }
        return items;
    };
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function(el) {
            return el.tagName && el.tagName.toUpperCase() === "FIGURE";
        });
        if (!clickedListItem) {
            return;
        }
        var clickedGallery = clickedListItem.parentNode, childNodes = clickedListItem.parentNode.childNodes, numChildNodes = childNodes.length, nodeIndex = 0, index;
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
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1)
          , params = {};
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
    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll(".pswp")[0], gallery, options, items;
        items = parseThumbnailElements(galleryElement);
        options = {
            galleryUID: galleryElement.getAttribute("data-pswp-uid"),
            getThumbBoundsFn: function(index) {
                var thumbnail = items[index].el.getElementsByTagName("img")[0]
                  , pageYScroll = window.pageYOffset || document.documentElement.scrollTop
                  , rect = thumbnail.getBoundingClientRect();
                return {
                    x: rect.left,
                    y: rect.top + pageYScroll,
                    w: rect.width
                };
            },
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
        gallery = new PhotoSwipe(pswpElement,PhotoSwipeUI_Default,items,options);
        gallery.init();
    };
    var galleryElements = document.querySelectorAll(gallerySelector);
    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute("data-pswp-uid", i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
};
initPhotoSwipeFromDOM(".photo-details");
$(function() {
    $(".share").on("click", function(e) {
        var urlpost = $(this).data("url");
        var titlepost = $(this).data("title");
        var dataShare = $(this).attr("data-share");
        $('.share[data-share="' + dataShare + '"]').toggleClass("active");
        if ($(this).hasClass("active")) {
            var a = $('.share[data-share="' + dataShare + '"]').parent().parent().parent().next().find(":first-child");
            if (typeof a != "undefined") {
                a.hide();
            }
            $(".list-news li > div:last-child > a div, .list-news.channel li > div:first-child > a div").css({
                overflow: "visible"
            });
            $('.share[data-share="' + dataShare + '"]').parent().parent().parent().next().find(".wrapper-img > .fa").hide();
            $(this).next().show();
            $(this).next().html('<ul><li><a href="javascript:;" onclick="sharesocmed(\'' + urlpost + '\',\'fb\');"><i class="fa fa-facebook"></i></a></li><li><a href="javascript:;" onclick="sharesocmed(\'' + titlepost + " " + urlpost + '\',\'twitter\');"><i class="fa fa-twitter"></i></a></li><li><a href="javascript:;" onclick="sharesocmed(\'' + urlpost + "','gplus');\"><i class=\"fa fa-google-plus\"></i></a></li></ul>");
        } else {
            var a = $('.share[data-share="' + dataShare + '"]').parent().parent().parent().next().find(":first-child");
            if (typeof a != "undefined") {
                a.show();
            }
            $(".list-news li > div:last-child > a div, .list-news.channel li > div:first-child > a div").css({
                overflow: "hidden"
            });
            $('.share[data-share="' + dataShare + '"]').parent().parent().parent().next().find(".wrapper-img > .fa").hide();
            $(this).next().hide();
            $(this).next().html("");
        }
        e.preventDefault();
    });
});
function sharesocmed(share_url, title) {
    if (title == "fb") {
        base_url = "https://www.facebook.com/sharer/sharer.php?u=";
    } else if (title == "twitter") {
        base_url = "https://twitter.com/intent/tweet?text=";
        $.ajax({
            url: window.location.protocol + "//" + window.location.host + "/" + "ajax/shortenurl?url=" + encodeURIComponent(share_url),
            async: false,
            type: "GET",
            cache: false,
        }).done(function(data) {
            var shortenResult = data;
            display_popup_share(base_url, shortenResult, title);
        });
        return false;
    } else if (title == "telegram") {
        base_url = "https://telegram.me/share/url?url=";
    } else if (title == "linkedin") {
        base_url = "https://www.linkedin.com/shareArticle?mini=true&url=";
    } else if (title == "email") {
        base_url = "https://www.addthis.com/tellfriend_v2.php?v=300&winname=addthis&pub=ra-5742dafe41ccba9e&source=tbx-300&lng=id&s=email&wid=nm49&url=" + share_url + "&ate=AT-at_com/-/-/58049f4c45032614/2&uid=58045b8288a1772d&description=share&uud=1&ct=1&ui_email_to=&ui_email_from=&ui_email_note=&tt=0&captcha_provider=recaptcha2&pro=0&ats=imp_url%3D0%26url%3Dhttp%253A%252F%252Fwww.bisnis.com";
        window.open(base_url, "_blank");
        return false;
    } else if (title == "line") {
        base_url = "https://social-plugins.line.me/lineit/share?url=";
    } else if (title == "whatsapp") {
        base_url = "https://api.whatsapp.com/send?text=" + share_url;
        window.open(base_url, "_blank");
    } else {
        base_url = "https://plus.google.com/share?url=";
    }
    display_popup_share(base_url, share_url, title);
}
function copyLink() {
    document.removeEventListener("copy", addCredit);
    var copyText = document.getElementById("url");
    copyText.type = "text";
    copyText.select();
    document.execCommand("copy");
    copyText.type = "hidden";
    document.addEventListener("copy", addCredit);
}
function display_popup_share(base_url, share_url, title) {
    var url = base_url + encodeURIComponent(share_url);
    var width = 550;
    var width_scr = (screen.width - width) / 2;
    window.open(url, title, "left=" + width_scr + ",top=50,width=" + width + ",height=400,toolbar=0,menubar=0,scrollbars=0,location=0,resizable=1");
}
