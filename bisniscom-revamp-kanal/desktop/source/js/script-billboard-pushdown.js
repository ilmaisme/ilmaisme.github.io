var closePushdown = document.querySelector('.billboardPushdownClose');
var pushdownBanner = document.querySelector('.billboardPushdown');

//pushdownScroll 
function pushdownScroll() {
    var pd_height = 250;
    var st = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset || window.scrollY;
    // console.log(st);
    if (st >= pd_height) {
        document.body.classList.add("bp_scroll");
    } else {
        document.body.classList.remove("bp_scroll");
    }
}
if (pushdownBanner != null) {
    window.addEventListener("scroll", pushdownScroll);
}

window.addEventListener("load", pushdownScroll);

//close pushdown
if (closePushdown != null) {
    closePushdown.addEventListener("click", function () {
        window.removeEventListener("scroll", pushdownScroll);
        pushdownBanner.style.display = "none";
        pushdownBanner.classList.remove("billboardPushdown");
        pushdownBanner.classList.add("billboardPushdown-hide");
        document.body.classList.remove("bp_scroll");
    });
}