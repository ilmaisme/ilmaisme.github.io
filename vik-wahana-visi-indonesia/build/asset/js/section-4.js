// --- Register GSAP Plugins ---
gsap.registerPlugin(ScrollTrigger);

// --- Elements ---
const scrollTrack = document.querySelector(".scroll-track");
const ship = document.querySelector(".ship");
const panels = Array.from(scrollTrack.children);
const section4Boxes = gsap.utils.toArray(".section4Box");

// --- GSAP scrollTween variable (must be declared before functions) ---
let scrollTween = null;

// --- Image Preload & ScrollTrigger Refresh ---
const images = document.querySelectorAll("img");
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

// --- Helpers ---
function getViewportHeight() {
  return window.visualViewport ? window.visualViewport.height : window.innerHeight;
}

// Update scroll-track height dynamically
function updateScrollTrackHeight() {
  scrollTrack.style.height = getViewportHeight() + "px";
}

// Update scroll-track width dynamically
function updateScrollTrackWidth() {
  const totalWidth = panels.reduce((sum, el) => sum + el.offsetWidth, 0);
  scrollTrack.style.width = totalWidth + "px";
}

// Total horizontal scroll distance
function getTotalScroll() {
  return scrollTrack.scrollWidth - window.innerWidth;
}

// --- GSAP Animations ---
function initHorizontalScroll() {
  if (scrollTween) {
    try { scrollTween.scrollTrigger.kill(); } catch (e) { }
    try { scrollTween.kill(); } catch (e) { }
  }

  scrollTween = gsap.to(scrollTrack, {
    x: () => -getTotalScroll(),
    ease: "none",
    scrollTrigger: {
      trigger: ".scroll-area",
      start: "top top",
      end: () => "+=" + getTotalScroll(),
      scrub: true,
      pin: true,
      anticipatePin: 1
    }
  });
}

// --- One-shot & Debounced Viewport Handlers ---
function handleViewportChangeImmediate() {
  updateScrollTrackHeight();
  updateScrollTrackWidth();
  initHorizontalScroll();
  ScrollTrigger.refresh();
}

function debounce(fn, wait = 120) {
  let t;
  return function (...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}
const handleViewportChange = debounce(handleViewportChangeImmediate, 120);

// --- Listeners ---
window.addEventListener("load", handleViewportChangeImmediate);
window.addEventListener("resize", handleViewportChange);
window.addEventListener("orientationchange", handleViewportChange);

if (window.visualViewport) {
  window.visualViewport.addEventListener("resize", handleViewportChange);
  window.visualViewport.addEventListener("scroll", updateScrollTrackHeight);
}

// --- If all images already loaded ---
if (loadedCount === images.length) {
  handleViewportChangeImmediate();
}

gsap.from(section4Boxes, {
  x: -150,
  opacity: 0,
  ease: "power2.out",
  stagger: {
    each: 1, // space out across scroll
  },
  scrollTrigger: {
    trigger: ".scroll-area",
    start: "top top",
    end: () => "+=" + getTotalScroll(),
    scrub: true,
    markers: false,
  }
});
