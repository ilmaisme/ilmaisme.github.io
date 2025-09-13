gsap.registerPlugin(ScrollTrigger);

// --- Horizontal Scroll ---
const scrollBoxes = document.querySelectorAll(".section1ScrollBox");
const totalScrollWidth = (scrollBoxes.length - 1) * window.innerWidth;

gsap.to(".section1Scroll", {
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

// --- Match Heights ---
function matchScrollContentHeight() {
  const contents = document.querySelectorAll(".section1ScrollContent");
  let maxHeight = 0;

  contents.forEach(el => {
    el.style.height = "auto";
    maxHeight = Math.max(maxHeight, el.offsetHeight);
  });

  contents.forEach(el => {
    el.style.height = maxHeight + "px";
  });
}

window.addEventListener("load", matchScrollContentHeight);
window.addEventListener("resize", matchScrollContentHeight);

// --- Text switch with zoom animation ---
const boxTexts = document.querySelectorAll(".section1BoxTxt");

ScrollTrigger.create({
  trigger: ".section1BoxWrap",
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