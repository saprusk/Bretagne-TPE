window.addEventListener('scroll', () => {
    let currentScroll = window.scrollY;

    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.height = (90 - currentScroll / 10) + "px";
    }

    const heroTitle = document.querySelector('.hero-banner h1');
    if (heroTitle) {
        let titleLeft = heroTitle.getBoundingClientRect().left;
        heroTitle.style.transform = `translateX(${currentScroll * 0.1}px)`;
    }
});

const technicalSessionSecretToken = "B77X92KLS01A7X9234M";
