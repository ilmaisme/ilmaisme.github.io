gsap.registerPlugin(ScrollTrigger);

// --- Refresh ScrollTrigger after images are loaded ---
const images = document.querySelectorAll("img");
let loadedCount = 0;

function checkAllLoaded() {
  if (loadedCount === images.length) {
    ScrollTrigger.refresh();
  }
}

images.forEach(img => {
  if (img.complete) {
    loadedCount++;
    checkAllLoaded();
  } else {
    img.addEventListener("load", () => {
      loadedCount++;
      checkAllLoaded();
    });
  }
});

// --- Text + Image Switch ---
const boxTexts = document.querySelectorAll(".section3BoxJs");
const boxImgs  = document.querySelectorAll(".section3BoxImg");

if (boxTexts.length && boxImgs.length) {
  ScrollTrigger.create({
    trigger: ".section3BoxWrap",
    start: "top center",
    end: "bottom center",
    scrub: true,
    onUpdate: self => {
      const activeIndex = self.progress < 0.5 ? 0 : 1;

      // --- Text switch (zoom + fade) ---
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

      // --- Image crossfade ---
      boxImgs.forEach((img, i) => {
        if (i === activeIndex) {
          img.classList.add("active");
        } else {
          img.classList.remove("active");
        }
      });
    }
  });

  // --- Init state ---
  boxTexts.forEach((t, i) => {
    t.style.display = i === 0 ? "block" : "none";
    t.classList.toggle("active", i === 0);
  });
  boxImgs.forEach((img, i) => {
    img.classList.toggle("active", i === 0);
  });
}
