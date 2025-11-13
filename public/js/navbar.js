   const hamburger = document.querySelector('.hamburger');
   const navMenu = document.querySelector('.nav-menu');

   hamburger.addEventListener('click', () => {
       navMenu.classList.toggle('active');
       // Change hamburger icon to X when menu is open
       const icon = hamburger.querySelector('i');
       if (navMenu.classList.contains('active')) {
           icon.classList.remove('fa-bars');
           icon.classList.add('fa-times');
       } else {
           icon.classList.remove('fa-times');
           icon.classList.add('fa-bars');
       }
   });

   // Close mobile menu when a link is clicked
   document.querySelectorAll('.nav-link').forEach(link => {
       link.addEventListener('click', () => {
           navMenu.classList.remove('active');
           const icon = hamburger.querySelector('i');
           icon.classList.remove('fa-times');
           icon.classList.add('fa-bars');
       });
   });