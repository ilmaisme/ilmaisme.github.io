gsap.registerPlugin(ScrollTrigger);
const images = document.querySelectorAll("img");
let loadedCount = 0;

images.forEach(img => {
  if (img.complete) {
    loadedCount++;
  } else {
    img.addEventListener("load", () => {
      loadedCount++;
      if (loadedCount === images.length) {
        ScrollTrigger.refresh();
      }
    });
  }
});

// If already all loaded
if (loadedCount === images.length) {
  ScrollTrigger.refresh();
}

const scrollTrack = document.querySelector(".scroll-track");
const ship = document.querySelector(".ship");

// total horizontal scroll = scrollTrack width - viewport width
const totalScroll = scrollTrack.scrollWidth - window.innerWidth;

// Animate the horizontal panels
gsap.to(scrollTrack, {
    x: -totalScroll,
    ease: "none",
    scrollTrigger: {
        trigger: ".scroll-area",
        start: "top top",
        end: "+=" + totalScroll,
        scrub: true,
        pin: true,
        anticipatePin: 1
    }
});

// Animate the ship across the viewport
gsap.to(ship, {
    x: () => window.innerWidth - ship.offsetWidth, // full width minus ship width
    ease: "none",
    scrollTrigger: {
        trigger: ".scroll-area",
        start: "top top",
        end: "+=" + totalScroll,
        scrub: true
    }
});
