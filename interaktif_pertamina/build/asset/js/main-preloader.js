document.onreadystatechange = function (e) {
    // if (document.readyState == "interactive") {
    var all = document.getElementsByTagName("div");
    for (var i = 0, max = all.length; i < max; i++) {
        set_ele(all[i]);
    }
    // }
}

function check_element(ele) {
    var all = document.getElementsByTagName("div");
    var per_inc = 100 / all.length;

    if ($(ele).on()) {
        var prog_width = per_inc + Number(document.getElementById("progress_width").value);
        document.getElementById("progress_width").value = prog_width;
        $("#bar").animate({
            width: prog_width + "%"
        }, 28, function () {
            if (document.getElementById("bar").style.width == "100%") {
                $('.preloader').addClass("done");
                $(".cover").addClass("active");
            }
        });
    } else {
        set_ele(ele);
    }
}

function set_ele(set_element) {
    check_element(set_element);
}