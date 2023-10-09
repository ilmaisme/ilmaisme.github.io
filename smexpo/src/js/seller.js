function triggerActiveButton(el, txt, txtnon) {
    elActive = el.classList.contains('active');
    if (elActive == false) {
        el.innerHTML = txt;
    } else {
        el.innerHTML = txtnon;
    }
    el.classList.toggle('active');
}

//copy share link
function copyLink(id) {
    let cTxt = document.getElementById(id);    
    cTxt.select();
    cTxt.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(cTxt.value);
}