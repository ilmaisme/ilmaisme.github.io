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

/* ==================================================
   0) GSAP SETUP
================================================== */

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  ignoreMobileResize: true
});


/* ==================================================
   1) VIEWPORT + CONTAINER VARIABLES
================================================== */

function setVH() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

function setContainerWidth() {
  const container = document.querySelector(".container");
  if (!container) return;

  document.documentElement.style.setProperty(
    "--container-width",
    `${container.offsetWidth}px`
  );
}

function updateLayoutVars() {
  setVH();
  setContainerWidth();
}

window.addEventListener("resize", updateLayoutVars);
window.addEventListener("orientationchange", updateLayoutVars);


/* ==================================================
   2) PRELOADER (FIXED TIME)
================================================== */

function initPreloader() {

  const preloader = document.getElementById("preloader");
  if (!preloader) {
    initCoverAnimation();
    return;
  }

  setTimeout(() => {

    preloader.style.transition = "opacity 0.3s ease";
    preloader.style.opacity = "0";

    setTimeout(() => {
      preloader.remove();
      initCoverAnimation();
    }, 300);

  }, 1200);
}


/* ==================================================
   3) COVER ANIMATION
================================================== */

function initCoverAnimation() {

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

  const tl = gsap.timeline({ delay: 0.2 });

  tl.to(".coverIsland img", {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    duration: 0.9,
    ease: "power3.out"
  });

  tl.to(".coverTitle", {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.5");

  tl.to(".coverTitleSub", {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.6");
}


/* ==================================================
   4) INTRO PINNED SCROLL
================================================== */

function initIntroScroll() {

  const boxes = gsap.utils.toArray(".introBox");
  if (!boxes.length) return;

  gsap.set(boxes.slice(1), { opacity: 0, y: 80 });

  gsap.set(".introBox img", {
    opacity: 0,
    y: 40,
    filter: "blur(20px)",
    scale: 1.05
  });

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

    if (i === 0) return;

    const prev = boxes[i - 1];
    const img = box.querySelector("img");

    // keep your introBg fade
    tl.to(".introBg", {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    }, 0);

    tl.to(prev, {
      opacity: 0,
      y: -60,
      duration: 0.6
    });

    tl.to(box, {
      opacity: 1,
      y: 0,
      duration: 0.6
    }, "<");

    tl.to(img, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      duration: 0.8
    }, "<0.2");

  });
}


/* ==================================================
   5) DOORSTOP ROTATION (STABLE)
================================================== */

function initDoorstop() {

  gsap.utils.toArray(".icon-doorstop img").forEach((el) => {

    const triggerEl = el.closest(".section");
    if (!triggerEl) return;

    gsap.to(el, {
      rotation: 90,
      ease: "none",
      scrollTrigger: {
        trigger: triggerEl,
        start: "top 75%",
        end: "top 45%",
        scrub: true
      }
    });

  });

}


/* ==================================================
   6) IMPACT ITEMS (NO EARLY FIRING)
================================================== */

function initImpactLists() {

  gsap.utils.toArray(".impactList").forEach((list) => {

    const items = gsap.utils.toArray(list.querySelectorAll(".impactItem"));

    gsap.set(items, {
      opacity: 0,
      y: 60
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: list,
        start: "top 75%",
        end: "bottom 60%",
        scrub: 1
      }
    });

    tl.to(items, {
      opacity: 1,
      y: 0,
      stagger: 0.4,
      ease: "power2.out"
    });

  });

}

/* ==================================================
   7) MASTER INIT
================================================== */

window.addEventListener("load", () => {

  updateLayoutVars();

  initPreloader();

  // Give layout time to stabilize (lazy images)
  setTimeout(() => {

    initIntroScroll();
    initDoorstop();
    initImpactLists();

    ScrollTrigger.refresh();

  }, 500);

});