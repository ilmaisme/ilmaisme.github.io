$(document).ready(function () {

    // detect idle time
    var time;
    let hdr = document.querySelector('.headerTop'),
        flash = document.querySelector('.flashnews');
    resetTimer()
    var events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach(function (name) {
        document.addEventListener(name, resetTimer, true);
        document.addEventListener(name, removehideNavigation, true);
    });

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(hideNavigation, 10000)
        // 1000 milliseconds = 1 second
    }

    //hide navigation
    function hideNavigation() {
        if (hdr != null && flash != null) {
            hdr.classList.add('hidden');
            flash.classList.add('hidden');
        }
    }

    function removehideNavigation() {
        if (hdr != null && flash != null) {
            hdr.classList.remove('hidden');
            flash.classList.remove('hidden')
        }
    }

    $(window).scroll(function () {
        scrollDisplayNav()
    })

    function scrollDisplayNav() {
        var a = $(window).scrollTop(),
            b = $(".headerTop").outerHeight(),
            c = $(".nav").outerHeight()
        if (a <= b + c) {
            if ($(".headerTop").find(".hidden").length == 0) {
                resetTimer()
            }
        }
    }
})

//show content faq
var accItem = document.getElementsByClassName('faqBox'),
    accHD = document.getElementsByClassName('-js-show');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {
    var itemClass = this.parentNode.className,
        contentClass = this.parentNode.getElementsByClassName('faqContent')[0];

    if (itemClass == 'faqBox close') {
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'faqBox close';
        }

        Array.from(document.getElementsByClassName('faqContent')).forEach(elem => {
            elem.style.maxHeight = 0;
        });

        this.parentNode.className = 'faqBox open active';
        contentClass.style.maxHeight = contentClass.scrollHeight + 'px';
    } else {
        this.parentNode.className = 'faqBox close';
        contentClass.style.maxHeight = 0;
    }
}