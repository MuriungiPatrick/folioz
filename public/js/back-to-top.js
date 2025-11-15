 // Back to top button functionality
 const backToTopButton = document.getElementById("backToTop");

 // Show/hide the button based on scroll position
 window.addEventListener("scroll", () => {
     if (window.pageYOffset > 300) {
         backToTopButton.classList.add("show");
     } else {
         backToTopButton.classList.remove("show");
     }
 });

 // Scroll to top when button is clicked
 backToTopButton.addEventListener("click", () => {
     window.scrollTo({
         top: 0,
         behavior: "smooth"
     });
 });

 // Smooth scrolling for navigation links
 document.querySelectorAll('a[href^=""]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });