//update filter on mobile
let filter = document.querySelector('#sortmob');
if (!!filter) {
    updateFilter()
}

$(window).on('resize', function () {
    if (!!filter) {
        updateFilter()
    }
})

function updateFilter() {
    if (viewport().width >= 1230) {
        // console.log("desktop")
        filter.classList.remove('mobile');
    } else {
        // console.log("mobile")
        filter.classList.add('mobile')
    }
}

function showFilter() {
    filter.classList.add('active');
}

function hideFilter() {
    filter.classList.remove('active');
}

//show hide content
function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

function toggleItem(el) {
    var itemClass = el.parentNode.className,
        contentClass = el.parentNode.getElementsByClassName('-jsToggleTg')[0];

    if (hasClass(el.parentNode, 'close')) {
        el.parentNode.classList.remove('close');
        el.parentNode.classList.add('open', 'active');
        contentClass.style.maxHeight = contentClass.scrollHeight + 'px';
    } else {
        el.parentNode.classList.remove('open', 'active');
        el.parentNode.classList.add('close');
        contentClass.style.maxHeight = 0;
    }
}

function setMaxheight() {
    let target = document.querySelectorAll('.-jsToggleTg');
    let maxHeight = 0;

    for (let i = 0; i < target.length; i++) {
        maxHeight = target[i].scrollHeight;
        target[i].style = "max-height: " + maxHeight + "px";
    }
}

function closePopover() {
    popovers.forEach((item) => {
        item.classList.remove('visible')
    })
}

function resetLocationOption() {
    target = document.querySelectorAll('.sortCheck');

    target.forEach((item) => {
        item.checked = false;
    })
}