/* =========================================
   0) VH HANDLING (RESTORED)
========================================= */

function setVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

setVh();
window.addEventListener("resize", setVh);


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
   2) GSAP + SCROLLER PROXY (CRITICAL FIX)
========================================= */

gsap.registerPlugin(ScrollTrigger);

const app = document.querySelector(".appLayout");

/* 🔥 SCROLLER PROXY */
ScrollTrigger.scrollerProxy(app, {
  scrollTop(value) {
    if (arguments.length) {
      app.scrollTop = value;
    }
    return app.scrollTop;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});

app.addEventListener("scroll", () => ScrollTrigger.update());

ScrollTrigger.defaults({
  scroller: app
});

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
        ScrollTrigger.refresh();
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
   5) MAIN ANIMATIONS
========================================= */

window.addEventListener("load", () => {

  /* =========================================
     INTRO SCROLL
  ========================================= */

  const boxes = gsap.utils.toArray(".introBox");

  gsap.set(boxes.slice(1), { opacity: 0, y: 80 });

  gsap.set(".introBox img", {
    opacity: 0,
    y: 40,
    filter: "blur(20px)",
    scale: 1.05
  });

  if (boxes[0]) {
    const firstImg = boxes[0].querySelector("img");
    if (firstImg) {
      gsap.set(firstImg, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scale: 1
      });
    }
  }

  const tl = gsap.timeline({
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

    if (img) {
      tl.to(img, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        duration: 0.8
      }, "<0.2");
    }
  });


  /* =========================================
     DOORSTOP
  ========================================= */

  gsap.utils.toArray(".icon-doorstop img").forEach((el) => {

    const triggerEl = el.closest(".btbImpactIntro, .bnctImpactIntro");
    if (!triggerEl) return;

    gsap.from(el, {
      rotation: -90,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: triggerEl,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
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


  /* =========================================
     FINAL REFRESH
  ========================================= */

  setTimeout(() => {
    ScrollTrigger.refresh(true);
  }, 300);

});