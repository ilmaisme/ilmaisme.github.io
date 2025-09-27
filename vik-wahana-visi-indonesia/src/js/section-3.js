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
const boxImgs = document.querySelectorAll(".section3BoxImg");

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

//--- Image Zoom in ---
document.querySelectorAll(".section3LetterItem img, .section3ChangeImg").forEach((img) => {
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
        scrub: true,
      },
    }
  );
});

//--- Text slide-in from left ---
gsap.utils.toArray(".section3QuoteTxt, .section3CoverCaption span").forEach((txt) => {
  gsap.from(txt, {
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: txt,
      start: "top 85%",
      toggleActions: "play none none reverse"
      // play on enter, reverse on leave
    }
  });
});