//show more content
function showMore(el, txt, txtrev, parentTg) {
    if (!!parentTg) {
        let par = document.querySelector(parentTg),
            target = par.querySelector('.-jsShowTg');
        triggerTarget(el, txt, txtrev, target)
    } else {
        let target = el.parentNode.getElementsByClassName('-jsShowTg')[0];
        triggerTarget(el, txt, txtrev, target)
    }
}

function triggerTarget(elem, elemtxt, elemtxtrev, elemtarget) {
    let elActive = elem.classList.contains('active');
    tgHeight = elemtarget.scrollHeight;

    elem.classList.toggle('active');
    elemtarget.style.maxHeight = elemtarget.style.maxHeight ? null : tgHeight + 'px';

    if (!!elemtxt) {
        if (elActive == false) {
            elem.innerHTML = elemtxt;
        } else {
            elem.innerHTML = elemtxtrev;
        }
    }
}