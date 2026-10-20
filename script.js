// Left_Right animation
const homeItems = document.querySelectorAll('.slide-left, .slide-right');

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, { threshold: 0.2 });

homeItems.forEach(el => observer1.observe(el));

// Slide_up animations
const skillsItems = document.querySelectorAll('.slide-up1, .slide-up2, .slide-up3');

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); 
    }
  });
}, { threshold: 0.2 });

skillsItems.forEach(el => observer2.observe(el));

// Navbar mobile menu to close automatically
document.addEventListener("DOMContentLoaded", function () {
    const navbarCollapse = document.getElementById("navbarNav");
    const navLinks = document.querySelectorAll("#navbarNav .nav-link");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            // Only close it if the menu is currently open (mobile view)
            if (navbarCollapse.classList.contains("show")) {
                const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
});

