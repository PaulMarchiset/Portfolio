gsap.registerPlugin(ScrollTrigger) 

// GSAP Scroll Animation
gsap.to("main", {
  x: () => -(document.querySelector("main").scrollWidth - window.innerWidth),
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: "main",
    start: "top top",
    end: () => "+=" + document.querySelector("main").scrollWidth,
    scrub: true,
  },
});