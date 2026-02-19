/* =========================================
   REGISTER GSAP
========================================= */
gsap.registerPlugin(ScrollTrigger);


/* =========================================
   1. APP LAYOUT (HEIGHT + WIDTH)
========================================= */
function appLayout() {
  const doc = document.documentElement;

  doc.style.setProperty("--app-height", `${window.innerHeight}px`);

  const container = document.querySelector(".container");
  if (container) {
    doc.style.setProperty("--container-width", `${container.offsetWidth}px`);
  }
}

window.addEventListener("resize", appLayout);
window.addEventListener("load", appLayout);
appLayout();


/* =========================================
   2. FIX MOBILE VH SHIFT
========================================= */
function setVH() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
setVH();

window.addEventListener("orientationchange", setVH);
window.addEventListener("resize", () => {
  const currentVH =
    parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--vh")
    ) * 100;

  if (Math.abs(window.innerHeight - currentVH) > 80) setVH();
});

ScrollTrigger.config({
  ignoreMobileResize: true
});


/* =========================================
   3. PRELOADER (SHORT & SAFE)
========================================= */
window.addEventListener("load", () => {

  const preloader = document.getElementById("preloader");

  if (preloader) {
    setTimeout(() => {
      preloader.style.opacity = "0";
      preloader.style.transition = "opacity 0.3s ease";

      setTimeout(() => {
        preloader.remove();
        animateCoverTitle();
        initScrollAnimations();   // IMPORTANT
      }, 300);

    }, 800); // shorter timeout
  } else {
    animateCoverTitle();
    initScrollAnimations();
  }

});


/* =========================================
   4. COVER INTRO ANIMATION
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
  })
    .to(".coverTitle", {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5")
    .to(".coverTitleSub", {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6");

}


/* =========================================
   5. ALL SCROLL ANIMATIONS
========================================= */
function initScrollAnimations() {

  /* ================================
     INTRO PIN SECTION
  ================================= */

  const boxes = gsap.utils.toArray(".introBox");

  // initial state
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

  gsap.set(".introBg", { opacity: 0 });

  const introTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".introWrap",
      start: "top top",
      end: "+=300%",
      scrub: 1.2,
      pin: ".scrollStage",
      anticipatePin: 1
    }
  });

  /* 🔥 Intro BG fade ONLY ONCE at start */
  introTL.to(".introBg", {
    opacity: 1,
    duration: 0.6,
    ease: "power2.out"
  }, 0);

  boxes.forEach((box, i) => {
    if (i === 0) return;

    const prev = boxes[i - 1];
    const img = box.querySelector("img");

    introTL
      .to(prev, { opacity: 0, y: -60, duration: 0.6 })
      .to(box, { opacity: 1, y: 0, duration: 0.6 }, "<")
      .to(img, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        duration: 0.8
      }, "<0.2");
  });


  /* ================================
     DOORSTOP ROTATION
  ================================= */

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
          start: "top 90%",         
          end: "top 60%",           
          scrub: true,
          invalidateOnRefresh: true
        }
      }
    );

  });


  /* ================================
     IMPACT ITEMS (LIKE INTRO)
  ================================= */

  gsap.utils.toArray(".impactList").forEach((list) => {

    const items = list.querySelectorAll(".impactItem");

    gsap.set(items, {
      opacity: 0,
      y: 80
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: list,
        start: "top 85%",
        end: "bottom 60%",
        scrub: 1
      }
    });

    tl.to(items, {
      opacity: 1,
      y: 0,
      stagger: 0.25,
      ease: "power2.out"
    });

  });


  /* ================================
     FINAL REFRESH
  ================================= */

  ScrollTrigger.refresh();

}