// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
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
