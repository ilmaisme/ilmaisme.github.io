gsap.registerPlugin(ScrollTrigger);

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
  return function(...args) {
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
    // After all images are loaded, recalc layout and refresh triggers
    handleViewportChangeImmediate();
  }
}
if (images.length === 0) {
  // no images -> still run initial layout
  loadedCount = 0;
} else {
  images.forEach(img => {
    if (img.complete) {
      onImageLoaded();
    } else {
      img.addEventListener("load", onImageLoaded);
      img.addEventListener("error", onImageLoaded); // treat error as loaded to avoid hang
    }
  });
}

/* -----------------------------
   Measure hidden elements safely
   returns the natural height even if display:none
   ----------------------------- */
function getNaturalHeight(el) {
  const computed = window.getComputedStyle(el);
  if (computed.display !== 'none') {
    // visible: ensure auto height
    const prevHeight = el.style.height;
    el.style.height = 'auto';
    const h = el.offsetHeight;
    el.style.height = prevHeight;
    return h;
  }

  // hidden: temporarily reveal off-flow to measure without affecting layout
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

  // restore
  el.style.display = prev.display;
  el.style.position = prev.position;
  el.style.visibility = prev.visibility;
  el.style.height = prev.height;
  el.style.width = prev.width;

  return h;
}

/* -----------------------------
   Match heights (original approach, but measures hidden elements safely)
   ----------------------------- */
function matchScrollContentHeight() {
  const contents = Array.from(document.querySelectorAll(".section1ScrollContent"));
  if (!contents.length) return;

  // reset inline heights first so we measure natural heights
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
   Horizontal scroll init (rebuildable)
   ----------------------------- */
const scrollBoxes = document.querySelectorAll(".section1ScrollBox");
let horizontalTween = null;

function initHorizontalScroll() {
  // kill previous instance cleanly
  if (horizontalTween) {
    try {
      if (horizontalTween.scrollTrigger) horizontalTween.scrollTrigger.kill();
    } catch (e) {}
    try { horizontalTween.kill(); } catch (e) {}
    horizontalTween = null;
  }

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
   Text switch (recreateable)
   ----------------------------- */
const boxTexts = Array.from(document.querySelectorAll(".section1BoxTxt"));
let textSwitchTrigger = null;

function initTextSwitch() {
  // kill old trigger if present
  if (textSwitchTrigger) {
    try { textSwitchTrigger.kill(); } catch (e) {}
    textSwitchTrigger = null;
  }

  if (!boxTexts.length) return;

  // ensure initial visual state: show first, hide rest
  boxTexts.forEach((el, i) => {
    if (i === 0) {
      el.style.display = 'block';
      el.classList.add('active');
    } else {
      el.style.display = 'none';
      el.classList.remove('active');
    }
  });

  // Create a new ScrollTrigger for the text switch
  textSwitchTrigger = ScrollTrigger.create({
    trigger: ".section1BoxWrap",
    start: "top center",
    end: "bottom center",
    scrub: true,
    onUpdate: self => {
      // generic mapping: if there are N texts, map progress to [0..N-1]
      const maxIndex = Math.max(0, boxTexts.length - 1);
      const idx = Math.round(self.progress * maxIndex);
      // guard
      const activeIndex = Math.min(maxIndex, Math.max(0, idx));

      boxTexts.forEach((el, i) => {
        if (i === activeIndex && !el.classList.contains("active")) {
          // hide all first
          boxTexts.forEach(t => {
            t.classList.remove("active");
            t.style.display = "none";
          });

          // show + animate the active one
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
   One-shot & viewport-change handlers
   ----------------------------- */
function handleViewportChangeImmediate() {
  // order matters: set app height first, then match content heights,
  // then initialize horizontal scroll (which depends on widths/heights),
  // then create text switch, then refresh ScrollTrigger.
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
  // run initial layout once DOM/images may be ready
  handleViewportChangeImmediate();
});

if (window.visualViewport) {
  // update app-height continuously (quick, not heavy)
  window.visualViewport.addEventListener('resize', handleViewportChange);
  // update height on visualViewport scroll (mobile bar hide/show)
  window.visualViewport.addEventListener('scroll', () => setAppHeight());
} else {
  window.addEventListener('resize', handleViewportChange);
}
window.addEventListener('orientationchange', handleViewportChange);

/* If all images were already loaded earlier, ensure initial run */
if (images.length === loadedCount) {
  handleViewportChangeImmediate();
}
