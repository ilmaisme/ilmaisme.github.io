/* ==========================================
   APP LAYOUT (KEEP — DO NOT REMOVE)
========================================== */

const appLayout = () => {
  const doc = document.documentElement;

  doc.style.setProperty('--app-height', `${window.innerHeight}px`);

  const container = document.querySelector('.container');
  if (container) {
    doc.style.setProperty('--container-width', `${container.offsetWidth}px`);
  }
};

window.addEventListener('resize', appLayout);
window.addEventListener('load', appLayout);
appLayout();


/* ==========================================
   GSAP SETUP
========================================== */

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  ignoreMobileResize: true,
  pinType: "fixed"
});


/* ==========================================
   PRELOADER (UNTOUCHED — YOUR ORIGINAL)
========================================== */

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


/* ==========================================
   COVER TITLE ANIMATION (UNTOUCHED)
========================================== */

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


/* ==========================================
   INTRO PINNED SCROLL (UNTOUCHED)
========================================== */

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
      end: () => "+=" + window.innerHeight * 3,
      scrub: 1.2,
      pin: ".scrollStage"
    }
  });

  boxes.forEach((box, i) => {

    if (i === 0) return;

    const prev = boxes[i - 1];
    const img = box.querySelector("img");

    /* KEEP YOUR introBg LINE EXACTLY */
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

});


/* ==========================================
   BELOW SCROLL-AREA FIX
   (THIS FIXES THE DISEASE)
========================================== */

ScrollTrigger.addEventListener("refresh", () => {
  initBelowAnimations();
});

function initBelowAnimations() {

  /* Kill old ones */
  ScrollTrigger.getAll().forEach(st => {
    if (st.vars.id === "belowAnim") st.kill();
  });

  /* ARTICLE IMAGES */
  gsap.utils.toArray(".articleImg").forEach(img => {

    gsap.fromTo(
      img,
      {
        opacity: 0,
        y: 60,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power2.out",
        scrollTrigger: {
          id: "belowAnim",
          trigger: img.closest(".section") || img,
          start: "top 85%",
          end: "top 55%",
          scrub: true
        }
      }
    );

  });

  /* IMPACT ITEMS (like scrollBox style) */
  gsap.utils.toArray(".impactList").forEach(list => {

    const items = list.querySelectorAll(".impactItem");

    gsap.set(items, { opacity: 0, y: 60 });

    const tl = gsap.timeline({
      scrollTrigger: {
        id: "belowAnim",
        trigger: list,
        start: "top 85%",
        end: "top 55%",
        scrub: true
      }
    });

    tl.to(items, {
      opacity: 1,
      y: 0,
      stagger: 0.25,
      ease: "power2.out"
    });

  });

  /* DOORSTOP */
  gsap.utils.toArray(".icon-doorstop img").forEach(el => {

    const triggerEl = el.closest(".btbImpactIntro, .bnctImpactIntro");

    if (!triggerEl) return;

    gsap.to(el, {
      rotation: 90,
      ease: "none",
      scrollTrigger: {
        id: "belowAnim",
        trigger: triggerEl,
        start: "top 85%",
        end: "top 40%",
        scrub: true
      }
    });

  });

}


/* ==========================================
   FINAL REFRESH (CRITICAL)
========================================== */

window.addEventListener("load", () => {
  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });
});