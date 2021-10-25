$(document).ready(function () {
    //custom select search
    let cs = ".custom-select",
        selected = $(cs).find("option:selected");
    $(cs).each(function () {
        var classes = $(this).attr("class"),
            id = $(this).attr("id"),
            name = $(this).attr("name");
        var template = '<div class="' + classes + '">';
        // template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
        template += '<span class="custom-select-trigger">' + selected.html() + '</span>';
        template += '<div class="custom-options">';
        $(this).find("option").each(function () {
            template += '<span class="custom-option ' + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });
        template += '</div></div>';

        $(this).wrap('<div class="custom-select-wrapper"></div>');
        $(this).hide();
        $(this).after(template);
    });

    let co = ".custom-option";
    let cst = ".custom-select-trigger";
    $(cst).on("click", function (e) {
        $('html').one('click', function () {
            $(cs).removeClass("opened");
        });
        $(this).parents(cs).toggleClass("opened");
        e.stopPropagation();
    });
    var val = $('.formSelect').val();
    console.log(val);
    $(co).on("click", function () {
        selected.removeAttr("selected");
        $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value")).change();
        $(this).parents(".custom-options").find(co).removeClass("selection");
        $(this).addClass("selection");
        $(this).parents(cs).removeClass("opened");
        $(this).parents(cs).find(cst).text($(this).data("value"));
        var val = $('.formSelect').val();
        console.log(val);
    });

    //filter search date
    $('#search-date').daterangepicker({
        "showDropdowns": true,
        "singleDatePicker": true,
        "locale": {
            "format": "DD/MM/YYYY",
            "separator": " - ",
            "applyLabel": "Pilih",
            "cancelLabel": "Batal",
            "fromLabel": "From",
            "toLabel": "To",
            "weekLabel": "W",
            "daysOfWeek": [
                "Min",
                "Sen",
                "Sel",
                "Rab",
                "Kam",
                "Jum",
                "Sab"
            ],
            "monthNames": [
                "Januari",
                "Februari",
                "Maret",
                "April",
                "Mei",
                "Juni",
                "Juli",
                "Agustus",
                "September",
                "Oktober",
                "November",
                "Desember"
            ],
            "firstDay": 0
        },
        "startDate": moment(),
        "minDate": "01/01/1901",
        "maxDate": moment().format('DD/MM/YYYY'),
        "opens": "center",
        "drops": "auto",
        "autoApply": true,
        //"buttonClasses": "button",
        //"applyButtonClasses": "buttonPrimary buttonPrimary--small",
        //"cancelClass": "buttonSecondary buttonSecondary--small"
    }, function (start, end, label) {
        console.log('New date selected: ' + start.format('DD/MM/YYYY'));
    });
});