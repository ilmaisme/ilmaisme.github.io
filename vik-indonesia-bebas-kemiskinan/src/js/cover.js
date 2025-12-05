gsap.registerPlugin(ScrollTrigger);

/* --------------------------------------------------
   1) FIX MOBILE LAYOUT SHIFT (address bar collapse)
-------------------------------------------------- */
function setVH() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
}
setVH();

// Update only when real resize happens (not address bar scroll)
window.addEventListener("orientationchange", setVH);
window.addEventListener("resize", () => {
    const currentVH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--vh")) * 100;
    if (Math.abs(window.innerHeight - currentVH) > 80) setVH();
});

/* --------------------------------------------------
   2) ScrollTrigger SETTINGS (must be BEFORE anything)
-------------------------------------------------- */
ScrollTrigger.config({
    ignoreMobileResize: true
});

/* --------------------------------------------------
   3) IMAGE LOADER
-------------------------------------------------- */
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

/* --------------------------------------------------
   4) PRELOADER + INTRO
-------------------------------------------------- */
window.addEventListener("load", () => {
    setTimeout(() => {
        const preloader = document.getElementById("preloader");

        if (preloader) {
            preloader.style.transition = "opacity 0.2s ease";
            preloader.style.opacity = "0";

            setTimeout(() => {
                preloader.remove();
                animateCoverTitle();
            }, 200);
        }
    }, 1500);
});

/* --------------------------------------------------
   5) INTRO TITLE ANIMATION
-------------------------------------------------- */
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

/* --------------------------------------------------
   6) RESPONSIVE HOME TRANSFORM
-------------------------------------------------- */
function getResponsiveHomeScale() {
    const w = window.innerWidth;
    const desktopScale = 987 / 589;
    const mobileScale = 372 / 317;
    return w <= 600 ? mobileScale : desktopScale;
}

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

    return {
        scale: scale,
        xPercent: -18,
        yPercent: -40
    };
}

/* --------------------------------------------------
   7) MAIN SCROLL ANIMATION
-------------------------------------------------- */
onImagesLoaded(() => {
    // --- FIX LAYOUT JUMP ---
    const lockedVh = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--vh"));
    document.documentElement.style.setProperty("--vh", `${lockedVh}px`);

    ScrollTrigger.refresh();

    const home = document.querySelector(".coverScrollStill picture:first-child img");
    const ibu = document.querySelector(".coverScrollStill .ibu img");
    const mas = document.querySelector(".coverScrollCircle");

    const text1 = document.querySelector(".coverScrollContent1");
    const text2 = document.querySelector(".coverScrollContent2");
    const text3 = document.querySelector(".coverScrollContent3");

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

    // Scene 1 → 2
    tl.to(home, {
        ...getHomeTransform(),
        ease: "power2.out",
        duration: 0.6
    }, "scene2");

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

    // Scene 2 → 3
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