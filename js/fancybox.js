// // / Fancybox Config
// $('data-fancybox="gallery"').fancybox({
//   buttons: [
//     "slideShow",
//     "thumbs",
//     "zoom",
//     "fullScreen",
//     "share",
//     "close"
//   ],
//   loop: false,
//   protect: true
// });

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});



    document.getElementById("toggleButton").addEventListener("click", function () {
      var div = document.getElementById("toggleDiv");
      var button = document.getElementById("toggleButton");

      // Toggle the visibility of the div
      if (div.style.display === "none") {
        div.style.display = "block";
        button.textContent = "View Less"; // Change button text
      } else {
        div.style.display = "none";
        button.textContent = "View More"; // Change button text
      }
    });



    const cursorRounded = document.querySelector(".rounded");
    const cursorPointed = document.querySelector(".pointed");

    const moveCursor = (e) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;

      cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

      cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    window.addEventListener("mousemove", moveCursor);


    window.addEventListener("load", function () {
      setTimeout(function () {
        const loader = document.getElementById("loader-parent-2");
        loader.classList.add("hide");

        // Wait for fade-out to finish, then hide loader and enable scroll
        setTimeout(() => {
          loader.style.display = "none";
          document.body.style.overflow = "auto"; // Re-enable scrolling
        }, 500); // match transition time
      }, 3000); // loader display duration
    });

  


    // Intersection Observer — reveal entries on scroll
    const entries = document.querySelectorAll('[data-entry]');

    const observer = new IntersectionObserver((items) => {
      items.forEach(item => {
        if (item.isIntersecting) {
          item.target.classList.add('visible');
          observer.unobserve(item.target); // fire once
        }
      });
    }, { threshold: 0.15 });

    entries.forEach(entry => observer.observe(entry));

    // Fallback: if already in view on load (no scroll needed)
    window.addEventListener('load', () => {
      entries.forEach(entry => {
        const rect = entry.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          entry.classList.add('visible');
        }
      });
    });
 



