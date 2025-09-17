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

// --- Horizontal Scroll ---
const scrollContainer = document.querySelector(".section2Scroll");

gsap.to(scrollContainer, {
    x: () => -(scrollContainer.scrollWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
        trigger: ".scroll-area",
        start: "top top",
        end: () => "+=" + (scrollContainer.scrollWidth - window.innerWidth),
        scrub: true,
        pin: true,
        anticipatePin: 1
    }
});

// --- Text switch with zoom animation ---
const boxTexts = document.querySelectorAll(".section2BoxTxt");

ScrollTrigger.create({
    trigger: ".section2BoxWrap",
    start: "top center",
    end: "bottom center",
    scrub: true,
    onUpdate: self => {
        const activeIndex = self.progress < 0.5 ? 0 : 1;

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

// --- Text switch with zoom animation (Digi) ---
const digiTexts = document.querySelectorAll(".section2Digi");

ScrollTrigger.create({
    trigger: ".section2Content2",
    start: "top center",
    end: "bottom center",
    scrub: true,
    onUpdate: self => {
        const switchPoint = 0.6;
        const activeIndex = self.progress < switchPoint ? 0 : 1;

        digiTexts.forEach((el, i) => {
            if (i === activeIndex && !el.classList.contains("active")) {
                digiTexts.forEach(t => {
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