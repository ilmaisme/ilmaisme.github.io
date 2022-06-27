//custom select
if (!!$('.custom-select')) {
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
}