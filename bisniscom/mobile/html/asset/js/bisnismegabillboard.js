var script_tag = document.createElement('script');
script_tag.type = 'text/javascript';
script_tag.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
script_tag.async = true;

var stylesticky = document.createElement("style");
stylesticky.innerHTML =
    '.footer_sticky{' +
    '   width:100%;' +
    '   position:fixed;' +
    '   bottom:0;left: 0;' +
    '   z-index:1000;' +
    '   background:white;' +
    '   text-align:center;' +
    '   box-shadow: rgb(17 58 102 / 35%) -2px -2px 2px 0px;' +
    ' }' +
    ' .close_sticky{' +
    '   display: inline-block;' +
    '   cursor: pointer;' +
    '   color: black;' +
    '   padding: 2px;' +
    '   padding-left: 6px;' +
    '   z-index: 9999;' +
    '   font-family: Arial;' +
    '   font-size: 12px;' +
    '   right: 0px;' +
    '   position: absolute;' +
    '   top: -18px;' +
    '   line-height: 20px;' +
    '   height: 20px;' +
    '   width: 20px;' +
    '   box-shadow: rgba(17, 58, 102, 0.35) -2px -2px 2px 0px;' +
    '   border-radius: 50% 0px 0px;' +
    '   background-color: #fff;' +
    ' }';

var dv_l = document.createElement("div");
dv_l.id = "div-gpt-ad-leaderboard";
dv_l.style = "margin: 15px 0;";

var sc_l = document.createElement("script");
sc_l.innerHTML = "googletag.cmd.push(function() { googletag.display('div-gpt-ad-leaderboard'); });";
dv_l.appendChild(sc_l);

var dv_m1 = document.createElement("div");
dv_m1.id = "div-gpt-ad-multibanner1";
dv_m1.style = "margin: 15px 0;";

var sc_m1 = document.createElement("script");
sc_m1.innerHTML = "googletag.cmd.push(function() { googletag.display('div-gpt-ad-multibanner1'); });";
dv_m1.appendChild(sc_m1);

var dv_m2 = document.createElement("div");
dv_m2.id = "div-gpt-ad-multibanner2";
dv_m2.style = "margin: 15px 0;";

var sc_m2 = document.createElement("script");
sc_m2.innerHTML = "googletag.cmd.push(function() { googletag.display('div-gpt-ad-multibanner2'); });";
dv_m2.appendChild(sc_m2);

var ft_sticky = document.createElement("div");
ft_sticky.id = "footer_sticky";
ft_sticky.className = "footer_sticky";
ft_sticky.innerHTML = '<a onclick="closeAds()" class="close_sticky">X</a>';

var cls_sticky = document.createElement("script");
cls_sticky.innerHTML = 'function closeAds(){document.getElementById("footer_sticky").style.display = "none";}';

var dv_sticky = document.createElement("div");
dv_sticky.id = "div-gpt-ad-sticky";
dv_sticky.style = "margin: 15px 0;";

var sc_sticky = document.createElement("script");
sc_sticky.innerHTML =
    'googletag.cmd.push(function() { googletag.display(\'div-gpt-ad-sticky\'); });' +
    '        setTimeout(function(){ ' +
    '          var a = document.getElementById(\'footer_sticky\').clientHeight;' +
    '          if(a < 40)' +
    '          document.getElementById(\'close_button\').style.display = "none";' +
    '        }, 2500);';
dv_sticky.appendChild(sc_sticky);
ft_sticky.appendChild(cls_sticky);
ft_sticky.appendChild(dv_sticky);

var dv_oop = document.createElement("div");
dv_oop.id = "div-gpt-ad-oop";

var sc_oop = document.createElement("script");
sc_oop.innerHTML = "googletag.cmd.push(function() { googletag.display('div-gpt-ad-oop'); });";
dv_oop.appendChild(sc_oop);

