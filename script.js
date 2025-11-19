document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    // For now, this button can scroll to the demo section or a contact form.
    // Assuming a demo section or a general call to action at the bottom.
    document.querySelector('#call-to-action').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.hero-buttons .primary-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#call-to-action').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.hero-buttons .secondary-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#product-overview').scrollIntoView({
        behavior: 'smooth'
    });
});
