const windowWidth = window.innerWidth;

if (windowWidth < 768) {
    
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
});} else {var designWrapper = document.querySelector(".design-text");
designWrapper.innerHTML = designWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: ".design-text .letter",
  translateY: [100, 0],
  delay: 400,
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
  delay: 500,
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
  delay: 600,
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
  delay: 700,
  translateY: [100, 0],
  easing: "easeOutExpo",
  duration: 1400,
});

}


  const heroContainer = document.querySelector('.hero-container');
  const links = document.querySelectorAll('.hero-works a');

  links.forEach(link => {
    link.addEventListener('mouseover', function() {
      let image = this.getAttribute('id') + '.jpg'; // assuming the images are named as id.jpg
      heroContainer.style.backgroundImage = `url('/assets/img/menu/${image}')`; // replace 'path/to/images/' with your actual image path
      heroContainer.style.animation = 'fadeIn 0.5s forwards';
      this.style.color = 'white';; 
      links.forEach(otherLink => {
        if (otherLink !== link) {
          otherLink.style.color = 'rgba(255, 255, 255, 0.5)';
        } else {
            otherLink.style.color = 'white';
        }
      });
    });

    link.addEventListener('mouseout', function() {
      heroContainer.style.backgroundImage = ''; // remove the background image
      this.style.color = 'rgba(255, 255, 255, 0.5)';
      heroContainer.style.animation = 'fadeOut 0.5s forwards';
    });
  });