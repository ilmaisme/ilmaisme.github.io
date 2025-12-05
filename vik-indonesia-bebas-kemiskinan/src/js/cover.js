gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  ignoreMobileResize: true
});

function onImagesLoaded(callback) {
    const images = document.querySelectorAll("img");
    let loaded = 0;
    images.forEach(img => {
        if (img.complete) {
            loaded++;
            if (loaded === images.length) callback();
        } else {
            img.addEventListener("load", () => {
                loaded++;
                if (loaded === images.length) callback();
            });
        }
    });
}

//
// Preloader fade + intro animation
//
window.addEventListener("load", () => {
    setTimeout(() => {
        const preloader = document.getElementById("preloader");

        if (preloader) {
            preloader.style.transition = "opacity 0.2s ease";
            preloader.style.opacity = "0";

            setTimeout(() => {
                preloader.remove();

                // Run title animation AFTER preloader removed
                animateCoverTitle();

            }, 200);
        }
    }, 1500);
});

//
// Intro animation: slide up .center THEN .coverText
//
function animateCoverTitle() {
    const tlTitle = gsap.timeline();

    tlTitle.to(".coverTitle .center img", {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.85,
        ease: "power3.out",
        delay: 0.15
    });

    tlTitle.to(".coverTitle .coverText", {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.75,
        ease: "power3.out"
    }, "-=0.45");
}

//
// Responsive scale calculation
//
function getResponsiveHomeScale() {
    const w = window.innerWidth;

    // DESKTOP reference: 589px → 987px = ×1.676
    // MOBILE reference: 317px → 372px = ×1.173
    const desktopScale = 987 / 589;  // ~1.676
    const mobileScale = 372 / 317;   // ~1.173

    return w <= 600 ? mobileScale : desktopScale;
}

//
// Responsive transform (scale + translate)
//
function getHomeTransform() {
    const scale = getResponsiveHomeScale();
    const isMobile = window.innerWidth <= 600;

    if (isMobile) {
        return {
            scale: scale,
            xPercent: 0,
            yPercent: -16
        };
    }

    // Desktop:
    return {
        scale: scale,
        xPercent: -18,
        yPercent: -40
    };
}

//
// MAIN SCROLL ANIMATION
//
onImagesLoaded(() => {
    ScrollTrigger.refresh();

    const home = document.querySelector(".coverScrollStill picture:first-child img");
    const ibu = document.querySelector(".coverScrollStill .ibu img");
    const mas = document.querySelector(".coverScrollCircle");

    const text1 = document.querySelector(".coverScrollContent1");
    const text2 = document.querySelector(".coverScrollContent2");
    const text3 = document.querySelector(".coverScrollContent3");

    // Initial visibility states
    gsap.set([ibu, mas], { opacity: 0 });
    gsap.set(text1, { opacity: 1, y: 0 });
    gsap.set([text2, text3], { opacity: 0, y: 20 });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".coverScroll",
            start: "top top",
            end: "bottom+=55% top",
            scrub: 1.2,
            pin: true
        }
    });

    //
    // SCENE 1 → SCENE 2
    //
    tl.to(
        home,
        {
            ...getHomeTransform(),
            ease: "power2.out",
            duration: 0.6
        },
        "scene2"
    );

    tl.to(text1, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power2.inOut"
    }, "scene2");

    tl.to(text2, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
    }, "scene2+=0.1");

    tl.to(ibu, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
    }, "scene2+=0.1");

    //
    // SCENE 2 → SCENE 3
    //
    tl.to([home, ibu], {
        opacity: 0,
        duration: 0.5,
        ease: "power1.out"
    }, "scene3");

    tl.to(mas, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
    }, "scene3+=0.3");

    tl.to(text2, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power2.inOut"
    }, "scene3");

    tl.to(text3, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
    }, "scene3+=0.1");
});
