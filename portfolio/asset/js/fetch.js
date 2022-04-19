$(document).ready(function () {
    // fetch more article
    var currentPage = 1,
        btn = $('#btnload');

    function populate(img, title, published) {
        var grid = document.querySelector('#image-gallery');
        var item = document.createElement('li');
        var panel = '<a href="' + img + '" aria-label="' + title + '">';
        panel += '<img src="' + img + '" class="bioWorks__img" alt="" width="780" height="390" loading="lazy">';
        panel += '</a>';
        panel += '<div class="bioWorks__ctn img-overlay">';
        panel += '<div class="bioWorks__txt">';
        panel += '<div class="bioTitle--small text-left">' + title + '</div>';
        panel += '<div class="bioWorks__year text-left">' + published + '</div>';
        panel += '</div>';
        panel += '</div>';
        panel += '</li>';
        $(item).appendTo(grid);
        $(item).addClass("bioWorks__item display-flex image");
        $(item).html(panel);
    }

    function getResults(filter) {
        // console.log(currentPage);
        $.getJSON("asset/json/works.json", function (data) {
            var perPage = 5;
            var count = data.posts.length;

            if (currentPage * perPage >= count) {
                //indeks berita
                var buttonIndeks = '<a href="https://ilmaisme.github.io/" class="bioWorks__more bioWorks__btn">View Details</a>';
                $(buttonIndeks).appendTo('#gallery');
                btn.remove();
                // console.log("all pages fetched");
                // return false;
            }
            $(data.posts).each(function (i, post) {
                if (i >= (currentPage - 1) * perPage && i < currentPage * perPage) {
                    populate(post.img, post.title, post.published);
                    i = i + perPage;
                }
            });
            perPage += perPage;
            // console.log($(".img-overlay"))
            $(".img-overlay").click(function (event) {
                event.preventDefault();
                // Adds href attribute to variable
                var imageLocation = $(this).prev().attr("href");
                // Add the image src to $image
                $image.attr("src", imageLocation);
                // Fade in the overlay
                $overlay.fadeIn("slow");
            });
        });
    }
    getResults();

    $(function () {
        btn.click(function (e) {
            currentPage++;
            getResults();
        });
    });


    //gallery
    var $overlay = $('<div id="overlay"></div>'),
        $image = $("<img>"),
        $prevButton = $('<div id="prevButton"><span class="icon icon-arrow icon-arrow-prev"></span></div>'),
        $nextButton = $('<div id="nextButton"><span class="icon icon-arrow icon-arrow-next"></span></div>'),
        $exitButton = $('<div id="exitButton"><span class="icon icon-close"></span></div>');

    // Add overlay
    $overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
    $("#gallery").append($overlay);

    // Hide overlay on default
    $overlay.hide();

    // When the overlay is clicked
    $overlay.click(function () {
        // Fade out the overlay
        $(this).fadeOut("slow");
    });

    // When next button is clicked
    $nextButton.click(function (event) {
        // Hide the current image
        $("#overlay img").hide();
        // Overlay image location
        var $currentImgSrc = $("#overlay img").attr("src");
        // Image with matching location of the overlay image
        var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
        // Finds the next image
        var $nextImg = $($currentImg.closest(".image").next().find("img"));
        // All of the images in the gallery
        var $images = $("#image-gallery img");
        // If there is a next image
        if ($nextImg.length > 0) {
            // Fade in the next image
            $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
        } else {
            // Otherwise fade in the first image
            $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
        }
        // Prevents overlay from being hidden
        event.stopPropagation();
    });

    // When previous button is clicked
    $prevButton.click(function (event) {
        // Hide the current image
        $("#overlay img").hide();
        // Overlay image location
        var $currentImgSrc = $("#overlay img").attr("src");
        // Image with matching location of the overlay image
        var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
        // Finds the next image
        var $nextImg = $($currentImg.closest(".image").prev().find("img"));
        // Fade in the next image
        $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
        // Prevents overlay from being hidden
        event.stopPropagation();
    });

    // When the exit button is clicked
    $exitButton.click(function () {
        // Fade out the overlay
        $("#overlay").fadeOut("slow");
    });
});