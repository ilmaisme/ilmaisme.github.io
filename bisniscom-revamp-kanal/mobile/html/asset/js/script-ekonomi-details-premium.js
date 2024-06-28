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

//title fixed on details
var titlefx = document.querySelector('.onfixed')
window.addEventListener("scroll", function (event) {
    var titledt = document.querySelector('.detailsTitleCaption')
    var titlehg = titledt.getBoundingClientRect().top

    if (titlehg <= 0) {
        titlefx.classList.add('active');
    } else {
        titlefx.classList.remove('active');
    }
}, false);