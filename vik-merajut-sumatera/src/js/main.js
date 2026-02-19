/* s: Get HEIGHT Device & Container Width */
const appLayout = () => {
  const doc = document.documentElement

  // viewport height
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)

  // container width
  const container = document.querySelector('.container')
  if (container) {
    const width = container.offsetWidth
    doc.style.setProperty('--container-width', `${width}px`)
  }
}

window.addEventListener('resize', appLayout)
window.addEventListener('load', appLayout)
appLayout()
/* e: Get HEIGHT Device & Container Width */

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

  // ===== INITIAL STATE =====
  gsap.set(".coverIsland img", {
    opacity: 0,
    y: 50,
    scale: 1.08,
    filter: "blur(25px)"
  });

  gsap.set([".coverTitle", ".coverTitleSub"], {
    opacity: 0,
    y: 40,
    scale: 1.05,
    filter: "blur(15px)"
  });

  // ===== TIMELINE =====
  const tlTitle = gsap.timeline({ delay: 0.2 });

  // Island image
  tlTitle.to(".coverIsland img", {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    duration: 0.9,
    ease: "power3.out"
  });

  // Main title
  tlTitle.to(".coverTitle", {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.5");

  // Subtitle
  tlTitle.to(".coverTitleSub", {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.6");

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
window.addEventListener("load", () => {

  const boxes = gsap.utils.toArray(".introBox");

  // Hide all except first
  gsap.set(boxes.slice(1), { opacity: 0, y: 80 });

  gsap.set(".introBox img", {
    opacity: 0,
    y: 40,
    filter: "blur(20px)",
    scale: 1.05
  });

  // First image should be visible immediately
  gsap.set(boxes[0].querySelector("img"), {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".introWrap",
      start: "top top",
      end: "+=300%",
      scrub: 1.2,
      pin: ".scrollStage"
    }
  });

  boxes.forEach((box, i) => {

    if (i === 0) return; // Skip first

    const prev = boxes[i - 1];
    const img = box.querySelector("img");

    tl.to(".introBg", {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    }, 0);

    // Fade out previous
    tl.to(prev, {
      opacity: 0,
      y: -60,
      duration: 0.6
    });

    // Fade in current
    tl.to(box, {
      opacity: 1,
      y: 0,
      duration: 0.6
    }, "<");

    // Blur reveal image
    tl.to(img, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      duration: 0.8
    }, "<0.2");

  });

  ScrollTrigger.refresh();
});