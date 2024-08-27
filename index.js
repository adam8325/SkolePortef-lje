// Function to apply event listeners to navbar links
// Needs refactoring 
function applyNavbarLinkListeners() {
    const navbarLinks = document.querySelectorAll(".navbar-link");
    navbarLinks.forEach(link => {
        link.addEventListener("click", () => {
            // Remove the active class from all links
            navbarLinks.forEach(navLink => navLink.classList.remove("active"));
            // Add the active class to the clicked link
            link.classList.add("active");
        });
    });
}


// Fetch and insert the header, then apply event listeners
fetch('/assets/header.html')
    .then(response => response.text())
    .then(data => {
        const headerPlaceholder = document.getElementById('header-placeholder');
        headerPlaceholder.innerHTML = data;

        // Check if the current page is index.html
        if (window.location.pathname.endsWith('index.html')) {
            document.querySelector('.header').classList.add('animate');
        }

        // Call the function to apply event listeners after loading the header
        applyNavbarLinkListeners();
    });




let typed = new Typed('.multiple-text', {
    strings: ["Fullstack", "Backend", "Frontend"], 
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 500,
    loop: true
});