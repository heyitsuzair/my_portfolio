// Variables
const styleSwitcherToggle = document.querySelector(".style-switcher-toggle");
const alternateStyles = document.querySelectorAll(".alternate-style");
const dayNight = document.querySelector(".day-night");

// Style Switcher
class styleSwitcher {
  // hide on scroll
  closeOnScroll() {
    $(window).scroll(function () {
      if (
        document.querySelector(".style-switcher").classList.contains("open")
      ) {
        document.querySelector(".style-switcher").classList.remove("open");
      }
    });
  }
  openStyleSwitcher() {
    $(styleSwitcherToggle).on("click", function () {
      document.querySelector(".style-switcher").classList.toggle("open");
    });
  }
}
switcherObj = new styleSwitcher();
switcherObj.closeOnScroll();
switcherObj.openStyleSwitcher();
//   Theme Colors
class themeColors {
  setActiveStyle(color) {
    alternateStyles.forEach(function (style) {
      if (color === style.getAttribute("title")) {
        style.removeAttribute("disabled");
      } else {
        style.setAttribute("disabled", "true");
      }
    });
  }
}
themeColors = new themeColors();
themeColors.setActiveStyle();
// Theme Light And Dark Mode
class themeMode {
  constructor() {
    this.dayNight = dayNight;
  }
  setDayNight() {
    $(dayNight).click(function () {
      dayNight.querySelector("i").classList.toggle("fa-sun");
      dayNight.querySelector("i").classList.toggle("fa-moon");
      document.body.classList.toggle("dark");
    });
  }
  setDefaultMode() {
    $(window).on("load", function () {
      if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
      } else {
        dayNight.querySelector("i").classList.add("fa-moon");
      }
    });
  }
}
themeMode = new themeMode();
themeMode.setDayNight();
themeMode.setDefaultMode();
