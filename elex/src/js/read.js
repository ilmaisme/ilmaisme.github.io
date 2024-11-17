//tab detail product
function openTab(evt, cityName) {
    var i, tablinkcontent, tabbutton;
    tablinkcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tablinkcontent.length; i++) {
        tablinkcontent[i].style.display = "none";
    }
    tabbutton = document.getElementsByClassName("tabbutton");
    for (i = 0; i < tabbutton.length; i++) {
        tabbutton[i].className = tabbutton[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

    //tab scroll mobile
    let act = $('.tabbutton.active');
    if (act.length > 0) {
        let msp = act.position().left;
        $('.rproTab__list').animate({
            scrollLeft: msp - 10
        });
    }
}