var wv = navigator.userAgent.toLowerCase();
if (wv.includes('topbuzz') || wv.includes('babe') || wv.includes('bacaberita') || wv.includes('kurio') || wv.includes('ucbrowser') || wv.includes('line')) {
    ;
} else {
    document.head.appendChild(script_tag);
    document.head.appendChild(stylesticky);
    window.googletag = window.googletag || {
        cmd: []
    };
    googletag.cmd.push(function () {
        googletag.pubads().setCentering(true);
        googletag.pubads().enableSingleRequest();
        googletag.pubads().collapseEmptyDivs();
        googletag.enableServices();
    });
    setTimeout(function () {
        var mapping1 = googletag.sizeMapping()
            .addSize([1024, 0], [
                [970, 250],
                [970, 90],
                [728, 250],
                [728, 90]
            ])
            .addSize([800, 0], [
                [728, 250],
                [728, 90]
            ])
            .addSize([0, 0], [
                [336, 280],
                [300, 250]
            ])
            .build();

        var mapping2 = googletag.sizeMapping()
            .addSize([1024, 0], [
                [970, 90]
            ])
            .addSize([800, 0], [
                [728, 90]
            ])
            .addSize([0, 0], [
                [320, 50]
            ])
            .build();

        var checkCont1 = {
            innerText: window.document.location.pathname
        }; //post link
        var contentCheck = checkCont1.innerText.toLowerCase();
        var adsFilter = contentCheck.match(/\b()\b/i);
        console.log(adsFilter);
        if (adsFilter != null) {
            if (!document.getElementById("gpt-megabillboard")) {
                if (window.innerWidth < 1024) {
                    var ct = window.parent.document.getElementsByTagName("header")[0];
                    // var mbcont = document.createElement('div');
                    // mbcont.id = "megabillboard";
                    var mbcont = window.parent.document.getElementById("megabillboard");
                    mbcont.style.cssText = "width:100%!important;position:relative;top:50px;";
                    mbcont.innerHTML = "<a style='cursor:pointer; z-index:10001' onclick='hide()'><div style='background-color: #174193; position:absolute; right:5px; top:5px; color:white;text-align:center;padding:3px 5px; z-index:10001; font-size: 11px; font-weight: bold; letter-spacing: .5px;'>TUTUP</div></a>";
                    var mbdiv = document.createElement('div');
                    var mbscript = document.createElement('script');
                    var mbscript2 = document.createElement('script');
                    var mbscript3 = document.createElement('script');
                    var mbstyle = document.createElement('style');
                    mbstyle.innerHTML = '@media only screen and (min-width:768px) {#megabillboard{display:none !important;}}' +
                        '@media only screen and (max-width:768px) {#megabillboard{display:block;} #gpt-megabillboard iframe{height: 480px;}}';
                    var mbscgpt = document.createElement("script");
                    mbscgpt.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
                    mbscgpt.setAttribute("async", "");
                    var mbscgpt2 = document.createElement("script");
                    mbscgpt2.innerHTML = "" +
                        " window.googletag = window.googletag || {cmd: []}; " +
                        " googletag.cmd.push(function() {" +
                        " googletag.defineSlot('/543654989/Bisnis_Mobile_Megabillboard', [320, 480], 'gpt-megabillboard').addService(googletag.pubads());" +
                        " googletag.enableServices();" +
                        " googletag.display('gpt-megabillboard');" +
                        " });";
                    var mbdivgpt = document.createElement('div');
                    mbdivgpt.id = 'gpt-megabillboard';
                    mbdivgpt.style = 'z-index: 10000;width: 100%;border: none;position: absolute;text-align: center;top: 10px;';

                    var st = window.parent.document.getElementsByClassName("swipe-tabs bg-yellow menu-swipe slick-initialized slick-slider")[0];

                    var sH = 480;
                    var sW = ct.offsetWidth;
                    var hU = sH + 40;
                    var typeFile = "png";
                    var file = "";
                    var content = '';
                    content = "<div class='para_inside' style='width: " + sW + "px;height: 100%;position: absolute;top: 0;left: 0;clip: rect(auto,auto,auto,auto);margin:0px;-webkit-clip-path: polygon(0px 0px,100% 0px,100% 100%,0px 100%)!important;clip-path: polygon(0px 0px,100% 0px,100% 100%,0px 100%)!important; background-color: black;'><div style='bottom:0;width:100%; z-index:999; position:absolute; color:white; background-color: #174193; text-align:center; font-size: 11px; padding: 2px; font-weight: bold; letter-spacing: .6px;'>SCROLL UNTUK MELANJUTKAN MEMBACA</div><div style='margin:0px;width:" + sW + "px !important;position:fixed!important;top:10px!important;z-index:0!important;pointer-events:none!important;height:" + sH + "px;-moz-transform: translateZ(0); -webkit-transform: translateZ(0);-ms-transform: translateZ(0);-o-transform: translateZ(0);transform: translateZ(0);'><div style='margin:0px;moz-transform:translate(-50%,-50%);-webkit-transform: translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:100%;border:none;position:absolute;left:50%;top:50%; text-align: center; background-color: black;'>" + content + "</div></div></div>";

                    mbdiv.style.cssText = "display:block;width:auto!important;position:relative!important;left: 0px!important;top:0px!important;z-index:9999!important;transition:height 0s ease 0s!important;overflow:hidden!important;border:0px solid #ddd!important;padding: 0px !important;margin:0px 0px 0px!important;height:" + hU + "px!important;";
                    mbdiv.innerHTML = "<div style='display:block;width:" + sW + "px;height:" + hU + "px;'>" + content + "</div>";

                    mbscript3.innerHTML = 'var up=0; var lastScrollTop = 0; window.addEventListener("scroll", function(){var st = jQuery(this).scrollTop();if(st > lastScrollTop) up=0; else up=1; if(st <= 0)lastScrollTop = 0;else lastScrollTop = st;},false);';

                    mbscript.innerHTML = 'function hide(){ jQuery(".para_inside").hide();jQuery("#megabillboard").slideUp(300); close=1;if (window.parent.document.getElementsByClassName("swipe-tabs bg-yellow menu-swipe slick-initialized slick-slider")[0] != null) {$(window).scroll(function() {if ($(window).scrollTop() > 0) {window.parent.document.getElementsByClassName("swipe-tabs bg-yellow menu-swipe slick-initialized slick-slider")[0].style = "position:fixed;";} else {window.parent.document.getElementsByClassName("swipe-tabs bg-yellow menu-swipe slick-initialized slick-slider")[0].style = "position:relative;";}});}}';
                    mbscript2.innerHTML = 'var close=0;';

                    var elemScript = document.createElement("script");
                    elemScript.innerHTML = '$(window).scroll(function() {if ($(window).scrollTop() > 500) {window.parent.document.getElementsByClassName("swipe-tabs bg-yellow menu-swipe slick-initialized slick-slider")[0].style = "top:60px;position:fixed;";} else {window.parent.document.getElementsByClassName("swipe-tabs bg-yellow menu-swipe slick-initialized slick-slider")[0].style = "position:relative;top:";}});';

                    var elemScript2 = document.createElement("script");
                    elemScript2.innerHTML = '$(window).scroll(function() {if ($(window).scrollTop() > 0) {window.parent.document.getElementsByClassName("swipe-tabs bg-yellow menu-swipe slick-initialized slick-slider")[0].style = "position:fixed;";} else {window.parent.document.getElementsByClassName("swipe-tabs bg-yellow menu-swipe slick-initialized slick-slider")[0].style = "position:relative;";}});';

                    window.parent.document.head.appendChild(mbstyle);
                    mbcont.appendChild(mbdivgpt);
                    mbcont.appendChild(mbscgpt);
                    mbcont.appendChild(mbscgpt2);
                    mbcont.appendChild(mbdiv);
                    mbcont.appendChild(mbscript3);
                    mbcont.appendChild(mbscript2);
                    mbcont.appendChild(mbscript);

                    if (st != null) {
                        mbcont.appendChild(elemScript);
                    }

                    ct.parentNode.insertBefore(mbcont, ct);

                    setTimeout(function () {
                        var checkMB = document.getElementById('gpt-megabillboard').clientHeight;
                        if (checkMB < 40) {
                            if (st != null) {
                                mbcont.appendChild(elemScript2);
                            }
                            //document.getElementById('megabillboard').style.display = "none";
                        }
                    }, 2500);
                }
            }
        } else {
            if (!document.getElementById("gpt-megabillboard")) {
                if (window.innerWidth < 1024) {
                    var ct = window.parent.document.getElementsByTagName("header")[0];
                    // var mbcont = document.createElement('div');
                    // mbcont.id = "megabillboard";
                    var mbcont = window.parent.document.getElementById("megabillboard");
                    mbcont.style.cssText = "width:100%!important;position:relative;";
                    mbcont.innerHTML = "<a style='cursor:pointer; z-index:10001' onclick='hide()'><div style='background-color: #174193; position:absolute; right:5px; top:5px; color:white;text-align:center;padding:3px 5px; z-index:10001; font-size: 11px; font-weight: bold; letter-spacing: .5px;'>TUTUP</div></a>";
                    var mbdiv = document.createElement('div');
                    var mbscript = document.createElement('script');
                    var mbscript2 = document.createElement('script');
                    var mbscript3 = document.createElement('script');
                    var mbstyle = document.createElement('style');
                    mbstyle.innerHTML = '@media only screen and (min-width:768px) {#megabillboard{display:none !important;}}' +
                        '@media only screen and (max-width:768px) {#megabillboard{display:block;} #gpt-megabillboard iframe{height: 480px;}}';
                    var mbscgpt = document.createElement("script");
                    mbscgpt.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
                    mbscgpt.setAttribute("async", "");
                    var mbscgpt2 = document.createElement("script");
                    mbscgpt2.innerHTML = "" +
                        " window.googletag = window.googletag || {cmd: []}; " +
                        " googletag.cmd.push(function() {" +
                        " googletag.defineSlot('/543654989/Bisnis_Mobile_Megabillboard', [320, 480], 'gpt-megabillboard').addService(googletag.pubads());" +
                        " googletag.enableServices();" +
                        " googletag.display('gpt-megabillboard');" +
                        " });";
                    var mbdivgpt = document.createElement('div');
                    mbdivgpt.id = 'gpt-megabillboard';
                    mbdivgpt.style = 'z-index: 10000;width: 100%;border: none;position: absolute;text-align: center;top: 10px;';

                    var st = window.parent.document.getElementsByClassName("swipe-tabs bg-yellow menu-swipe slick-initialized slick-slider")[0];

                    var sH = 480;
                    var sW = ct.offsetWidth;
                    var hU = sH + 40;
                    var typeFile = "png";
                    var file = "";
                    var content = '';
                    content = "<div class='para_inside' style='width: " + sW + "px;height: 100%;position: absolute;top: 0;left: 0;clip: rect(auto,auto,auto,auto);margin:0px;-webkit-clip-path: polygon(0px 0px,100% 0px,100% 100%,0px 100%)!important;clip-path: polygon(0px 0px,100% 0px,100% 100%,0px 100%)!important; background-color: black;'><div style='bottom:0;width:100%; z-index:999; position:absolute; color:white; background-color: #174193; text-align:center; font-size: 11px; padding: 2px; font-weight: bold; letter-spacing: .6px;'>SCROLL UNTUK MELANJUTKAN MEMBACA</div><div style='margin:0px;width:" + sW + "px !important;position:fixed!important;top:10px!important;z-index:0!important;pointer-events:none!important;height:" + sH + "px;-moz-transform: translateZ(0); -webkit-transform: translateZ(0);-ms-transform: translateZ(0);-o-transform: translateZ(0);transform: translateZ(0);'><div style='margin:0px;moz-transform:translate(-50%,-50%);-webkit-transform: translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:100%;border:none;position:absolute;left:50%;top:50%; text-align: center; background-color: black;'>" + content + "</div></div></div>";

                    mbdiv.style.cssText = "display:block;width:auto!important;position:relative!important;left: 0px!important;top:0px!important;z-index:9999!important;transition:height 0s ease 0s!important;overflow:hidden!important;border:0px solid #ddd!important;padding: 0px !important;margin:0px 0px 0px!important;height:" + hU + "px!important;";
                    mbdiv.innerHTML = "<div style='display:block;width:" + sW + "px;height:" + hU + "px;'>" + content + "</div>";

                    mbscript3.innerHTML = 'var up=0; var lastScrollTop = 0; window.addEventListener("scroll", function(){var st = jQuery(this).scrollTop();if(st > lastScrollTop) up=0; else up=1; if(st <= 0)lastScrollTop = 0;else lastScrollTop = st;},false);';

                    mbscript.innerHTML = 'function hide(){ jQuery(".para_inside").hide();jQuery("#megabillboard").slideUp(300); close=1;if (window.parent.document.getElementsByClassName("swipe-tabs bg-yellow menu-swipe slick-initialized slick-slider")[0] != null) {$(window).scroll(function() {if ($(window).scrollTop() > 0) {window.parent.document.getElementsByClassName("swipe-tabs bg-yellow menu-swipe slick-initialized slick-slider")[0].style = "position:fixed;";} else {window.parent.document.getElementsByClassName("swipe-tabs bg-yellow menu-swipe slick-initialized slick-slider")[0].style = "position:relative;";}});}}';
                    mbscript2.innerHTML = 'var close=0;';

                    var elemScript = document.createElement("script");
                    elemScript.innerHTML = '$(window).scroll(function() {if ($(window).scrollTop() > 500) {window.parent.document.getElementsByClassName("swipe-tabs bg-yellow menu-swipe slick-initialized slick-slider")[0].style = "top:60px;position:fixed;";} else {window.parent.document.getElementsByClassName("swipe-tabs bg-yellow menu-swipe slick-initialized slick-slider")[0].style = "position:relative;top:";}});';

                    var elemScript2 = document.createElement("script");
                    elemScript2.innerHTML = '$(window).scroll(function() {if ($(window).scrollTop() > 0) {window.parent.document.getElementsByClassName("swipe-tabs bg-yellow menu-swipe slick-initialized slick-slider")[0].style = "position:fixed;";} else {window.parent.document.getElementsByClassName("swipe-tabs bg-yellow menu-swipe slick-initialized slick-slider")[0].style = "position:relative;";}});';

                    window.parent.document.head.appendChild(mbstyle);
                    mbcont.appendChild(mbdivgpt);
                    mbcont.appendChild(mbscgpt);
                    mbcont.appendChild(mbscgpt2);
                    mbcont.appendChild(mbdiv);
                    mbcont.appendChild(mbscript3);
                    mbcont.appendChild(mbscript2);
                    mbcont.appendChild(mbscript);

                    if (st != null) {
                        mbcont.appendChild(elemScript);
                    }

                    ct.parentNode.insertBefore(mbcont, ct);

                    setTimeout(function () {
                        var checkMB = document.getElementById('gpt-megabillboard').clientHeight;
                        if (checkMB < 40) {
                            if (st != null) {
                                mbcont.appendChild(elemScript2);
                            }
                            document.getElementById('megabillboard').style.display = "none";
                        }
                    }, 2500);
                }
            }
        }
    }, 1000);
}