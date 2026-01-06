/**
 * Back to top button module for West Lake Travel Itinerary
 */
export class BackToTop {
    static init() {
        this.createButton();
        this.setupScrollListener();
        this.setupClickHandler();
    }

    static createButton() {
        this.topButton = document.createElement('button');
        this.topButton.textContent = '↑';
        this.topButton.id = 'topButton';
        this.topButton.setAttribute('aria-label', 'Back to top');
        this.topButton.title = 'Back to top';

        document.body.appendChild(this.topButton);
    }

    static setupScrollListener() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                this.topButton.style.opacity = '1';
            } else {
                this.topButton.style.opacity = '0';
            }
        });
    }

    static setupClickHandler() {
        this.topButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}