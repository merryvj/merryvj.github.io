



  $(document).ready(function() {
    AOS.init();

    let mainNavLinks = document.querySelectorAll(".sideNav ul li a");
    let mainSections = document.querySelectorAll("body section");

    console.log(mainSections);

    let lastId;
    let cur = [];

    window.addEventListener("scroll", event => {
      let fromTop = window.scrollY;

      mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          link.classList.add("current");
        } else {
          link.classList.remove("current");
        }
      });
    });


  })

