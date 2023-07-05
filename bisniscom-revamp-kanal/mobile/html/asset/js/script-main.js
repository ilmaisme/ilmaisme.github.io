let back = document.querySelector(".-js-backtop")
window.addEventListener("scroll", function (event) {
    // var top = this.scrollY,
    //     left = this.scrollX;
    var top = window.pageYOffset || document.documentElement.scrollTop

    if (top > 175) {
        back.style.display = "block";
    } else {
        back.style.display = "none";
    }
}, false);
back.addEventListener("click", (event) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

//close billboard
var cBillboard = document.querySelector('.billboardClose');
if (cBillboard != null) {
    cBillboard.addEventListener("click", function () {
        this.parentNode.style.display = "none";
    });
}

//open menu
function toggleMenu(e) {
    let menu = document.querySelector('.menuPanel');
    e.classList.toggle('-active');
    menu.classList.toggle('-open');
    event.stopPropagation();
}

document.body.addEventListener('click', function (e) {
    this.getElementsByClassName('menuPanel')[0].classList.remove('-open');
    this.getElementsByClassName('menuBar')[0].classList.remove('-active');
});

// active scroll left
let das = document.querySelector('[data-active=scroll]')
if (!!das) {
    let sadt = das.querySelector('.-active')
    if (sadt) {
        var sw = sadt.clientWidth,
            sv = sadt.getBoundingClientRect()['x']
    } else {
        var sw = 0,
            sv = 0
    }
    das.scrollLeft = sv - sw
}