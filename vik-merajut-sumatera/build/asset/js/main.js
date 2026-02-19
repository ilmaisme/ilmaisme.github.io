/* ============================================================
   APP LAYOUT (KEEP THIS)
============================================================ */

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


/* ============================================================
   GSAP INIT
============================================================ */

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  ignoreMobileResize: true,
  pinType: "fixed"
});


/* ============================================================
   PRELOADER (UNTOUCHED)
============================================================ */

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


/* ============================================================
   COVER TITLE ANIMATION (UNTOUCHED)
============================================================ */

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


/* ============================================================
   MAIN LOAD ANIMATIONS
============================================================ */

window.addEventListener("load", () => {

  /* =========================
     INTRO SCROLL (UNTOUCHED)
  ========================= */

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

    // KEEP introBg EXACTLY AS YOU SAID
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


  /* ============================================================
     FIX BELOW SCROLL-AREA ISSUE
     (THIS IS THE IMPORTANT PART)
  ============================================================ */

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  });



  /* ============================================================
     DOORSTOP
  ============================================================ */

  gsap.utils.toArray(".icon-doorstop img").forEach((el) => {

    const triggerEl = el.closest(".btbImpactIntro, .bnctImpactIntro");
    if (!triggerEl) return;

    gsap.fromTo(el,
      { rotation: 0 },
      {
        rotation: 90,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 45%",
          scrub: true
        }
      }
    );

  });


  /* ============================================================
     IMPACT ITEM (BACK TO BACK LIKE SCROLLBOX)
  ============================================================ */

  gsap.utils.toArray(".impactItem").forEach((item, i) => {

    gsap.fromTo(item,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          end: "top 55%",
          scrub: true
        }
      }
    );

  });


  /* ============================================================
     ARTICLE IMAGE ANIMATION (NO BLINK VERSION)
  ============================================================ */

  gsap.set(".articleImg", {
    opacity: 0,
    y: 40,
    scale: 0.98
  });

  gsap.utils.toArray(".articleImg").forEach((img) => {

    gsap.to(img, {
      opacity: 1,
      y: 0,
      scale: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: img,
        start: "top 90%",
        end: "top 60%",
        scrub: true
      }
    });

  });

});