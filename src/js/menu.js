
    
var designWrapper = document.querySelector(".design-text");
designWrapper.innerHTML = designWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: ".design-text .letter",
  translateY: [100, 0],
  easing: "easeOutExpo",
  duration: 1400,
});

var webWrapper = document.querySelector(".web-text");
webWrapper.innerHTML = webWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: ".web-text .letter",
  delay: 100,
  translateY: [100, 0],
  easing: "easeOutExpo",
  duration: 1400,
});

var videoWrapper = document.querySelector(".video-text");
videoWrapper.innerHTML = videoWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: ".video-text .letter",
  delay: 200,
  translateY: [100, 0],
  easing: "easeOutExpo",
  duration: 1400,
});

var photoWrapper = document.querySelector(".photo-text");
photoWrapper.innerHTML = photoWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: ".photo-text .letter",
  delay: 300,
  translateY: [100, 0],
  easing: "easeOutExpo",
  duration: 1400,
});