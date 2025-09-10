gsap.registerPlugin(ScrollTrigger);

let rippleTimeline = null;

// Adjust leaf so droplet aligns horizontally with splash
function adjustLeafPosition() {
    const leafContainer = document.querySelector(".leaf-container");
    const droplet = document.querySelector(".droplet");
    const splash = document.querySelector(".splash");

    if (!leafContainer || !droplet || !splash) return;

    leafContainer.style.right = "auto";
    const leafRect = leafContainer.getBoundingClientRect();
    const dropletRect = droplet.getBoundingClientRect();
    const splashRect = splash.getBoundingClientRect();

    const screenCenterX = window.innerWidth / 2;
    const dropletOffsetX = dropletRect.left + dropletRect.width / 2 - leafRect.left;
    const newRight = -(leafRect.width - dropletOffsetX - screenCenterX);
    leafContainer.style.right = newRight + "px";
}

// Resize ripples to 2× splash and align center
function resizeRipplesAndPosition() {
  const splash = document.querySelector(".splash");
  const bg = document.querySelector(".background-bottom");
  const ripplesContainer = document.querySelector(".ripples");
  const rippleShapes = document.querySelectorAll(".ripple");
  const scene = document.querySelector(".scroll-scene");

  if (!splash || !bg || !ripplesContainer) return;

  const splashRect = splash.getBoundingClientRect();
  const sceneRect  = scene.getBoundingClientRect();

  // 1) Background position
  const splashCenterY_relScene = (splashRect.top - sceneRect.top) + (splashRect.height / 2);
  bg.style.top = splashCenterY_relScene + "px";
  bg.style.height = Math.max(0, sceneRect.height - splashCenterY_relScene) + "px";

  const bgRect = bg.getBoundingClientRect();

  // 2) Splash center in bg space
  const splashCenterX = splashRect.left + (splashRect.width / 2);
  const splashCenterY = splashRect.top  + (splashRect.height / 2);

  const centerX_relBg = splashCenterX - bgRect.left;
  let centerY_relBg = splashCenterY - bgRect.top;

  // 3) Responsive vertical offset
  // At 1920px → 75px offset; scale proportionally for smaller/larger screens
  const baseWidth = 1920;
  const baseOffset = 75;
  const offset = (window.innerWidth / baseWidth) * baseOffset;

  centerY_relBg += offset;

  // 4) Place ripples
  ripplesContainer.style.left = centerX_relBg + "px";
  ripplesContainer.style.top  = centerY_relBg + "px";

  // 5) Ripple sizing
  const rippleW = Math.max(120, splashRect.width * 2);
  const rippleH = rippleW * 0.5;

  rippleShapes.forEach(r => {
    r.style.width = rippleW + "px";
    r.style.height = rippleH + "px";
    r.style.left = "0px";
    r.style.top  = "0px";
    r.style.transform = "translate(-50%, -50%)";
  });
}

// Ripple animation
function startRipples() {
    if (rippleTimeline) return;

    gsap.set(".ripple", { opacity: 0.9, scaleX: 0.4, scaleY: 0.15 });

    rippleTimeline = gsap.timeline({ repeat: -1 });
    [".ripple1", ".ripple2", ".ripple3"].forEach((cls, i) => {
        rippleTimeline.fromTo(
            cls,
            { scaleX: 0.4, scaleY: 0.15, opacity: 0.9 },
            { scaleX: 1.5, scaleY: 0.5, opacity: 0, duration: 3, ease: "none" },
            i * 1.0
        );
    });
}

function stopRipples() {
    if (rippleTimeline) {
        rippleTimeline.kill();
        rippleTimeline = null;
    }
    gsap.set(".ripple", { opacity: 0 });
}

// Droplet Y offset
function getDropYOffset() {
    const splash = document.querySelector(".splash").getBoundingClientRect();
    const droplet = document.querySelector(".droplet").getBoundingClientRect();
    return (splash.top + splash.height / 2 + window.scrollY) -
        (droplet.top + droplet.height / 2 + window.scrollY);
}

window.addEventListener("load", () => {
    adjustLeafPosition();
    resizeRipplesAndPosition();
    ScrollTrigger.refresh();
});
window.addEventListener("resize", () => {
    adjustLeafPosition();
    resizeRipplesAndPosition();
    ScrollTrigger.refresh();
});

// Scroll timeline
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-scene",
        start: "top top",
        end: "80% center",
        scrub: true
    }
});

tl.to(".droplet", {
    y: () => getDropYOffset(),
    ease: "power1.in"
}).add("land");

tl.to([".splash", ".caption", ".ripples"], {
    opacity: 1,
    duration: 0.6,
    ease: "power1.out",
    onStart: startRipples,
    onReverseComplete: stopRipples
}, "land-=0.01");