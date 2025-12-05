/* ============================================================
   Page-2 patched JS — stable vh + guarded rebuilds + fixed horizontal width
============================================================ */

gsap.registerPlugin(ScrollTrigger);

/* --------------------------------------------------
   ScrollTrigger global config
-------------------------------------------------- */
ScrollTrigger.config({
  ignoreMobileResize: true,
  pinType: "fixed"
});

/* --------------------------------------------------
   MOBILE VIEWPORT VARS
-------------------------------------------------- */
let vhLocked = false;

function updateViewportVars(force = false) {
  if (vhLocked && !force) return;
  const h = window.visualViewport ? window.visualViewport.height : window.innerHeight;
  document.documentElement.style.setProperty("--vh", `${h * 0.01}px`);
  document.documentElement.style.setProperty("--app-height", `${h}px`);
}

updateViewportVars();

function lockVh() {
  const computedVh = getComputedStyle(document.documentElement).getPropertyValue("--vh").trim();
  if (computedVh) {
    document.documentElement.style.setProperty("--vh", computedVh);
    vhLocked = true;
  }
}

function unlockVh() {
  vhLocked = false;
}

/* --------------------------------------------------
   Utilities
-------------------------------------------------- */
function getViewportWidth() {
  return window.visualViewport ? window.visualViewport.width : window.innerWidth;
}

function debounce(fn, wait = 120) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

/* --------------------------------------------------
   Wait for Section Images
-------------------------------------------------- */
function waitForSectionImages() {
  return new Promise(resolve => {
    const imgs = Array.from(document.querySelectorAll(".section1 img"));
    if (!imgs.length) {
      requestAnimationFrame(() => requestAnimationFrame(resolve));
      return;
    }

    imgs.forEach(img => {
      try {
        if (img.loading === "lazy") img.loading = "eager";
      } catch (e) {}
    });

    let done = 0;
    const check = () => {
      done++;
      if (done === imgs.length) {
        requestAnimationFrame(() => requestAnimationFrame(resolve));
      }
    };

    imgs.forEach(img => {
      if (img.complete && (img.naturalWidth || img.naturalHeight)) check();
      else {
        img.addEventListener("load", check, { once: true });
        img.addEventListener("error", check, { once: true });
      }
    });
  });
}

/* --------------------------------------------------
   Natural Height
-------------------------------------------------- */
function getNaturalHeight(el) {
  const cs = getComputedStyle(el);

  if (cs.display !== "none") {
    const prev = el.style.height;
    el.style.height = "auto";
    const h = el.offsetHeight;
    el.style.height = prev;
    return h;
  }

  const prev = {
    display: el.style.display,
    position: el.style.position,
    visibility: el.style.visibility
  };

  el.style.display = "block";
  el.style.position = "absolute";
  el.style.visibility = "hidden";

  const h = el.offsetHeight;

  el.style.display = prev.display;
  el.style.position = prev.position;
  el.style.visibility = prev.visibility;

  return h;
}

/* --------------------------------------------------
   Equalize ScrollContent Heights
-------------------------------------------------- */
function matchScrollContentHeight() {
  const els = [...document.querySelectorAll(".section1ScrollContent")];
  if (!els.length) return;

  els.forEach(el => (el.style.height = "auto"));

  const max = Math.max(...els.map(el => getNaturalHeight(el)));
  els.forEach(el => (el.style.height = `${max}px`));
}

/* --------------------------------------------------
   Kill GSAP instances
-------------------------------------------------- */
let horizontalTween = null;
let fixedScrollWidth = null;

function killPreviousGSAP() {
  if (horizontalTween) {
    try {
      horizontalTween.scrollTrigger?.kill();
      horizontalTween.kill();
    } catch (e) {}
    horizontalTween = null;
  }

  try {
    ScrollTrigger.getAll().forEach(st => st.kill());
  } catch (e) {}

  try {
    gsap.killTweensOf(".section1Scroll");
  } catch (e) {}
}

/* --------------------------------------------------
   Horizontal Scroll Setup
-------------------------------------------------- */
function initHorizontalScroll() {
  const scrollContainer = document.querySelector(".section1Scroll");
  const triggerEl = document.querySelector(".scroll-area");
  const boxes = document.querySelectorAll(".section1ScrollBox");

  if (!scrollContainer || !triggerEl || boxes.length <= 1) return;

  const scrollWidth = scrollContainer.scrollWidth;
  const vw = getViewportWidth();
  const totalScrollWidth = Math.max(0, scrollWidth - vw);

  fixedScrollWidth = totalScrollWidth;

  horizontalTween = gsap.to(scrollContainer, {
    x: () => -fixedScrollWidth,
    ease: "none",
    scrollTrigger: {
      trigger: triggerEl,
      start: "top top",
      end: "+=" + fixedScrollWidth,
      scrub: true,
      pin: true,
      pinSpacing: true,
      anticipatePin: 0,
      invalidateOnRefresh: false,
      pinType: "fixed",
      markers: false
    }
  });
}

/* --------------------------------------------------
   Horizontal Reveal
-------------------------------------------------- */
function initScrollContentReveal() {
  if (!horizontalTween) return;

  const contents = gsap.utils.toArray(".section1ScrollContent img");

  contents.forEach((content, i) => {
    const total = contents.length;
    const start = i / total;
    const end = (i + 0.8) / total;

    gsap.fromTo(
      content,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: content,
          containerAnimation: horizontalTween,
          start: `${start} bottom`,
          end: `${end} center`,
          scrub: true
        }
      }
    );
  });
}

