$(document).ready(function () {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    var loadDeferredStyles = function () {
        var addStylesNode = document.getElementById("deferred-styles");
        var replacement = document.createElement("div");
        replacement.innerHTML = addStylesNode.textContent;
        document.body.appendChild(replacement)
        addStylesNode.parentElement.removeChild(addStylesNode);
    };
    var raf = requestAnimationFrame || mozRequestAnimationFrame ||
        webkitRequestAnimationFrame || msRequestAnimationFrame;
    if (raf) raf(function () {
        window.setTimeout(loadDeferredStyles, 0);
    });
    else window.addEventListener('load', loadDeferredStyles);

    //preloader
    if ($(window).load(function() {
        $("#preloader").fadeOut(200, function() {
            $(this).remove();
            })
        })
    )
        
    // scroll
	/*$(window).scroll(function () {
		var scrollpos = $(window).scrollTop();
		// back to top
        if(scrollpos > $(window).height()) {
            $('.header').addClass("header--fixed");
        }else{
            $('.header').removeClass("header--fixed");
        }
	});*/

    //scrollreveal 
    /*window.sr = ScrollReveal({
        mobile: true,
        reset: true,
        viewFactor: 0.2
    });
    sr.reveal('.lazyload', {
        duration: 1000,
        scale: 0.9,
        reset: true,
    }), sr.reveal(".credit__team", {
        duration: 300,
        delay: 200,
        origin: "right",
        distance: "10vw"
    }, 100), sr.reveal(".credit__member", {
        duration: 300,
        delay: 300,
        origin: "left",
        distance: "10vw"
    }, 100);*/
    
    //overflow auto
    $("#view-initiatives-button").click(function (e) {
        // $("body").removeClass("overflow-hidden");

        e.preventDefault();
        $("html, body").animate({
            scrollTop: $('#chapter').offset().top
        }, 'slow');
    });

    //share
    $('.js-share').click(function(e) {
        e.preventDefault();
        $(".js-share-wrap").toggleClass("display--hide");
    });

    // menu
    $('.js-menu').click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        $("body").toggleClass("js-menu--show");
    });
    $(document).click(function() {
        $("body").removeClass("js-menu--show");
    });
    $('.js-menu-link a').click(function(e) {
        e.preventDefault();
        lnk = $(this).parent().attr('data-href');
        $('html, body').animate({
            scrollTop: $(lnk).offset().top
        }, 1500);
        // console.log(lnk);
        $('.js-menu-link a').removeClass('nav__link--active');
        $(this).addClass('nav__link--active');
        $("body").removeClass("js-menu--show");
    });

    // Scroll to Top
    $('.js-backtop').click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 'slow');
    });

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // mobile
    } else {
        var wa = $(".js-share__item--wa").hide();

    }
});
