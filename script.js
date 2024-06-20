document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Transition effects for sections
    const sections = document.querySelectorAll('.section');
    const options = {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });

    // Image gallery with event delegation
    const modalContainer = document.getElementById('modal-container');
    document.body.addEventListener('click', function(e) {
        if (e.target.classList.contains('portfolio-item-img')) {
            const imgSrc = e.target.src;
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${imgSrc}" alt="Portfolio Item">
                </div>
            `;
            modalContainer.appendChild(modal);
        }
        
        if (e.target.classList.contains('close')) {
            const modal = e.target.closest('.modal');
            modalContainer.removeChild(modal);
        }
    });

    // Lazy loading iframes
    const iframes = document.querySelectorAll('iframe[data-src]');
    const iframeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target;
                iframe.src = iframe.getAttribute('data-src');
                iframe.removeAttribute('data-src');
                observer.unobserve(iframe);
            }
        });
    });

    iframes.forEach(iframe => {
        iframeObserver.observe(iframe);
    });
});
