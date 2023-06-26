$(document).ready(function () {
    //hide navigation
    let hdr = document.querySelector('.headerTop'),
        flash = document.querySelector('.flashnews');

    hideNavigation()

    function hideNavigation() {
        if (hdr != null && flash != null) {
            setTimeout(() => {
                hdr.classList.add('hidden');
                flash.classList.add('hidden');
            }, 10000);
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
                hideNavigation()
            }
        } else {
            hdr.classList.remove('hidden'), flash.classList.remove('hidden')
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