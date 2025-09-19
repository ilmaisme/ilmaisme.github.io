gsap.registerPlugin(ScrollTrigger);

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
