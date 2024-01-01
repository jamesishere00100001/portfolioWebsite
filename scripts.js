let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        // Scrolling up
        document.querySelector('.scroll-header').classList.remove('expanded');
    } else {
        // Scrolling down
        document.querySelector('.scroll-header').classList.add('expanded');
    }

    prevScrollPos = currentScrollPos;
};

document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector(".scroll-header");
    var container = document.querySelector(".projects .contact .about .intro"); // Adjust the selector based on your HTML structure
    var containerOffset = container.offsetTop;
    var startScrollingOffset = 75; // Adjust this value based on when you want the scrolling to start
    var isScrollingEnabled = false;
    var lastScrollTop = 0;
 
    window.addEventListener("scroll", function () {
       var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
 
       if (scrollTop > containerOffset - startScrollingOffset) {
          isScrollingEnabled = true;
       }
 
       if (isScrollingEnabled) {
          if (scrollTop > lastScrollTop) {
             // Scrolling down
             header.classList.add("expanded");
          } else {
             // Scrolling up
             header.classList.remove("expanded");
          }
       } else {
          // Reset when above the container
          header.classList.remove("expanded");
       }
 
       lastScrollTop = scrollTop;
    });
 });
 
 
 
