function triggerActiveButton(el, txt, txtrev) {
    elActive = el.classList.contains('active');
    el.classList.toggle('active');
    if (!!txt) {
        if (elActive == false) {
            el.innerHTML = txt;
        } else {
            el.innerHTML = txtrev;
        }
    }
}

//copy share link
function copyLink(id) {
    let cTxt = document.getElementById(id);
    cTxt.select();
    cTxt.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(cTxt.value);
}