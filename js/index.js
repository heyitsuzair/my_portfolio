$(document).ready(function () {
  var typed = new Typed(".typing", {
    strings: [
      "Web Developer",
      "Web Designer",
      "Freelancer",
      "WordPress Expert",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  var waypoint = new Waypoint({
    element: document.getElementById("waypoint-elem"),
    handler: function (direction) {
      let pBar = document.querySelectorAll(".progress-in");
      pBar[0].setAttribute("style", "width: 90%;transition:1.3s all");
      pBar[1].setAttribute("style", "width: 90%;transition:1.3s all");
      pBar[2].setAttribute("style", "width: 75%;transition:1.3s all");
      pBar[3].setAttribute("style", "width: 85%;transition:1.3s all");
      pBar[4].setAttribute("style", "width: 85%;transition:1.3s all");
      pBar[5].setAttribute("style", "width: 90%;transition:1.3s all");
      pBar[6].setAttribute("style", "width: 90%;transition:1.3s all");
    },
    offset: "85%",
  });
});
