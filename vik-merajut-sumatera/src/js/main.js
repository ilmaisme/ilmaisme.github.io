/* s: Get HEIGHT Device & Container Width */
const appLayout = () => {
  const doc = document.documentElement;

  doc.style.setProperty('--app-height', `${window.innerHeight}px`);

  const container = document.querySelector('.container');
  if (container) {
    const width = container.offsetWidth;
    doc.style.setProperty('--container-width', `${width}px`);
  }
};

window.addEventListener('resize', appLayout);
window.addEventListener('load', appLayout);
appLayout();
/* e: Get HEIGHT Device & Container Width */

gsap.registerPlugin(ScrollTrigger);

/* --------------------------------------------------
   ScrollTrigger GLOBAL CONFIG
-------------------------------------------------- */
ScrollTrigger.config({
  ignoreMobileResize: true,
  pinType: "fixed"
});

/* --------------------------------------------------
   1) FIX MOBILE LAYOUT SHIFT
-------------------------------------------------- */
function setVH() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
setVH();

window.addEventListener("orientationchange", setVH);
window.addEventListener("resize", () => {
  const currentVH =
    parseFloat(getComputedStyle(document.documentElement)
      .getPropertyValue("--vh")) * 100;

  if (Math.abs(window.innerHeight - currentVH) > 80) setVH();
});

/* --------------------------------------------------
   2) PRELOADER (UNCHANGED)
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
   3) INTRO TITLE ANIMATION (UNCHANGED)
-------------------------------------------------- */
function animateCoverTitle() {

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

  const tlTitle = gsap.timeline({ delay: 0.2 });

  tlTitle.to(".coverIsland img", {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    duration: 0.9,
    ease: "power3.out"
  });

  tlTitle.to(".coverTitle", {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.5");

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
   4) INTRO SCROLL (UNCHANGED)
-------------------------------------------------- */
window.addEventListener("load", () => {

  const boxes = gsap.utils.toArray(".introBox");

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
      pin: ".scrollStage",
      invalidateOnRefresh: true
    }
  });

  boxes.forEach((box, i) => {

    if (i === 0) return;

    const prev = boxes[i - 1];
    const img = box.querySelector("img");

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

  /* ======================================================
     BELOW SCROLL-AREA FIX (ONLY THIS PART MODIFIED)
  ====================================================== */

  requestAnimationFrame(() => {

    /* DOORSTOP */
    gsap.utils.toArray(".icon-doorstop img").forEach((el) => {

      gsap.fromTo(el,
        { rotation: 0 },
        {
          rotation: 90,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 45%",
            scrub: true,
            invalidateOnRefresh: true
          }
        }
      );
    });

    /* IMPACT ITEMS (like scrollBox) */
    gsap.utils.toArray(".impactItem").forEach((item) => {

      gsap.fromTo(item,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
            invalidateOnRefresh: true
          }
        }
      );
    });

    ScrollTrigger.refresh();

  });

});