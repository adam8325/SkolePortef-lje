const navbarLinks = document.querySelectorAll(".navbar-link");

navbarLinks.forEach(link => {
  link.addEventListener("click", function() {
    navbarLinks.forEach(navLink => navLink.style.color = "");
    link.style.color = "#0ef";
  });
});






let typed = new Typed('.multiple-text', {
    strings: ["Fullstack", "Backend", "Frontend"], 
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 500,
    loop: true
});