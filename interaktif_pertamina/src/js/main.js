// $(window).on('load', function () {
//     setTimeout(function () {
        
//         fullpage_api.setAllowScrolling(true);
//         fullpage_api.setKeyboardScrolling(true);
//     }, 3000);
//     //console.log('loaded');
// })

$(document).ready(function () {
     // 1. Animation Preloader
    //  var animation = bodymovin.loadAnimation({
    //     container: document.getElementById('preloader'),
    //     renderer: 'svg',
    //     loop: true,
    //     autoplay: true,
    //     path: 'asset/json/thumb-digi.json',
    //     name: 'myAnimation',
    // });

    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        //navigation: true,
        //anchors: ['cover', 'start'],
        lockAnchors: true,
        //scrollOverflow: true,

        onLeave: function (origin, destination, direction) {
            var leavingSection = this;

            if (origin.index == 0 && direction == 'down') {
                $(".edu").velocity({
                    top: "0"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
            }
            if (origin.index == 1 && direction == 'up') {
                $(".edu").velocity({
                    top: "100vh"
                }, {
                    delay: 0,
                    duration: 700,
                    begin: function () {},
                    complete: function () {}
                });
            }
        }
    })

    fullpage_api.setAllowScrolling(false);
    fullpage_api.setKeyboardScrolling(false);
})

//GET HEIGHT Device
const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener("resize", appHeight)
appHeight()