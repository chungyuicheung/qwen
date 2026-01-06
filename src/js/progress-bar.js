/**
 * Progress bar module for West Lake Travel Itinerary
 */
export class ProgressBar {
    static init() {
        this.createProgressBar();
        this.setupScrollListener();
    }

    static createProgressBar() {
        this.progressBar = document.createElement('div');
        this.progressBar.id = 'progressBar';
        
        document.body.appendChild(this.progressBar);
    }

    static setupScrollListener() {
        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            this.progressBar.style.width = `${scrollPercent}%`;
        });
    }
}