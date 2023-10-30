//address pick label
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

//address select2
$(document).ready(function () {
    let tgSelect = $('#pAddress');
    if (tgSelect.is(':visible')) {
        tgSelect.select2({
            placeholder: "Provinsi, Kota, Kecamatan, Kode Pos",
            selectionCssClass: "formSelect",
            dropdownCssClass: "formDropdown",
            dropdownParent: $('#paddressDrop'),
            ajax: {
                url: 'asset/json/province.json',
                dataType: 'json',
                type: "GET",
                delay: 250,
                // data: function (params) {
                //     return {
                //         search: params.term
                //     }
                // },
                processResults: function (data) {
                    return {
                        results: $.map(data, function (item) {
                            return {
                                text: item.province_name,
                                id: item.province_code
                            }
                        })
                    };
                },
                cache: true
            }
            //closeOnSelect: false
        })
        tgSelect.on('select2:select', function (e) {
            var data = e.params.data;
            console.log(data);
        });
        tgSelect.on('select2:open', function () {
            setTimeout(function () {
                $(":focus").blur();
            }, 50);
        });
    }

    let tgeSelect = $('#eAddress');
    if (tgeSelect.is(':visible')) {
        tgeSelect.select2({
            placeholder: "Provinsi, Kota, Kecamatan, Kode Pos",
            selectionCssClass: "formSelect",
            dropdownCssClass: "formDropdown",
            dropdownParent: $('#eaddressDrop')
            //allowClear: true
        });
    }
})