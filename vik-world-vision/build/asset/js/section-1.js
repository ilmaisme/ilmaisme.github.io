gsap.registerPlugin(ScrollTrigger);

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