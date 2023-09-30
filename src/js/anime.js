anime({
    targets: ".line-drawing-demo .lines path",
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: [0, 1],
    easing: "easeInOutSine",
    duration: 750,
    delay: function (el, i) {
      return i * 200;
    },
    direction: "alternate",
    loop: false,
    endDelay: 5000,
    color: '#000000',
  });