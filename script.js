// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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


// Image gallery
const portfolioItems = document.querySelectorAll('.portfolio-item img');
portfolioItems.forEach(img => {
    img.addEventListener('click', function() {
        const modalContainer = document.getElementById('modal-container');
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <img src="${img.src}" alt="Portfolio Item">
            </div>
        `;
        modalContainer.appendChild(modal);

        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', function() {
            modalContainer.removeChild(modal);
        });
    });
});
