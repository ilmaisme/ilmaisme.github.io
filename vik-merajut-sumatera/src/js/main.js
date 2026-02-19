/* =========================================
   1) LAYOUT VARS (UNCHANGED)
========================================= */

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

/* =========================================
   2) GSAP
========================================= */

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  ignoreMobileResize: true
});

/* =========================================
   3) PRELOADER (UNTOUCHED)
========================================= */

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

/* =========================================
   4) COVER TITLE (UNTOUCHED)
========================================= */

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

/* =========================================
   5) INTRO SCROLL (UNTOUCHED except anticipatePin)
========================================= */

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
      anticipatePin: 1   // 🔥 STABILITY FIX
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

  /* =========================================
     6) DOORSTOP (FIXED)
  ========================================= */

  gsap.utils.toArray(".icon-doorstop img").forEach((el) => {

    const triggerEl = el.closest(".btbImpactIntro, .bnctImpactIntro");
    if (!triggerEl) return;

    gsap.fromTo(el,
      { rotation: 0 },
      {
        rotation: 90,
        ease: "none",
        scrollTrigger: {
          trigger: triggerEl,
          start: "top 85%",
          end: "top 40%",
          scrub: true,
          refreshPriority: -1   // 🔥 CRITICAL FIX
        }
      }
    );
  });

  /* =========================================
     7) IMPACT ITEMS (FIXED)
  ========================================= */

  gsap.utils.toArray(".impactItem").forEach((item) => {

    gsap.fromTo(item,
      {
        opacity: 0,
        y: 60
      },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          end: "top 60%",
          scrub: true,
          refreshPriority: -1   // 🔥 CRITICAL FIX
        }
      }
    );
  });

  /* =========================================
     8) ARTICLE IMAGES (STABLE)
  ========================================= */

  gsap.utils.toArray(".articleImg").forEach((img) => {

    gsap.fromTo(img,
      {
        scale: 0.95,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: img,
          start: "top 90%",
          end: "top 65%",
          scrub: true,
          refreshPriority: -1   // 🔥 CRITICAL FIX
        }
      }
    );
  });

  /* =========================================
     FINAL STABLE REFRESH
  ========================================= */

  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });

});