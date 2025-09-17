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

// --- Text switch with zoom animation ---
const boxTexts = document.querySelectorAll(".section3BoxJs");
const boxImgs = document.querySelectorAll(".section3BoxImg");

ScrollTrigger.create({
  trigger: ".section3BoxWrap",
  start: "top center",
  end: "bottom center",
  scrub: true,
  onUpdate: (self) => {
    const activeIndex = self.progress < 0.5 ? 0 : 1;

    // --- Text switch (zoom + fade) ---
    boxTexts.forEach((el, i) => {
      if (i === activeIndex && !el.classList.contains("active")) {
        boxTexts.forEach((t) => {
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

    // --- Image crossfade (smooth) ---
    boxImgs.forEach((img, i) => {
      if (i === activeIndex) {
        img.classList.add("active");
      } else {
        img.classList.remove("active");
      }
    });
  },
});

// --- Init state ---
boxTexts[0].style.display = "block";
boxTexts[0].classList.add("active");
boxImgs[0].classList.add("active");
