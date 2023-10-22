// Iterate over each select element
$('select.formSelect').each(function () {

    // Cache the number of options
    var $this = $(this),
        $disabled = $(this).children('option:disabled'),
        $selected = $(this).children('option:selected'),
        numberOfOptions = $(this).children('option:not([disabled])').length;

    // Hides the select element
    $this.addClass('hidden');

    // Wrap the select element in a div
    $this.wrap('<div class="select"></div>');

    // Insert a styled div to sit over the top of the hidden select element
    if ($disabled.length > 0) {
        $this.after('<div class="styledSelect disable"></div>');
    } else {
        $this.after('<div class="styledSelect"></div>');
    }

    // Cache the styled div
    var $styledSelect = $this.next('div.styledSelect');

    // Show the first select option in the styled div
    // $styledSelect.text($this.children('option').eq(0).text());
    $styledSelect.text($selected.text());

    // Insert an unordered list after the styled div and also cache the list
    var $list = $('<ul />', {
        'class': 'options hidden'
    }).insertAfter($styledSelect);

    // Insert a list item into the unordered list for each select option
    if ($disabled.length > 0) {
        $('<li />', {
            text: $disabled.text(),
            disabled: $disabled
        }).appendTo($list);
    }
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option:not([disabled])').eq(i).text(),
            rel: $this.children('option:not([disabled])').eq(i).val()
        }).appendTo($list);
    }

    // Cache the list items
    var $listItems = $list.children('li');

    // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
    $styledSelect.click(function (e) {
        e.stopPropagation();
        let option = $(this).next('ul.options');
        $('div.styledSelect.active').each(function () {
            $(this).removeClass('active');
        });
        $(this).toggleClass("active");
        option.toggleClass("hidden");
        if (option.hasClass('hidden')) {
            $(this).removeClass("open");
        } else {
            $(this).addClass("open");
        }
    });

    // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
    // Updates the select element to have the value of the equivalent option
    $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active open');
        $this.val($(this).attr('rel'));
        $list.addClass('hidden');
        $styledSelect.removeClass("disable");
        //console.log($this.val()); /*Uncomment this for demonstration! */
    });

    // Hides the unordered list when clicking outside of it
    $(document).click(function () {
        $styledSelect.removeClass('active open');
        $list.addClass('hidden');
    });

});