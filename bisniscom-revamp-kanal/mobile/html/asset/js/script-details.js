function copyLink(id, el) {
    let cTxt = document.getElementById(id);

    cTxt.select();
    cTxt.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(cTxt.value);
    el.classList.add('-tooltip');
    setTimeout(function () {
        el.classList.remove('-tooltip');
    }, 1500);
}