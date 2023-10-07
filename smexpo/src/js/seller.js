function triggerActiveButton(el, txt, txtnon) {
    elActive = el.classList.contains('active');
    if (elActive == false) {
        el.innerHTML = txt;
    } else {
        el.innerHTML = txtnon;
    }
    el.classList.toggle('active');
}