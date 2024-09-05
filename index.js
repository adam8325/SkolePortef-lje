//Adding the header.html to other html files and adding the animation to the header on index.html

fetch('../assets/header.html')
    .then(response => response.text())
    .then(data => {
        const headerPlaceholder = document.getElementById('header-placeholder');
        headerPlaceholder.innerHTML = data;

        // Check if the current page is index.html or the root of the Netlify domain
        const isIndexPage = window.location.pathname.endsWith('index.html');
        const isRootNetlifyDomain = window.location.hostname === 'adams-porteflje.netlify.app' && window.location.pathname === '/';

        if (isIndexPage || isRootNetlifyDomain) {
            document.querySelector('.header').classList.add('animate');
        }
    });

//Accordion toggle function

const faqs = document.querySelectorAll(".container-accord");

faqs.forEach((accord) => { 
    accord.addEventListener('click', () => {
        accord.classList.toggle('active');
    });
});


//Text animation for the frontpage

let typed = new Typed('.multiple-text', {
    strings: ["Fullstack", "Backend", "Frontend"], 
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 500,
    loop: true
});


