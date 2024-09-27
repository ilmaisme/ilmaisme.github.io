// Iterate over each select element
$('.selectDrop select').each(function () {

    // Cache the number of options
    var $this = $(this),
        $selected = $(this).children('option:selected'),
        numberOfOptions = $(this).children('option').length,
        disabled = $(this).children('option:disabled'),
        required = $(this).hasClass('required'),
        map = $('.partnerMap');

    // Hides the select element
    $this.addClass('hidden');

    // Wrap the select element in a div
    $this.wrap('<div class="select"></div>');

    // Insert a styled div to sit over the top of the hidden select element
    $this.after('<div class="styledSelect"></div>');

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
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
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

        //add error validation
        if (required) {
            if ($this.parent().siblings('label.required').length == 0) {
                $('<label class="required">*This field is required.</label>').insertAfter($(this).parent('.select'));
            }
        }
    });

    // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
    // Updates the select element to have the value of the equivalent option
    $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active open');
        $this.val($(this).attr('rel'));
        $list.addClass('hidden');

        //remove disabled selected class
        if (!!disabled) {
            disabled.removeAttr('selected')
        }
        if (map.is(':visible')) {
            map.find('.partnerMapArea').removeClass('active')
            //add active on map
            map.find("[value='" + $this.val() + "']").addClass('active')
            //display province item
            displayProvince($this.val())
        }

        //remove error validation
        if ((required) && ($this.val() != null)) {
            $this.parent().siblings('label.required').hide()
        }
        //console.log($this.val()); /*Uncomment this for demonstration! */
    });

    // Hides the unordered list when clicking outside of it
    $(document).click(function () {
        $styledSelect.removeClass('active open');
        $list.addClass('hidden');
    });
});