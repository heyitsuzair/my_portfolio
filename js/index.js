$(document).ready(function () {
  let typed;
  let progressBarAddWidth;
  let progressBarRemoveWidth;
  // Typed JS Start
  class typedJS {
    typing() {
      typed = new Typed(".typing", {
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
    }
  }
  typedJS = new typedJS();
  typedJS.typing();
  // Typed JS End

  // Waypoints Start
  class wayPoints {
    addProgressWidth() {
      progressBarAddWidth = new Waypoint({
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
    }

    progressBarRemoveWidth() {
      progressBarRemoveWidth = new Waypoint({
        element: document.getElementById("waypoint-elem"),
        handler: function (direction) {
          let pBar = document.querySelectorAll(".progress-in");
          pBar[0].setAttribute("style", "width: 0%;");
          pBar[1].setAttribute("style", "width: 0%;");
          pBar[2].setAttribute("style", "width: 0%;");
          pBar[3].setAttribute("style", "width: 0%;");
          pBar[4].setAttribute("style", "width: 0%;");
          pBar[5].setAttribute("style", "width: 0%;");
          pBar[6].setAttribute("style", "width: 0%;");
        },
        offset: "100%",
      });
    }
  }

  wayPointsObj = new wayPoints();
  wayPointsObj.addProgressWidth();
  wayPointsObj.progressBarRemoveWidth();
  // Waypoints End

  // Show section Start
  class showSection {
    constructor() {
      this.nav = document.querySelector(".nav");
      this.navList = document.querySelectorAll("li");
      this.totalNavList = this.navList.length;
      this.allSection = document.querySelectorAll(".section");
      this.totalSection = this.allSection.length;
      this.navToggleBtn = $(".nav-toggle");
      this.aside = $(".aside");
    }
    showSection(element) {
      for (let i = 0; i < this.totalSection; i++) {
        this.allSection[i].classList.remove("active");
      }
      this.target = $(element).attr("href").split("#")[1];
      document.querySelector(`#${this.target}`).classList.add("active");
    }
    removeActives() {
      for (let i = 0; i < this.totalSection; i++) {
        this.allSection[i].classList.remove("back-section");
      }
      for (let j = 0; j < this.totalNavList; j++) {
        this.setBackSection(j);
        this.navList[j].querySelector("a").classList.remove("active");
      }
    }
    setBackSection(j) {
      if (this.navList[j].querySelector("a").classList.contains("active")) {
        this.allSection[j].classList.add("back-section");
      }
    }
    animateSectionTogglerBtn() {
      if (window.innerWidth < 1200) {
        this.aside.toggleClass("open");
        this.navToggleBtn.toggleClass("open");
        $("#hamburger").toggleClass("fa fa-times");
        for (let i = 0; i < this.totalSection; i++) {
          this.allSection[i].classList.toggle("open");
        }
      }
    }
  }
  showSectionObj = new showSection();
  // Show section End

  // Aside Start
  class aside extends showSection {
    handleActiveClass() {
      for (let i = 0; i < this.totalNavList; i++) {
        const element = this.navList[i].querySelector("a");
        $(element).on("click", function () {
          // show the clicked section
          showSectionObj.removeActives();
          $(this).addClass("active");
          showSectionObj.showSection(this);
          showSectionObj.animateSectionTogglerBtn();
        });
      }
    }
  }
  asideObj = new aside();
  asideObj.handleActiveClass();
  // Aside End

  // Nav Toggler Start
  class navToggler extends aside {
    handleNavToggler() {
      this.navToggleBtn.on("click", () => {
        showSectionObj.animateSectionTogglerBtn();
      });
    }
  }
  navTogglerObj = new navToggler();
  navTogglerObj.handleNavToggler();
  // Nav Toggler End
});
