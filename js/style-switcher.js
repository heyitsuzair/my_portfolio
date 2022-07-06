// Toggle Style Switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggle");
// Open Style Switcher
$(styleSwitcherToggle).on("click", function () {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide Style Switcher

// If clicked On Body
$(".section").on("click", function () {
  if ($(".style-switcher").hasClass("open")) {
    $(".style-switcher").removeClass("open");
  }
});
$(".aside").on("click", function () {
  if ($(".style-switcher").hasClass("open")) {
    $(".style-switcher").removeClass("open");
  }
});
// If Scrolled
$(".section").on("scroll", function () {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

//   Theme Colors
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyles.forEach(function (style) {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
// Theme Light And Dark Mode
const dayNight = document.querySelector(".day-night");
$(dayNight).click(function () {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
$(window).on("load", function () {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
