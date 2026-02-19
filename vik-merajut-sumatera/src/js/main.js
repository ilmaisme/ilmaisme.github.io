/* =========================================================
   KEEP: HEIGHT + CONTAINER WIDTH (UNCHANGED)
========================================================= */
const appLayout = () => {
  const doc = document.documentElement;

  // viewport height
  doc.style.setProperty('--app-height', `${window.innerHeight}px`);

  // container width
  const container = document.querySelector('.container');
  if (container) {
    const width = container.offsetWidth;
    doc.style.setProperty('--container-width', `${width}px`);
  }
};

window.addEventListener('resize', appLayout);
window.addEventListener('load', appLayout);
appLayout();


/* =========================================================
   GSAP INIT
========================================================= */
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  ignoreMobileResize: true
});


/* =========================================================
   KEEP: MOBILE VH FIX (UNCHANGED)
========================================================= */
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


/* =========================================================
   KEEP: PRELOADER (UNTOUCHED)
========================================================= */
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


/* =========================================================
   KEEP: COVER TITLE ANIMATION (UNCHANGED)
========================================================= */
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


/* =========================================================
   MAIN INIT (AFTER LOAD)
========================================================= */
window.addEventListener("load", () => {

  /* ===============================================
     KEEP: INTRO SCROLL (UNTOUCHED)
  =============================================== */

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
      pin: ".scrollStage"
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
    }, 0); // DO NOT TOUCH

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


  /* ===============================================
     FIX: REFRESH AFTER PIN (CRITICAL)
  =============================================== */

  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);



  /* ===============================================
     DOORSTOP ROTATION (FIXED TRIGGER)
  =============================================== */

  gsap.utils.toArray(".icon-doorstop img").forEach((el) => {

    gsap.to(el, {
      rotation: 90,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        end: "top 40%",
        scrub: true
      }
    });

  });



  /* ===============================================
     ARTICLE IMAGE ANIMATION (SAFE VERSION)
  =============================================== */

  gsap.utils.toArray(".articleImg").forEach((img) => {

    gsap.fromTo(img,
      { opacity: 0, y: 80, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: img,
          start: "top 85%",
          end: "top 55%",
          scrub: true,
          invalidateOnRefresh: true
        }
      }
    );

  });

});