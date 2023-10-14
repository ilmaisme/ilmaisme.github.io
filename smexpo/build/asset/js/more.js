//show more content
function showMore(el, txt, txtrev) {
    let target = el.parentNode.getElementsByClassName('-jsShowTg')[0];
        elActive = el.classList.contains('active');
    tgHeight = target.scrollHeight;

    el.classList.toggle('active');
    target.style.maxHeight = target.style.maxHeight ? null : tgHeight + 'px';

    if (!!txt) {
        if (elActive == false) {
            el.innerHTML = txt;
        } else {
            el.innerHTML = txtrev;
        }
    }
}