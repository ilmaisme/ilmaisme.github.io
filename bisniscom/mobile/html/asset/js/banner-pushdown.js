var closePushdown = document.querySelector('.adsPushdown__close');
var pushdownBanner = document.querySelector('.adsPushdown');
var pushdownBannerInner = document.querySelector('.adsPushdown__inner');
var adsDownload = document.querySelector('.wrapper__ads-download');

//pushdownScroll 
// function pushdownScroll() {
//     var pd_height = 480 + 50;
//     var st = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset || window.scrollY;
//     if (st >= pd_height) {
//         document.body.classList.add("pushdown-scroll");
//     } else {
//         document.body.classList.remove("pushdown-scroll");
//     }
// }
// var heightadsDownload = adsDownload.offsetHeight;
// function topBannerInner() {
//     var st = window.pageYOffset || document.documentElement.scrollTop;
//     console.log(heightadsDownload, st)
//     if (st >= heightadsDownload + 10) {
//         pushdownBannerInner.classList.remove("top");
//     } else {
//         pushdownBannerInner.classList.add("top");
//     }
// }
// if (!!pushdownBanner) {
    //window.addEventListener("scroll", topBannerInner);
    //window.addEventListener("scroll", pushdownScroll);
// }

//close pushdown
if (closePushdown != null) {
    closePushdown.addEventListener("click", function () {
        //window.removeEventListener("scroll", pushdownScroll);
        pushdownBanner.style.display = "none";
    });
}