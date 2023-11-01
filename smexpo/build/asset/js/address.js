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
let tgSelect = $('#pAddress'),
    tgSelectCity = $('#pCAddress'),
    tgSelectDistr = $('#pDAddress'),
    tgSelectZip = $('#pZAddress'),
    tgParent = $('.-formAdd'),
    tgDelete = tgParent.find('.addressDel'),
    tgInput = $('#inputpAddress')
//edit address select2
let tgeSelect = $('#eAddress'),
    tgeSelectCity = $('#eCAddress'),
    tgeSelectDistr = $('#eDAddress'),
    tgeSelectZip = $('#eZAddress'),
    tgeParent = $('.-formEdit'),
    tgeDelete = tgeParent.find('.addressDel'),
    tgeInput = $('#inputeAddress')

$(document).ready(function () {
    if (tgSelect.is(':visible')) {
        //province
        tgSelect.select2({
            //placeholder: "Provinsi, Kota, Kecamatan, Kode Pos",
            selectionCssClass: "formSelect",
            dropdownCssClass: "formDropdown",
            dropdownParent: $('#paddressDrop'),
        })
        tgSelect.on('select2:select', function (e) {
            var data = e.params.data;
            //console.log(data);
            tgInput.val(data.text)
            console.log(tgInput.val());
            //open cities select2
            tgSelectCity.select2('open');
            tgParent.find('.-province').removeClass('active')
            tgParent.find('.-city').addClass('active')
        });
        tgSelect.on('select2:open', function () {
            //setTimeout(function () {
            //$(":focus").trigger( "blur" );
            //}, 50);
            tgParent.addClass('drop')
            $('input.select2-search__field').prop('placeholder', 'Cari provinsi');
        });
        tgSelect.on('select2:close', function () {
            tgParent.removeClass('drop')
        });

        //cities
        tgSelectCity.select2({
            selectionCssClass: "formSelect",
            dropdownCssClass: "formDropdown",
            dropdownParent: $('#paddressDrop'),
        })
        tgSelectCity.on('select2:select', function (e) {
            var data = e.params.data;
            //console.log(data);
            var address = tgInput.val();
            tgInput.val(address += ", " + data.text)
            console.log(tgInput.val());
            //open district select2
            tgSelectDistr.select2('open');
            tgParent.find('.-city').removeClass('active')
            tgParent.find('.-district').addClass('active')
        });
        tgSelectCity.on('select2:open', function () {
            tgParent.addClass('drop')
            $('input.select2-search__field').prop('placeholder', 'Cari Kota');
        });
        tgSelectCity.on('select2:close', function () {
            tgParent.removeClass('drop')
        });

        //district
        tgSelectDistr.select2({
            selectionCssClass: "formSelect",
            dropdownCssClass: "formDropdown",
            dropdownParent: $('#paddressDrop'),
        })
        tgSelectDistr.on('select2:select', function (e) {
            var data = e.params.data;
            //console.log(data);
            var address = tgInput.val();
            tgInput.val(address += ", " + data.text)
            console.log(tgInput.val());
            //open zip select2
            tgSelectZip.select2('open');
            tgParent.find('.-district').removeClass('active')
            tgParent.find('.-zip').addClass('active')
        });
        tgSelectDistr.on('select2:open', function () {
            tgParent.addClass('drop')
            $('input.select2-search__field').prop('placeholder', 'Cari kecamatan');
        });
        tgSelectDistr.on('select2:close', function () {
            tgParent.removeClass('drop')
        });

        //zip
        tgSelectZip.select2({
            selectionCssClass: "formSelect",
            dropdownCssClass: "formDropdown",
            dropdownParent: $('#paddressDrop'),
        })
        tgSelectZip.on('select2:select', function (e) {
            var data = e.params.data;
            //console.log(data);
            var address = tgInput.val();
            tgInput.val(address += ", " + data.text)
            console.log(tgInput.val());
            //done
            tgParent.find('.-zip').removeClass('active')
            tgDelete.addClass('active')
        });
        tgSelectZip.on('select2:open', function () {
            tgParent.addClass('drop')
            $('input.select2-search__field').prop('placeholder', 'Cari kode pos');
        });
        tgSelectZip.on('select2:close', function () {
            tgParent.removeClass('drop')
        });
    }

    $('.addressDel').on("click", function () {
        let par = $(this).parent('.select2'),
            checks = par.find('select')
        par.find('.-province').addClass('active');
        par.find('input').val("");
        $(this).removeClass('active');
        checks.val(null).trigger('change');
    });

    //edit address select2
    if (tgeSelect.is(':visible')) {
        //province
        tgeSelect.select2({
            //placeholder: "Provinsi, Kota, Kecamatan, Kode Pos",
            selectionCssClass: "formSelect",
            dropdownCssClass: "formDropdown",
            dropdownParent: $('#eaddressDrop'),
        })
        tgeSelect.on('select2:select', function (e) {
            var data = e.params.data;
            //console.log(data);
            tgeInput.val(data.text)
            console.log(tgeInput.val());
            //open cities select2
            tgeSelectCity.select2('open');
            tgeParent.find('.-province').removeClass('active')
            tgeParent.find('.-city').addClass('active')
        });
        tgeSelect.on('select2:open', function () {
            tgeParent.addClass('drop')
            $('input.select2-search__field').prop('placeholder', 'Cari provinsi');
        });
        tgeSelect.on('select2:close', function () {
            tgeParent.removeClass('drop')
        });

        //cities
        tgeSelectCity.select2({
            selectionCssClass: "formSelect",
            dropdownCssClass: "formDropdown",
            dropdownParent: $('#eaddressDrop'),
        })
        tgeSelectCity.on('select2:select', function (e) {
            var data = e.params.data;
            //console.log(data);
            var address = tgeInput.val();
            tgeInput.val(address += ", " + data.text)
            console.log(tgeInput.val());
            //open district select2
            tgeSelectDistr.select2('open');
            tgeParent.find('.-city').removeClass('active')
            tgeParent.find('.-district').addClass('active')
        });
        tgeSelectCity.on('select2:open', function () {
            tgeParent.addClass('drop')
            $('input.select2-search__field').prop('placeholder', 'Cari Kota');
        });
        tgeSelectCity.on('select2:close', function () {
            tgeParent.removeClass('drop')
        });

        //district
        tgeSelectDistr.select2({
            selectionCssClass: "formSelect",
            dropdownCssClass: "formDropdown",
            dropdownParent: $('#eaddressDrop'),
        })
        tgeSelectDistr.on('select2:select', function (e) {
            var data = e.params.data;
            //console.log(data);
            var address = tgeInput.val();
            tgeInput.val(address += ", " + data.text)
            console.log(tgeInput.val());
            //open zip select2
            tgeSelectZip.select2('open');
            tgeParent.find('.-district').removeClass('active')
            tgeParent.find('.-zip').addClass('active')
        });
        tgeSelectDistr.on('select2:open', function () {
            tgeParent.addClass('drop')
            $('input.select2-search__field').prop('placeholder', 'Cari kecamatan');
        });
        tgeSelectDistr.on('select2:close', function () {
            tgeParent.removeClass('drop')
        });

        //zip
        tgeSelectZip.select2({
            selectionCssClass: "formSelect",
            dropdownCssClass: "formDropdown",
            dropdownParent: $('#eaddressDrop'),
        })
        tgeSelectZip.on('select2:select', function (e) {
            var data = e.params.data;
            //console.log(data);
            var address = tgeInput.val();
            tgeInput.val(address += ", " + data.text)
            console.log(tgeInput.val());
            //done
            tgeParent.find('.-zip').removeClass('active')
            tgeDelete.addClass('active')
        });
        tgeSelectZip.on('select2:open', function () {
            tgeParent.addClass('drop')
            $('input.select2-search__field').prop('placeholder', 'Cari kode pos');
        });
        tgeSelectZip.on('select2:close', function () {
            tgeParent.removeClass('drop')
        });
    }
})

function triggerSelectActive(el) {
    par = document.querySelector(el)
    par.querySelector('.-province').classList.add('active')
}