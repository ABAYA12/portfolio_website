document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Adding image motion effects
    const hero = document.querySelector('.hero');
    hero.addEventListener('mousemove', (e) => {
        const { offsetX: x, offsetY: y } = e;
        hero.style.backgroundPosition = `${x * 0.1}px ${y * 0.1}px`;
    });

    // Add hover effects to candidate images
    const candidates = document.querySelectorAll('.candidate img');
    candidates.forEach(candidate => {
        candidate.addEventListener('mouseenter', () => {
            candidate.style.transform = 'scale(1.1)';
        });
        candidate.addEventListener('mouseleave', () => {
            candidate.style.transform = 'scale(1)';
        });
    });
});
