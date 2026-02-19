gsap.registerPlugin(ScrollTrigger);

/* =========================================
   APP LAYOUT (KEEP THIS)
========================================= */
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


/* =========================================
   MOBILE VH FIX (KEEP THIS)
========================================= */
function setVH() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
setVH();

window.addEventListener("orientationchange", setVH);
window.addEventListener("resize", () => {
  const currentVH = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--vh")
  ) * 100;

  if (Math.abs(window.innerHeight - currentVH) > 80) setVH();
});


ScrollTrigger.config({
  ignoreMobileResize: true
});


/* =========================================
   LOAD EVERYTHING ONCE
========================================= */
window.addEventListener("load", () => {

  /* =========================
     PRELOADER (UNCHANGED)
  ========================== */
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


  /* =========================
     INTRO SECTION (UNCHANGED)
  ========================== */
  const boxes = gsap.utils.toArray(".introBox");

  gsap.set(boxes.slice(1), { opacity: 0, y: 80 });

  gsap.set(".introBox img", {
    opacity: 0,
    y: 40,
    filter: "blur(20px)",
    scale: 1.05
  });

  if (boxes[0]) {
    gsap.set(boxes[0].querySelector("img"), {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1
    });
  }

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

  boxes.forEach((box, i) => {

    if (i === 0) return;

    const prev = boxes[i - 1];
    const img = box.querySelector("img");

    introTL.to(".introBg", {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    }, 0);

    introTL.to(prev, {
      opacity: 0,
      y: -60,
      duration: 0.6
    });

    introTL.to(box, {
      opacity: 1,
      y: 0,
      duration: 0.6
    }, "<");

    introTL.to(img, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      duration: 0.8
    }, "<0.2");

  });


  /* =========================
     BELOW SCROLL-AREA FIX
  ========================== */

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
          scrub: true
        }
      }
    );

  });


  /* IMPACT ITEMS (LIKE scrollBox STYLE) */
  gsap.utils.toArray(".impactList").forEach((list) => {

    const items = list.querySelectorAll(".impactItem");

    gsap.set(items, { opacity: 0, y: 80 });

    items.forEach((item, index) => {

      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

    });

  });

  ScrollTrigger.refresh();
});


/* =========================================
   COVER TITLE
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