function initFooterAccordion() {
    const cols = document.querySelectorAll('.footer__col');
    
    cols.forEach(col => {
        const title = col.querySelector('.footer__col-title');
        if (!title) return;

        title.addEventListener('click', () => {
            if (window.innerWidth <= 1024) {
                col.classList.toggle('is-open');
            
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initFooterAccordion);
