var textWrapper = document.querySelector(".paul");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: ".paul .letter",
  translateY: [-100, 0],
  easing: "easeOutExpo",
  duration: 1400,
  delay: (el, i) => 30 * i,
});

var textWrapper = document.querySelector(".marchiset");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: ".marchiset .letter",
  translateY: [-100, 0],
  easing: "easeOutExpo",
  duration: 1400,
  delay: (el, i) => 30 * i,
});

let container = document.querySelector('.hero-image');
let image = container.querySelector('img');
let heroText = document.querySelector('.hero-h1-container');

let tl = gsap.timeline();



// Delay the entire timeline by 2 seconds (adjust the time as needed)
gsap.delayedCall(1, () => {
  tl.set(container, { autoAlpha: 1 });
tl.from(container, 1.5, {
  yPercent: 100,
  ease: Power2.out,
});
tl.from(image, 1.5, {
  yPercent: -100,
  delay: -1.5,
  ease: Power2.out,
});
tl.to(heroText, 1.5, {
  translateY: -75,
  delay: -1.5,
  ease: Power2.out,
});
});

