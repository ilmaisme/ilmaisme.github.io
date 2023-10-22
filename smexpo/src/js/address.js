function getValue(el, elclass, tg) {
    content = el.getAttribute('value');
    target = document.querySelector(tg)
    els = document.querySelectorAll(elclass)
    els.forEach((elem) => {
        elem.classList.remove('active')
    })
    target.value = content;
    target.oninput = function () {
        el.classList.remove('active')
    };
    el.classList.add('active')
}

$(document).ready(function () {
    let tgSelect = $('#pAddress');
    if (tgSelect.is(':visible')) {
        tgSelect.select2({
            placeholder: "Provinsi, Kota, Kecamatan, Kode Pos",
            selectionCssClass: "formSelect",
            dropdownCssClass: "formDropdown",
            //allowClear: true
        });
    }

    let tgeSelect = $('#eAddress');
    if (tgeSelect.is(':visible')) {
        tgeSelect.select2({
            placeholder: "Provinsi, Kota, Kecamatan, Kode Pos",
            selectionCssClass: "formSelect",
            dropdownCssClass: "formDropdown",
            //allowClear: true
        });
    }
})