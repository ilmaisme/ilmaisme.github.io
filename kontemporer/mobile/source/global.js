$(document).ready(function () {

    // sticky menu
    let hd = $("header");
    let hdl = $(".headerLogo");

    $(window).scroll(function () {
        var a = $(window).scrollTop(),
            b = hd.outerHeight();
        a > b + 40 ? (hd.addClass("active"),
            hdl.addClass("scale")) :
            (hd.removeClass("active"),
                hdl.removeClass("scale"))
    })

    //scroll menu nav
    let nav = $('.navLink.active');
    if (nav.length > 0) {
        let msp = nav.position().left - nav.width();
        $('.navList').animate({
            scrollLeft: msp
        });
    }

})


//textarea autoresize
document.querySelectorAll('textarea').forEach(textarea => {
    textarea.style.overflowY = 'hidden';
    textarea.addEventListener('input', () => {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    });
});

//popup dismiss
var mall = document.querySelector('.popup');
if (!!mall) {
    document.querySelectorAll('[data-modal-button="dismiss"]').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.popup.active').forEach(popup => {
                popup.classList.remove('active');
            });
        });
    });

    mall.addEventListener('click', function (e) {
        const inner = mall.querySelector('.popupWrap');
        if (!inner.contains(e.target)) {
            mall.classList.remove('active');
        }
    });
}

//trigger active class
function triggerActive(item) {
    let target = document.querySelector(item);
    if (!!target) {
        let targetActive = target.classList.contains('active');
        if (targetActive == false) {
            target.classList.add('active');
        } else {
            target.classList.remove('active');
        }
    }
}

function backToTop() {
    // $(window).scrollTop(0);
    $('html,body').stop().animate({
        scrollTop: 0
    }, 1000);
}

//header menu scroll
function updateNavListAlignment() {
    const navLists = document.querySelectorAll('.navList');

    navLists.forEach(navList => {
        const container = navList.closest('.nav');
        if (!container) return;

        if (navList.scrollWidth > container.clientWidth) {
            navList.classList.add('is-overflowing');
        } else {
            navList.classList.remove('is-overflowing');
        }
    });
}

window.addEventListener('load', updateNavListAlignment);
window.addEventListener('resize', updateNavListAlignment);

document.addEventListener('click', function (e) {
    const toggle = document.getElementById('menuToggle');
    const menu = document.querySelector('.menuList');

    if (!toggle) return;

    // If menu is open and click is outside both the menu and the checkbox label
    if (toggle.checked && !menu.contains(e.target) && e.target !== toggle && !document.querySelector(`label[for="${toggle.id}"]`)?.contains(e.target)) {
        toggle.checked = false;
    }
});