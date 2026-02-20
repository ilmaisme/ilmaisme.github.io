/* =========================================
   0) VH HANDLING
========================================= */

function setVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
setVh();
window.addEventListener("resize", setVh);


/* =========================================
   1) LAYOUT VARS
========================================= */

function appLayout() {
  const doc = document.documentElement;

  doc.style.setProperty('--app-height', `${window.innerHeight}px`);

  const container = document.querySelector('.container');
  if (container) {
    doc.style.setProperty('--container-width', `${container.offsetWidth}px`);
  }
}

window.addEventListener('resize', appLayout);
window.addEventListener('load', appLayout);
appLayout();


/* =========================================
   2) GSAP SETUP
========================================= */

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  ignoreMobileResize: true
});


/* =========================================
   3) PRELOADER + INIT
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
        initAnimations();
        ScrollTrigger.refresh();
      }, 200);
    } else {
      animateCoverTitle();
      initAnimations();
      ScrollTrigger.refresh();
    }

  }, 1500);

});


/* =========================================
   4) COVER TITLE
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


/* =========================================
   5) MAIN ANIMATIONS
========================================= */

function initAnimations() {

  /* =========================================
     INTRO SCROLL (STABLE PIN)
  ========================================= */

  const boxes = gsap.utils.toArray(".introBox");

  if (boxes.length) {

    gsap.set(boxes.slice(1), { opacity: 0, y: 80 });

    const introTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".intro",
        start: "top top",
        end: () => "+=" + (boxes.length * window.innerHeight),
        scrub: 1,
        pin: ".scrollStage",
        anticipatePin: 1
      }
    });

    boxes.forEach((box, i) => {
      if (i === 0) return;

      const prev = boxes[i - 1];

      introTl.to(prev, {
        opacity: 0,
        y: -60,
        duration: 1
      });

      introTl.to(box, {
        opacity: 1,
        y: 0,
        duration: 1
      }, "<");
    });

  }


  /* =========================================
     DOORSTOP ROTATION (DEGREE TRANSFORM)
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
          scrub: true
        }
      }
    );
  });


  /* =========================================
     IMPACT ITEMS
  ========================================= */

  gsap.utils.toArray(".impactItem").forEach((item) => {

    gsap.from(item, {
      opacity: 0,
      y: 60,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });
  });


  /* =========================================
     ARTICLE IMAGES
  ========================================= */

  gsap.utils.toArray(".articleImg").forEach((img) => {

    gsap.from(img, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: img,
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    });
  });

}