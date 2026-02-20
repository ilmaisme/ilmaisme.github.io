/* =========================================
   1) GSAP SETUP
========================================= */

gsap.registerPlugin(ScrollTrigger);


/* =========================================
   2) PRELOADER
========================================= */

window.addEventListener("load", () => {

  const preloader = document.getElementById("preloader");

  setTimeout(() => {

    if (preloader) {
      preloader.style.transition = "opacity 0.3s ease";
      preloader.style.opacity = "0";

      setTimeout(() => {
        preloader.remove();
        animateCoverTitle();
        initAnimations();
        ScrollTrigger.refresh();
      }, 300);
    } else {
      animateCoverTitle();
      initAnimations();
      ScrollTrigger.refresh();
    }

  }, 1200);

});


/* =========================================
   3) COVER ANIMATION
========================================= */

function animateCoverTitle() {

  gsap.set(".coverIsland img", {
    opacity: 0,
    y: 50,
    scale: 1.05,
    filter: "blur(15px)"
  });

  gsap.set([".coverTitle", ".coverTitleSub"], {
    opacity: 0,
    y: 40,
    filter: "blur(15px)"
  });

  const tl = gsap.timeline();

  tl.to(".coverIsland img", {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    duration: 1,
    ease: "power3.out"
  });

  tl.to(".coverTitle", {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.5");

  tl.to(".coverTitleSub", {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.6");
}


/* =========================================
   4) MAIN ANIMATIONS
========================================= */

function initAnimations() {

  /* =========================================
     INTRO SCROLL (Clean Pin System)
  ========================================= */

  const boxes = gsap.utils.toArray(".introBox");

  if (boxes.length) {

    gsap.set(boxes.slice(1), { opacity: 0, y: 80 });

    const introTimeline = gsap.timeline({
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

      introTimeline.to(prev, {
        opacity: 0,
        y: -60,
        duration: 1
      });

      introTimeline.to(box, {
        opacity: 1,
        y: 0,
        duration: 1
      }, "<");

    });

  }


  /* =========================================
     DOORSTOP ROTATION
  ========================================= */

  gsap.utils.toArray(".icon-doorstop img").forEach((el) => {

    const parent = el.closest(".btbImpactIntro, .bnctImpactIntro");
    if (!parent) return;

    gsap.fromTo(el,
      { rotation: 0 },
      {
        rotation: 90,
        ease: "none",
        scrollTrigger: {
          trigger: parent,
          start: "top 85%",
          end: "top 40%",
          scrub: true
        }
      }
    );

  });


  /* =========================================
     IMPACT ITEMS FADE
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