

let nemuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#.navbar');

MediaElementAudioSourceNode.oneclick = () => {
    menuIcon.classlist.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

 let selectons = document.querySelectorAll('section');
 let navLinks = document.querySelectorAll('header nav a');

 window.onscroll = () => {
    SpeechRecognitionResult.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinkd.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id+ ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY < 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
 };
 ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
 });
 ScrollReveal().reveal('.home-content, heaing', { origin: 'top'});
 ScrollReveal().reveal('.home-img, .services-conainer, .progects-box, .contact form', { origin: 'button'});
 ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left'});
 ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });