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

// --- Horizontal Scroll ---
const scrollContainer = document.querySelector(".section2Scroll");

function updateHorizontalScroll() {
    if (!scrollContainer) return;

    const distance = scrollContainer.scrollWidth - window.innerWidth;

    gsap.to(scrollContainer, {
        x: () => -distance,
        ease: "none",
        scrollTrigger: {
            trigger: ".scroll-area",
            start: "top top",
            end: () => "+=" + distance,
            scrub: true,
            pin: true,
            anticipatePin: 1
        }
    });
}

updateHorizontalScroll();
window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
});

// --- Helper: Text switch with zoom ---
function setupTextSwitch(trigger, selector, switchPoint = 0.5) {
    const texts = document.querySelectorAll(selector);
    if (!texts.length) return;

    ScrollTrigger.create({
        trigger: trigger,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onUpdate: self => {
            const activeIndex = self.progress < switchPoint ? 0 : 1;

            texts.forEach((el, i) => {
                if (i === activeIndex && !el.classList.contains("active")) {
                    // hide all
                    texts.forEach(t => {
                        t.classList.remove("active");
                        t.style.display = "none";
                    });

                    // show + animate active
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

// Apply text switch
setupTextSwitch(".section2BoxWrap", ".section2BoxTxt", 0.5);
setupTextSwitch(".section2Content2", ".section2Digi", 0.6);
