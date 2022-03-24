////////////////////////////// ADS : PUSHDOWN //////////////////////////////////////
var closePushdown = document.querySelector('.ol_close_ad');
var pushdownBanner = document.querySelector('.pushdown-banner');
var pushdown = document.querySelector('.pushdown');
var pushdownHide = document.querySelector('.pushdown-hide');

//pushdownScroll 
function pushdownScroll() {
    var pd_height = 480 + 20;
    var st = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset || window.scrollY;
    // console.log(st);
    if (st >= pd_height) {
        document.body.classList.add("pushdown-scroll");
    } else {
        document.body.classList.remove("pushdown-scroll");
    }
}
if (!!pushdownBanner) {
    window.addEventListener("scroll", pushdownScroll);
}

//close pushdown
if (closePushdown != null) {
    closePushdown.addEventListener("click", function () {
        window.removeEventListener("scroll", pushdownScroll);
        pushdownBanner.style.display = "none";
        pushdownBanner.classList.remove("pushdown-banner");
        pushdownBanner.classList.add("pushdown-hide");
        document.body.classList.remove("pushdown-scroll");
        // document.body.classList.remove("pushdown");
    });
}