gsap.registerPlugin(ScrollTrigger);

/* -----------------------------
   Globals – declare first
   ----------------------------- */
let horizontalTween = null;      // for horizontal scroll
let textSwitchTrigger = null;    // for text switch
let scrollBoxes = [];            // will query later
let boxTexts = [];               // will query later

/* -----------------------------
   Helpers
   ----------------------------- */
function getViewportWidth() {
  return window.visualViewport ? window.visualViewport.width : window.innerWidth;
}
function getViewportHeight() {
  return window.visualViewport ? window.visualViewport.height : window.innerHeight;
}

function debounce(fn, wait = 120) {
  let t;
  return function (...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

/* -----------------------------
   Image preload -> refresh
   ----------------------------- */
const images = Array.from(document.querySelectorAll("img"));
let loadedCount = 0;

function onImageLoaded() {
  loadedCount++;
  if (loadedCount === images.length) {
    handleViewportChangeImmediate();
  }
}
if (images.length === 0) {
  loadedCount = 0;
} else {
  images.forEach(img => {
    if (img.complete) {
      onImageLoaded();
    } else {
      img.addEventListener("load", onImageLoaded);
      img.addEventListener("error", onImageLoaded);
    }
  });
}

/* -----------------------------
   Measure hidden elements safely
   ----------------------------- */
function getNaturalHeight(el) {
  const computed = window.getComputedStyle(el);
  if (computed.display !== 'none') {
    const prevHeight = el.style.height;
    el.style.height = 'auto';
    const h = el.offsetHeight;
    el.style.height = prevHeight;
    return h;
  }

  const prev = {
    display: el.style.display,
    position: el.style.position,
    visibility: el.style.visibility,
    height: el.style.height,
    width: el.style.width
  };

  el.style.display = 'block';
  el.style.position = 'absolute';
  el.style.visibility = 'hidden';
  el.style.height = 'auto';

  const h = el.offsetHeight;

  el.style.display = prev.display;
  el.style.position = prev.position;
  el.style.visibility = prev.visibility;
  el.style.height = prev.height;
  el.style.width = prev.width;

  return h;
}

/* -----------------------------
   Match heights
   ----------------------------- */
function matchScrollContentHeight() {
  const contents = Array.from(document.querySelectorAll(".section1ScrollContent"));
  if (!contents.length) return;

  contents.forEach(el => el.style.height = 'auto');

  let maxHeight = 0;
  contents.forEach(el => {
    const h = getNaturalHeight(el);
    if (h > maxHeight) maxHeight = h;
  });

  if (maxHeight <= 0) return;
  contents.forEach(el => {
    el.style.height = `${maxHeight}px`;
  });
}

/* -----------------------------
   Horizontal scroll init
   ----------------------------- */
function initHorizontalScroll() {
  if (horizontalTween) {
    try { horizontalTween.scrollTrigger.kill(); } catch (e) { }
    try { horizontalTween.kill(); } catch (e) { }
    horizontalTween = null;
  }

  scrollBoxes = document.querySelectorAll(".section1ScrollBox");
  if (!scrollBoxes || scrollBoxes.length <= 1) return;

  const totalScrollWidth = (scrollBoxes.length - 1) * getViewportWidth();

  horizontalTween = gsap.to(".section1Scroll", {
    x: () => -totalScrollWidth,
    ease: "none",
    scrollTrigger: {
      trigger: ".scroll-area",
      start: "top top",
      end: () => "+=" + totalScrollWidth,
      scrub: true,
      pin: true,
      anticipatePin: 1
    }
  });
}

/* -----------------------------
   Text switch
   ----------------------------- */
function initTextSwitch() {
  if (textSwitchTrigger) {
    try { textSwitchTrigger.kill(); } catch (e) { }
    textSwitchTrigger = null;
  }

  boxTexts = Array.from(document.querySelectorAll(".section1BoxTxt"));
  if (!boxTexts.length) return;

  boxTexts.forEach((el, i) => {
    if (i === 0) {
      el.style.display = 'block';
      el.classList.add('active');
    } else {
      el.style.display = 'none';
      el.classList.remove('active');
    }
  });

  textSwitchTrigger = ScrollTrigger.create({
    trigger: ".section1BoxWrap",
    start: "top center",
    end: "bottom center",
    scrub: true,
    onUpdate: self => {
      const maxIndex = Math.max(0, boxTexts.length - 1);
      const idx = Math.round(self.progress * maxIndex);
      const activeIndex = Math.min(maxIndex, Math.max(0, idx));

      boxTexts.forEach((el, i) => {
        if (i === activeIndex && !el.classList.contains("active")) {
          boxTexts.forEach(t => {
            t.classList.remove("active");
            t.style.display = "none";
          });

          el.style.display = "block";
          el.classList.add("active");

          gsap.fromTo(
            el,
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, ease: "power2.out" }
          );
        }
      });
    }
  });
}

/* -----------------------------
   Viewport change handler
   ----------------------------- */
function handleViewportChangeImmediate() {
  setAppHeight();
  matchScrollContentHeight();
  initHorizontalScroll();
  initTextSwitch();
  ScrollTrigger.refresh();
}
const handleViewportChange = debounce(handleViewportChangeImmediate, 120);

/* -----------------------------
   Listeners
   ----------------------------- */
window.addEventListener("load", () => {
  handleViewportChangeImmediate();
});

if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', handleViewportChange);
  window.visualViewport.addEventListener('scroll', () => setAppHeight());
} else {
  window.addEventListener('resize', handleViewportChange);
}
window.addEventListener('orientationchange', handleViewportChange);

if (images.length === loadedCount) {
  handleViewportChangeImmediate();
}

/* -----------------------------
   Extra animations
   ----------------------------- */

//--- Text slide-in from left ---
gsap.utils.toArray(".section1Caption").forEach((txt) => {
  gsap.from(txt, {
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: txt,
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });
});