/* --------------------------------------------------
   Last Box Padding Fix
-------------------------------------------------- */
function adjustLastBoxPadding() {
  const container = document.querySelector(".section1ScrollContainer");
  const lastBox = document.querySelector(".section1ScrollBox5");
  if (!container || !lastBox) return;

  const containerWidth = container.offsetWidth;
  let padding = window.innerWidth - containerWidth;

  padding = Math.max(0, padding) * 2;
  padding += window.innerWidth >= 768 ? 56 : 16;

  lastBox.style.paddingRight = `${padding}px`;
}

/* --------------------------------------------------
   Reveal Utilities
-------------------------------------------------- */
function revealSequential(selector, parent = null) {
  const items = gsap.utils.toArray(selector);

  items.forEach((item, i) => {
    gsap.fromTo(
      item,
      { scale: 0.8, opacity: 0, y: 40 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: parent || item,
          start: parent ? `top 80%+=${i * 80}` : `top+=${i * 120} 80%`,
          end: parent ? `top 50%+=${i * 80}` : `top+=${i * 120} 55%`,
          scrub: true
        }
      }
    );
  });
}

function scrubReveal(selector, { origin = "bottom", distance = 100, opacity = 0, scrollTrigger: userST = {} } = {}) {
  let offset = { x: 0, y: 0 };
  if (origin === "left") offset.x = -distance;
  if (origin === "right") offset.x = distance;
  if (origin === "top") offset.y = -distance;
  if (origin === "bottom") offset.y = distance;

  const defaultST = {
    trigger: selector,
    start: "top 90%",
    end: "top 40%",
    scrub: true,
    markers: false
  };

  gsap.fromTo(
    selector,
    { x: offset.x, y: offset.y, opacity },
    {
      x: 0,
      y: 0,
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        ...defaultST,
        ...userST
      }
    }
  );
}

/* --------------------------------------------------
   FULL REBUILD
-------------------------------------------------- */
function handleViewportChangeImmediate() {
  killPreviousGSAP();
  console.log("⚙️ FULL REBUILD…");

  unlockVh();
  updateViewportVars(true);

  matchScrollContentHeight();
  adjustLastBoxPadding();

  initHorizontalScroll();
  initScrollContentReveal();

  gsap.utils.toArray(".section1Caption").forEach(el =>
    gsap.to(el, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.85,
      ease: "power3.out",
      delay: 0.15
    })
  );

  document
    .querySelectorAll(
      ".section1Group img, .graph, .section1Arah img, .section1Visi img, .section1EduItem img"
    )
    .forEach(img =>
      gsap.fromTo(
        img,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
            end: "top 50%",
            scrub: true
          }
        }
      )
    );

  revealSequential(".needsItem");
  revealSequential(".section1StoryImg li");
  scrubReveal(".credit__member", { origin: "right", distance: 80 });
  scrubReveal(".credit__team", { origin: "left", distance: 80 });

  ScrollTrigger.refresh();

  requestAnimationFrame(() => {
    setTimeout(() => {
      lockVh();
      console.log("🔒 --vh locked for stable layout");
    }, 60);
  });
}

/* --------------------------------------------------
   Debounced rebuild (300ms on mobile)
-------------------------------------------------- */
const handleViewportChange = debounce(
  handleViewportChangeImmediate,
  isMobileDevice() ? 300 : 120
);

/* --------------------------------------------------
   INITIALIZE
-------------------------------------------------- */
waitForSectionImages().then(() => {
  console.log("Images loaded → init GSAP");
  handleViewportChangeImmediate();
});

/* --------------------------------------------------
   VISUAL VIEWPORT LISTENERS
-------------------------------------------------- */
if (window.visualViewport) {
  let lastStableVVHeight = window.visualViewport.height || window.innerHeight;

  window.visualViewport.addEventListener("resize", () => {
    const newH = window.visualViewport.height || window.innerHeight;

    updateViewportVars(false);

    if (Math.abs(newH - lastStableVVHeight) > 120) {
      lastStableVVHeight = newH;
      handleViewportChange();
    }
  });

  window.visualViewport.addEventListener("scroll", () => {
    updateViewportVars(false);
  });
} else {
  window.addEventListener("resize", () => {
    updateViewportVars(false);
    handleViewportChange();
  });
}

window.addEventListener("orientationchange", () => {
  unlockVh();
  updateViewportVars(true);
  setTimeout(handleViewportChangeImmediate, 260);
});

/* --------------------------------------------------
   FINAL BOUNCING FIX
-------------------------------------------------- */
window.addEventListener("load", () => {
  console.log("🔥 Window Load → Page stable");

  requestAnimationFrame(() => {
    ScrollTrigger.refresh();

    handleViewportChangeImmediate();

    setTimeout(() => {
      ScrollTrigger.refresh();
      console.log("🔥 FINAL REFRESH complete");
    }, 120);
  });
});

/* --------------------------------------------------
   DEBUG LOGS
-------------------------------------------------- */
ScrollTrigger.addEventListener("refresh", () => {
  console.group("🔁 ScrollTrigger REFRESH");
  ScrollTrigger.getAll().forEach(tr => {
    console.log({
      trigger: tr.trigger,
      start: tr.start,
      end: tr.end,
      pinSpacerHeight:
        tr.pin && tr.pin.parentNode ? tr.pin.parentNode.style.height : null
    });
  });
  console.groupEnd();
});

ScrollTrigger.addEventListener("update", () => {
  ScrollTrigger.getAll().forEach(tr => {
    console.log("UPDATE progress:", tr.trigger, tr.progress);
  });
});