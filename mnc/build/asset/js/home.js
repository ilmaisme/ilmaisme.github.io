$(document).ready(function () {
    //initialize swiper
    var swiper = new Swiper(".headlineSlide", {
        effect: "fade",
        grabCursor: true,
        loop: true,
        initialSlide: 0,
        autoHeight: false,
        // loopedSlides: 50,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

    var swiperpro = new Swiper(".featureSlide", {
        grabCursor: true,
        slidesPerView: 2.5,
        slidesPerGroup: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 3,
                slidesPerGroup: 2,
            },
            1024: {
                slidesPerView: 4,
                slidesPerGroup: 2,
            },
            1220: {
                slidesPerView: 5,
                slidesPerGroup: 2,
            },
        }
    });
});

//tab books
function openTabBook(evt, cityName) {
    var book = document.querySelector('.productTab');
    var i, tablinkcontent, tabbutton;
    tablinkcontent = book.querySelectorAll(".tabcontent");
    for (i = 0; i < tablinkcontent.length; i++) {
        // tablinkcontent[i].style.display = "none";
        tablinkcontent[i].classList.remove("-active");
    }
    tabbutton = book.querySelectorAll(".tabbutton");
    for (i = 0; i < tabbutton.length; i++) {
        tabbutton[i].className = tabbutton[i].className.replace(" active", "");
    }
    // document.getElementById(cityName).style.display = "block";
    document.getElementById(cityName).classList.add("-active");
    evt.currentTarget.className += " active";
}