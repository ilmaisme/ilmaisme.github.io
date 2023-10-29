//trigger close component
function triggerClose(el, parent, target) {
    let compo = el.closest(parent).querySelector(target);
    compoActive = compo.classList.contains('active');
    compo.classList.toggle('active');
}

//copy share link
function copyLink(id) {
    let cTxt = document.getElementById(id);
    cTxt.select();
    cTxt.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(cTxt.value);
}