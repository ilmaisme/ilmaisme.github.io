//select shipping
let parent = $('.shipping'),
    courier = $('.shippingCourier')
parent.find(".custom-select").each(function () {
    var classes = $(this).attr("class"),
        id = $(this).attr("id"),
        name = $(this).attr("name");
    var template = '<div class="' + classes + '">';
    template += '<span class="custom-select-trigger"><span>' + $(this).attr("placeholder") + '</span></span>';
    template += '<div class="custom-options">';
    $(this).find("option").each(function () {
        // template += '<span class="custom-option ' + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        template += '<span class="custom-option shippingOption' + '" data-value="' + $(this).attr("value") + '" data-price="' + $(this).data("price") + '" data-estimate="' + $(this).data("estimate") + '">' + $(this).html() + '<span class="shippingPrice">' + $(this).data("estprice") + '</span>' + '<div class="shippingMisc">' + $(this).data("estimate") + '</div>' + '</span>';
    });
    template += '</div></div>';
    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
});
parent.find(".custom-option:first-of-type").hover(function () {
    $(this).parents(".custom-options").addClass("option-hover");
}, function () {
    $(this).parents(".custom-options").removeClass("option-hover");
});
parent.find(".custom-select-trigger").on("click", function () {
    $('html').one('click', function () {
        $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
});
parent.find(".custom-option").on("click", function () {
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select").find(".custom-select-trigger").addClass('active');

    let child = parent.find("[data-shipping='" + $(this).data("value") + "']");
    //console.log($(this).data("value"))
    if (child.length > 0) {
        courier.removeClass("active");
        child.addClass("active");
        let selected = child.find(".custom-option:first-of-type")
        child.find(".custom-select-trigger").html(selected.data("value") + ' ' + selected.data("price") + '<br>' + selected.data("estimate"));
        selected.addClass("selection")
        $(this).parents(".custom-select").find(".custom-select-trigger").html($(this).data("value") + '<div class="shippingPrice">' + $(this).data("price") + '</div>');
    } else {
        $(this).parents(".custom-select").find(".custom-select-trigger").html($(this).data("value") + ' ' + $(this).data("price") + '<br>' + $(this).data("estimate"));
    }
});